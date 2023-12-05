import React, { useCallback } from 'react';
import clsx from 'clsx';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './Heading.module.scss';

const Heading = (props) => {
  const { children, className, fontSize } = props;

  const renderHeading = useCallback((heading, headingClassName) => React.cloneElement(heading, {
    children: heading.props.children,
    className: clsx(heading.props.className, headingClassName),
  }), []);

  return (
    <div className={clsx(styles.Heading__root, className)}>
      <Container>
        <Prose
          className={styles.Heading__wrapper}
          fontSize={fontSize}
        >
          {renderHeading(children, styles.Heading)}
        </Prose>
      </Container>
    </div>
  );
};

export default Heading;
