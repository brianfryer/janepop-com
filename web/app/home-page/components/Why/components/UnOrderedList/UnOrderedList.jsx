import React, { useMemo } from 'react';
import clsx from 'clsx';
import Item from './components/Item/Item';
import styles from './UnOrderedList.module.scss';

const UnOrderedList = (props) => {
  const { children, className } = props;

  const [Tag, items] = useMemo(() => ([
    children?.type,
    children?.props?.children.reduce((acc, child) => [...acc, child], []),
  ]), [children]);

  if (!Tag || items?.length === 0) return null;

  return (
    <Tag className={clsx(styles.UnOrderedList, className)}>
      {items.map((item) => {
        const { key, props: itemProps } = item;
        const { children: itemChildren } = itemProps;

        return (
          <li key={key}>
            <Item className={styles.UnOrderedList__item}>
              {itemChildren}
            </Item>
          </li>
        );
      })}
    </Tag>
  );
};

export default UnOrderedList;
