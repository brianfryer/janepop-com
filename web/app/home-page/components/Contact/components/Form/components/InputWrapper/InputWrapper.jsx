import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import styles from './InputWrapper.module.scss';

const MotionErrorMessage = motion(ErrorMessage);

const InputWrapper = (props) => {
  const {
    children,
    className,
    error,
    helperText,
    isLabelHidden,
    label,
    labelClassName,
    labelHtmlFor,
    labelId,
    touched,
  } = props;

  const isErrorMessageVisible = useMemo(() => (error && touched), [error, touched]);

  const ref = useRef(null);

  const [isFocused, setFocused] = useState(false);

  const onBlur = useCallback(() => setFocused(false), []);

  const onFocus = useCallback(() => setFocused(true), []);

  return (
    <div className={clsx(styles.InputWrapper__wrapper, className)}>
      <AnimatePresence>
        {isErrorMessageVisible && (
          <MotionErrorMessage
            className={styles.InputWrapper__errorMessage}
            error={error}
            initial={{
              height: 0,
              opacity: 0,
              y: 0,
            }}
            animate={{
              height: 'auto',
              opacity: 1,
              y: 8,
            }}
            exit={{
              height: 0,
              opacity: 0,
              y: 24,
              transition: {
                duration: 0.1,
              },
            }}
          />
        )}
      </AnimatePresence>
      <div
        className={styles.InputWrapper}
        ref={ref}
      >
        {label && (
          <label
            className={clsx(styles.InputWrapper__label, labelClassName, {
              [styles.isFocused]: isFocused,
              [styles.touched]: touched,
              'sr-only': isLabelHidden,
            })}
            htmlFor={labelHtmlFor}
            id={labelId}
          >
            {label}
          </label>
        )}
        <div className={styles.InputWrapper__children}>
          {children({ className: styles.InputWrapper__input, onBlur, onFocus })}
        </div>
      </div>
      {helperText && (
        <p className={styles.InputWrapper__helperText}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default InputWrapper;
