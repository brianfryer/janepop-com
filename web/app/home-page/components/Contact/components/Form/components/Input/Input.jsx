'use client';

import React, {
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import { noop, uniqueId } from 'lodash';
import InputWrapper from '../InputWrapper/InputWrapper';
import styles from './Input.module.scss';

const Input = forwardRef((props, ref) => {
  const {
    autoComplete,
    className,
    error,
    form,
    helperText,
    id,
    inputClassName,
    isLabelHidden,
    label,
    labelClassName,
    labelId,
    name,
    onAutoComplete = noop,
    onBlur = noop,
    onFocus = noop,
    touched,
    type = 'text',
    ...rest
  } = props;

  const formattedInputId = useMemo(() => id || uniqueId(`input-${type}-`), [id, type]);
  const formattedLabelId = useMemo(() => labelId || `${formattedInputId}-label`, [labelId, formattedInputId]);

  const isAutoCompleteOff = useMemo(() => autoComplete === 'off', [autoComplete]);
  const [isAutoCompleted, setAutoCompleted] = useState(false);
  const isTouched = useMemo(() => (isAutoCompleted || touched), [isAutoCompleted, touched]);

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

  return (
    <InputWrapper
      className={clsx(styles.Input__wrapper, className)}
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
        className: anotherInputClassName,
        onBlur: onBlurHandler,
        onFocus: onFocusHandler,
      }) => (
        <input
          aria-labelledby={formattedLabelId}
          autoComplete={autoComplete}
          className={clsx(styles.Input, inputClassName, anotherInputClassName, {
            [styles.error]: isTouched && error,
            [styles.touched]: isTouched,
          })}
          id={formattedInputId}
          name={name}
          onBlur={(e) => {
            onBlurHandler(e);
            onBlur(e);
          }}
          onFocus={(e) => {
            onFocusHandler(e);
            onFocus(e);
          }}
          ref={ref}
          suppressHydrationWarning
          type={type}
          {...(touched && { 'aria-invalid': error ? 'true' : 'false' })}
          {...(isAutoCompleteOff && {
            'data-form-type': 'other',
            'data-lpignore': 'true',
          })}
          {...rest}
        />
      )}
    </InputWrapper>
  );
});

Input.displayName = 'Input';

export default Input;
