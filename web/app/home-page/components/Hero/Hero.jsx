import React, { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import compiler from '~/utils/compiler';
import Link from '~/components/Link/Link';
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

  const renderEm = useCallback((em) => React.cloneElement(em, {
    children: [
      em.props.children,
      <SVGunderline
        className={styles.Hero__em__underline}
        key="underline"
      />,
    ],
    className: clsx(styles.Hero__em, em.props.className),
  }), []);

  const { blurb, heading } = useMemo(() => {
    const compiledProse = compiler(prose?.blurb);

    if (!compiledProse?.props?.children) {
      return {
        blurb: null,
        heading: null,
      };
    }

    return compiledProse.props.children.reduce((acc, child) => {
      if (child.type === 'h1') {
        acc.heading.push(child);
        return acc;
      }

      if (child.type === 'ul') {
        const ul = <div className="not-prose" key={child.key}>{child}</div>;
        acc.blurb.push(ul);
        return acc;
      }

      const childClone = React.cloneElement(child, {
        children: child.props.children.map((c, i) => {
          const isString = typeof c === 'string';
          const key = isString ? i : c.key;
          return (
            <React.Fragment key={key}>
              {c.type === 'em' ? renderEm(c) : c}
            </React.Fragment>
          );
        }),
      });

      acc.blurb.push(childClone);
      return acc;
    }, { blurb: [], heading: [] });
  }, [prose, renderEm]);

  return (
    <div
      className={clsx(styles.Hero__root, className)}
      id={componentId}
    >
      <Bg className={styles.Hero__bg} />
      <div className={styles.Hero__wrapper}>
        <div className={styles.Hero}>
          <Prose
            className={styles.Hero__heading}
            fontSize={fontSize}
          >
            {heading}
          </Prose>
          <Prose
            className={styles.Hero__blurb}
            fontSize={fontSize}
          >
            {blurb}
          </Prose>
          {links?.length > 0 && (
            <div className={styles.Hero__links}>
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
