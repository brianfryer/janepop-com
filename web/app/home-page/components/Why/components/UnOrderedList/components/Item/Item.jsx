import React, { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import Prose from '~/components/Prose/Prose';
import styles from './Item.module.scss';

const Item = (props) => {
  const { children, className } = props;

  const renderHeading = useCallback((heading, headingClassName) => React.cloneElement(heading, {
    children: heading.props.children,
    className: clsx(heading.props.className, headingClassName),
  }), []);

  const { blurb, heading } = useMemo(() => {
    if (!children) return { blurb: null, heading: null };
    const types = { strong: 'heading' };
    return children?.reduce((acc, child) => {
      const type = types[child.type];

      if (type && !acc[type]) {
        acc[type] = child;
        return acc;
      }

      const key = child.key || child;
      acc.blurb.push(<p key={key}>{child}</p>);
      return acc;
    }, {
      blurb: [],
      heading: null,
    });
  }, [children]);

  return (
    <div className={clsx(styles.Item, className)}>
      <Prose className={styles.Item__blurb}>
        {heading && (
          <p className={styles.Item__heading__wrapper}>
            {renderHeading(heading, styles.Item__heading)}
          </p>
        )}
        {blurb}
      </Prose>
    </div>
  );
};

export default Item;
