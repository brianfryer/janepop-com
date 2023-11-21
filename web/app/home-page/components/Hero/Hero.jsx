import React from 'react';
import clsx from 'clsx';
import Button from '~/components/Button/Button';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './Hero.module.scss';

const Hero = (props) => {
  const { children, className, data } = props;
  const { componentId, links, prose } = data?.hero || {};

  return (
    <div
      className={clsx(styles.Hero__root, className)}
      id={componentId}
    >
      <Container className={styles.Hero__container}>
        <div className={styles.Hero}>
          <Prose
            className={styles.Hero__prose}
            fontSize="lg"
          >
            {prose?.blurb}
          </Prose>
          {links.length > 0 && (
            <div className={styles.Hero__links}>
              {links.map((link) => {
                const { id, label, url } = link;

                return (
                  <Button
                    className={styles.Hero__link}
                    href={url}
                    isLarge
                    isOutline
                    key={id}
                  >
                    {label}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.Hero__children}>
          {children}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
