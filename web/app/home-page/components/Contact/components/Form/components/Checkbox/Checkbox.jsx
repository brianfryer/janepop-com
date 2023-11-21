import React, { useCallback, useId } from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { faCheck } from '@fortawesome/sharp-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { noop } from 'lodash';
import styles from './Checkbox.module.scss';

// member pricing for products and packaging
// marketing / branding
// social media management
// ad campaigns
// web design / development

const Checkbox = (props) => {
  const {
    children,
    className,
    defaultChecked,
    // id: checkboxId,
    name,
    onCheckedChange = noop,
    setValue = noop,
    ...rest
  } = props;

  const id = useId();

  const handleCheckedChange = useCallback((newValue) => {
    setValue(name, newValue);
    onCheckedChange(name, newValue);
  }, [name, onCheckedChange, setValue]);

  return (
    <div className={clsx(styles.Checkbox, className)}>
      <RadixCheckbox.Root
        className={styles.Checkbox__root}
        defaultChecked={defaultChecked}
        id={id}
        name={name}
        onCheckedChange={handleCheckedChange}
        {...rest}
      >
        <RadixCheckbox.Indicator className={styles.Checkbox__indicator}>
          <FontAwesomeIcon
            className={styles.Checkbox__icon}
            icon={faCheck}
          />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label
        className={styles.Checkbox__label}
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
