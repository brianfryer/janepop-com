import React from 'react';
import clsx from 'clsx';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './About.module.scss';

const About = (props) => {
  const { className, data, fontSize } = props;
  const { componentId, prose } = data?.about || {};

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
            overrides: {
              h2: {
                component: ({
                  children: h2Children,
                  className: h2ClassName,
                  ...h2Props
                }) => (
                  <h2
                    className={h2ClassName}
                    {...h2Props}
                  >
                    <span className={styles.About__flair}>
                      {h2Children}
                    </span>
                  </h2>
                ),
              },
            },
          }}
        >
          {prose?.blurb}
        </Prose>
      </Container>
    </div>
  );
};

export default About;
