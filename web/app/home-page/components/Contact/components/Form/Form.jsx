'use client';

import React from 'react';
import clsx from 'clsx';
import Button from '~/components/Button/Button';
import Prose from '~/components/Prose/Prose';
import useForm from './hooks/useForm';
import {
  EMAIL_INPUT,
  MESSAGE_INPUT,
  NAME_INPUT,
  OPTIONS_INPUTS,
  PHONE_INPUT,
} from './constants';
import Checkbox from './components/Checkbox/Checkbox';
import Input from './components/Input/Input';
import Textarea from './components/Textarea/Textarea';
import styles from './Form.module.scss';

const Form = (props) => {
  const { className } = props;

  const {
    defaultValues,
    formState,
    handleSubmit,
    register,
    onSubmit,
    setValue,
  } = useForm();

  const inputs = [
    [Input, NAME_INPUT, { type: 'text' }, { required: true }],
    [Input, PHONE_INPUT, {}, {}],
    [Input, EMAIL_INPUT, { type: 'email' }, { required: true }],
    [Textarea, MESSAGE_INPUT, { maxLength: 280 }, {}],
  ];

  return (
    <div className={clsx(styles.Form__root, className)}>
      <form
        className={styles.Form}
        onSubmit={handleSubmit(onSubmit)}
        suppressHydrationWarning
      >
        <Prose className={styles.Form__prose}>
          <p className="lead">
            {OPTIONS_INPUTS.label}
          </p>
          <div className="not-prose">
            {OPTIONS_INPUTS.list.map((option) => (
              <Checkbox
                defaultChecked={defaultValues[option.name]}
                key={option.name}
                name={option.name}
                setValue={setValue}
              >
                {option.label}
              </Checkbox>
            ))}
          </div>
          <br />
          {inputs.map(([Component, input, inputProps, options]) => {
            const { label, name } = input;

            return (
              <React.Fragment key={name}>
                <div className="not-prose">
                  <Component
                    className={styles.Form__input}
                    defaultValue={defaultValues[name]}
                    label={label}
                    touched={formState.touchedFields[name]}
                    {...inputProps}
                    {...register(name, options)}
                  />
                </div>
                <br />
              </React.Fragment>
            );
          })}
          <div className="not-prose">
            <Button
              className={styles.Form__submitButton}
              isExtraLarge
              type="submit"
            >
              Send Message
            </Button>
          </div>
        </Prose>
      </form>
    </div>
  );
};

export default Form;
