'use client';

import React, { useContext, useState } from 'react';
import clsx from 'clsx';
import * as Popover from '@radix-ui/react-popover';
import { faBars, faXmark } from '@fortawesome/sharp-regular-svg-icons';
import BreakpointsContext from '~/contexts/BreakpointsContext';
import Button from '~/components/Button/Button';
import styles from './Wrapper.module.scss';

const Wrapper = (props) => {
  const { children } = props;

  const [open, setOpen] = useState(false);

  const { breakpoint } = useContext(BreakpointsContext);

  if (!breakpoint) return null;

  if (breakpoint !== 'xs' && breakpoint !== 'sm') return children;

  return (
    <Popover.Root onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <Button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={clsx(styles.Wrapper__trigger, {
            [styles.open]: open,
          })}
          iconEnd={open ? faXmark : faBars}
          // isLarge
          isOutline
        >
          {open ? 'Close' : 'Menu'}
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className={styles.Wrapper__content}
          sideOffset={24}
        >
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Wrapper;
