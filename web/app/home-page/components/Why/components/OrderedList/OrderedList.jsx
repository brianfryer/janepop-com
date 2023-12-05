import React, { useMemo } from 'react';
import clsx from 'clsx';
import Item from './components/Item/Item';
import styles from './OrderedList.module.scss';

const OrderedList = (props) => {
  const { children, className } = props;

  const [Tag, items] = useMemo(() => ([
    children?.type,
    children?.props?.children.reduce((acc, child) => [...acc, child], []),
  ]), [children]);

  if (!Tag || items?.length === 0) return null;

  return (
    <Tag className={clsx(styles.OrderedList, className)}>
      {items.map((item, i) => {
        const { key, props: itemProps } = item;
        const { children: itemChildren } = itemProps;

        return (
          <li key={key}>
            <Item
              className={styles.OrderedList__item}
              isFirst={i === 0}
              isLast={i === items.length - 1}
            >
              {itemChildren}
            </Item>
          </li>
        );
      })}
    </Tag>
  );
};

export default OrderedList;
