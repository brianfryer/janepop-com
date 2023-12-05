import React, { useCallback } from 'react';
import clsx from 'clsx';
import getNodeText from '~/utils/getNodeText';
import styles from './Heading.module.scss';

const Heading = (props) => {
  const { children, className } = props;

  const renderHeading = useCallback((heading, headingClassName) => React.cloneElement(heading, {
    children: heading.props.children.map((child) => {
      const key = child.key || child;
      const text = getNodeText(child);
      const [us, theme] = text.split('vs.').map((piece) => piece.trim());
      return (
        <React.Fragment key={key}>
          <span className={styles.Heading__us}>
            <span>{us}</span>
          </span>
          <span className={styles.Heading__delimiter__wrapper}>
            <span className={styles.Heading__delimiter}>
              {' vs '}
            </span>
          </span>
          <span className={styles.Heading__them}>
            <span>{theme}</span>
          </span>
        </React.Fragment>
      );
    }),
    className: clsx(heading.props.className, headingClassName),
  }), []);

  return (
    <div className={clsx(styles.Heading__root, className)}>
      {renderHeading(children, styles.Heading)}
    </div>
  );
};

export default Heading;
