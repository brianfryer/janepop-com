import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import styles from './Tooltip.module.scss';

const Tooltip = (props) => {
  const {
    children,
    className,
    content,
    contentProps = {},
    ...rest
  } = props;

  return (
    <RadixTooltip.Root
      delayDuration={0}
      {...rest}
    >
      {children}
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          className={clsx(styles.Tooltip__content, className)}
          {...contentProps}
        >
          <RadixTooltip.Arrow className={styles.Tooltip__arrow} />
          {content}
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
};

const Root = Tooltip;
const { Trigger } = RadixTooltip;
export { Root, Trigger };
