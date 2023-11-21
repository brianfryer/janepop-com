'use client';

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import { noop, uniqueId } from 'lodash';
import InputWrapper from '../InputWrapper/InputWrapper';
import styles from './Textarea.module.scss';

const Textarea = forwardRef((props, ref) => {
  const {
    autoComplete,
    children,
    className,
    error,
    form,
    helperText,
    id,
    isLabelHidden,
    label,
    labelClassName,
    labelId,
    maxLength,
    name,
    onAutoComplete = noop,
    onBlur = noop,
    onChange = noop,
    onFocus = noop,
    rows = 1,
    touched,
    ...rest
  } = props;

  const formattedInputId = useMemo(() => id || uniqueId('textarea-'), [id]);
  const formattedLabelId = useMemo(() => labelId || `${formattedInputId}-label`, [labelId, formattedInputId]);

  const value = form?.watch(name);
  const count = useMemo(() => value?.length || 0, [value]);

  const isAutoCompleteOff = useMemo(() => autoComplete === 'off', [autoComplete]);
  const [isAutoCompleted, setAutoCompleted] = useState(false);

  useEffect(() => {
    let timer;

    const handleAutoComplete = (e) => {
      if (isAutoCompleteOff || e.target.name !== name) return;

      if (e.target.hasAttribute('autocompleted')) {
        setAutoCompleted(true);
        timer = setTimeout(() => {
          onAutoComplete();
          form?.trigger(name);
        }, 0);
      }
    };

    document.addEventListener('onautocomplete', handleAutoComplete);
    return () => {
      document.removeEventListener('onautocomplete', handleAutoComplete);
      clearTimeout(timer);
    };
  }, [
    form,
    isAutoCompleteOff,
    name,
    onAutoComplete,
  ]);

  const [isTouched, setTouched] = useState(false);

  useEffect(() => {
    if (touched || isAutoCompleted) {
      setTouched(true);
    }
  }, [isAutoCompleted, touched]);

  const handleBlur = useCallback((...args) => {
    if (maxLength) {
      form?.trigger(name);
    }

    onBlur(...args);

    if (form?.getValues(name) === '') {
      setTouched(false);
      return;
    }

    setTouched(true);
  }, [
    maxLength,
    name,
    onBlur,
    form,
  ]);

  const handleFocus = useCallback((...args) => {
    if (maxLength) {
      form?.trigger(name);
    }

    onFocus(...args);
  }, [
    maxLength,
    name,
    onFocus,
    form,
  ]);

  return (
    <InputWrapper
      className={clsx(styles.Textarea__wrapper, className)}
      error={error}
      helperText={helperText}
      isLabelHidden={isLabelHidden}
      label={label}
      labelClassName={labelClassName}
      labelHtmlFor={formattedInputId}
      labelId={formattedLabelId}
      touched={isTouched}
    >
      {({
        className: textareaClassName,
        onBlur: onBlurHandler,
        onFocus: onFocusHandler,
      }) => (
        <div className={styles.Textarea__maxLength__wrapper}>
          <TextareaAutosize
            className={clsx(styles.Textarea, textareaClassName, {
              [styles.error]: isTouched && error,
              [styles.maxLength]: isTouched && maxLength,
              [styles.touched]: isTouched,
            })}
            id={formattedInputId}
            name={name}
            minRows={rows}
            onBlur={(e) => {
              handleBlur(e);
              onBlurHandler(e);
            }}
            onChange={onChange}
            onFocus={(e) => {
              handleFocus(e);
              onFocusHandler(e);
            }}
            ref={ref}
            suppressHydrationWarning
            {...(isTouched && { 'aria-invalid': error ? 'true' : 'false' })}
            {...rest}
          >
            {children}
          </TextareaAutosize>
          {maxLength && (() => {
            const delta = count - maxLength;

            return (
              <div className={styles.Textarea__maxLength}>
                {count.toLocaleString()} out of {maxLength.toLocaleString()} max&nbsp;characters
                {delta > 0 && (() => {
                  const formattedDelta = delta.toLocaleString();

                  return (
                    <>
                      &nbsp;&mdash;&nbsp;
                      <strong>
                        {formattedDelta} over the limit!
                      </strong>
                    </>
                  );
                })()}
              </div>
            );
          })()}
        </div>
      )}
    </InputWrapper>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
