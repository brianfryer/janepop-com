import React, { useCallback } from 'react';
import clsx from 'clsx';
import Link from '~/components/Link/Link';
import Prose from '~/components/Prose/Prose';
import styles from './Welcome.module.scss';

const Welcome = (props) => {
  const { className, data } = props;
  const { componentId, links, prose } = data?.welcome || {};

  const renderHeading = useCallback((headingProps = {}) => {
    const { children } = headingProps;

    return (
      <>
        <h2 className={styles.Welcome__heading}>
          {children}
        </h2>
        <div className="not-prose">
          {'<SearchForm />'}
        </div>
        {links?.length > 0 && (
          <div className={clsx(styles.Welcome__links__wrapper, 'not-prose')}>
            <ul className={styles.Welcome__links}>
              {links.map((link) => {
                const { id, label, url } = link;

                return (
                  <li key={id}>
                    <Link
                      className={styles.Welcome__link}
                      href={url}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </>
    );
  }, [links]);

  return (
    <div
      className={clsx(styles.Welcome__root, className)}
      id={componentId}
    >
      <div className={styles.Welcome}>
        <Prose
          className={styles.Welcome__prose}
          options={{
            overrides: { h2: renderHeading },
          }}
        >
          {prose?.blurb || ''}
        </Prose>
      </div>
    </div>
  );
};

export default Welcome;
