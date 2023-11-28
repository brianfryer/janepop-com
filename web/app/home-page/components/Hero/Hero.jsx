import React, { useCallback } from 'react';
import clsx from 'clsx';
import Link from '~/components/Link/Link';
import Markdown from '~/components/Markdown/Markdown';
import Prose from '~/components/Prose/Prose';
import Bg from './components/Bg/Bg';
import SVGunderline from './assets/underline.svg';
import styles from './Hero.module.scss';

const Hero = (props) => {
  const {
    children,
    className,
    data,
    fontSize,
  } = props;

  const { componentId, links, prose } = data?.hero || {};

  const renderH1 = useCallback((h1Props) => {
    const { children: h1Children } = h1Props;

    return (
      <h1 className={styles.Hero__heading}>
        {h1Children}
      </h1>
    );
  }, []);

  const renderEm = useCallback((emProps) => {
    const { children: emChildren } = emProps;

    return (
      <span className={styles.Hero__em}>
        {emChildren}
        <SVGunderline className={styles.Hero__em__underline} />
      </span>
    );
  }, []);

  const renderP = useCallback((pProps) => {
    const { children: pChildren } = pProps;

    return (
      <p className={styles.Hero__p}>
        {pChildren}
      </p>
    );
  }, []);

  return (
    <div
      className={clsx(styles.Hero__root, className)}
      id={componentId}
    >
      <Bg className={styles.Hero__bg} />
      <div className={styles.Hero__wrapper}>
        <div className={styles.Hero}>
          <Prose
            className={styles.Hero__prose}
            fontSize={fontSize}
          >
            <Markdown
              options={{
                forceBlock: true,
                overrides: {
                  em: renderEm,
                  h1: renderH1,
                  p: renderP,
                },
                wrapper: React.Fragment,
              }}
            >
              {prose?.blurb}
            </Markdown>
            {links.length > 0 && (
              <div className={clsx(styles.Hero__links, 'not-prose')}>
                {links.map((link) => {
                  const { id, label, url } = link;

                  return (
                    <Link
                      className={styles.Hero__link}
                      href={url}
                      key={id}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            )}
          </Prose>
        </div>
        {children && (
          <div className={styles.Hero__children}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
