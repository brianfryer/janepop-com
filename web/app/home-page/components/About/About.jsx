import React, { useCallback } from 'react';
import clsx from 'clsx';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './About.module.scss';

const About = (props) => {
  const { className, data, fontSize } = props;
  const { componentId, prose } = data?.about || {};

  const renderH2 = useCallback((h2Props) => {
    const { children: h2Children, className: h2ClassName, ...rest } = h2Props;

    return (
      <h2
        className={clsx(styles.About__heading, h2ClassName)}
        {...rest}
      >
        <span className={styles.About__flair}>
          {h2Children}
        </span>
      </h2>
    );
  }, []);

  return (
    <div
      className={clsx(styles.About__root, className)}
      id={componentId}
    >
      <Container className={styles.About}>
        <Prose
          className={styles.About__prose}
          fontSize={fontSize}
          options={{
            overrides: { h2: renderH2 },
          }}
        >
          {prose?.blurb || ''}
        </Prose>
      </Container>
    </div>
  );
};

export default About;
