import React from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';
import Button from '~/components/Button/Button';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './How.module.scss';

const How = (props) => {
  const { className, data } = props;
  const { componentId, links, prose } = data?.how || {};

  return (
    <div
      className={clsx(styles.How__root, className)}
      id={componentId}
    >
      <Container className={styles.How}>
        <Prose
          className={styles.How__prose}
          fontSize="lg"
        >
          {prose?.blurb || ''}
        </Prose>
        {links?.length > 0 && (
          <div className={styles.How__links}>
            {links.map((link) => {
              const { id, label, url } = link;

              return (
                <Button
                  className={styles.How__link}
                  href={url}
                  isLarge
                  isOutline
                  key={id}
                >
                  {parse(label)}
                </Button>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default How;
