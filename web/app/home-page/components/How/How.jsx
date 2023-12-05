import React, { useCallback, useMemo } from 'react';
import clsx from 'clsx';
import parse from 'html-react-parser';
import compiler from '~/utils/compiler';
import Button from '~/components/Button/Button';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import styles from './How.module.scss';

const How = (props) => {
  const { className, data } = props;
  const { componentId, links, prose } = data?.how || {};

  const renderHeading = useCallback((h1) => React.cloneElement(h1, {
    children: h1.props.children,
    className: clsx(styles.How__heading, h1.props.className),
  }), []);

  const { blurb, heading } = useMemo(() => {
    const compiledProse = compiler(prose?.blurb);

    return compiledProse.props.children.reduce((acc, child) => {
      if (child.type === 'h2') {
        const h2 = renderHeading(child);
        acc.heading.push(h2);
        return acc;
      }

      acc.blurb.push(child);
      return acc;
    }, { heading: [], blurb: [] });
  }, [prose, renderHeading]);

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
          {heading}
          {blurb}
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
