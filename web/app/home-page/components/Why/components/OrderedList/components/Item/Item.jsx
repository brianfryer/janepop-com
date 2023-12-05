import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import BreakpointsContext from '~/contexts/BreakpointsContext';
import Container from '~/components/Container/Container';
import Prose from '~/components/Prose/Prose';
import Heading from './components/Heading/Heading';
import styles from './Item.module.scss';

const Item = (props) => {
  const {
    children,
    className,
    isFirst,
    isLast,
  } = props;

  const { blurb, heading } = useMemo(() => {
    if (!children) return { blurb: null, heading: null };
    const types = { h3: 'heading', p: 'blurb' };
    return children?.reduce((acc, child) => {
      const type = types[child.type];

      if (type && !acc[type]) {
        acc[type] = child;
      }

      return acc;
    }, {
      blurb: null,
      heading: null,
    });
  }, [children]);

  const { them, us } = useMemo(() => {
    if (!blurb?.props) return { them: null, us: null };
    const types = { strong: 'us', em: 'them' };
    return blurb.props.children.reduce((acc, child) => {
      const type = types[child.type];

      if (type && !acc[type]) {
        acc[type] = child;
      }

      return acc;
    }, { them: null, us: null });
  }, [blurb]);

  const { breakpoint } = useContext(BreakpointsContext);

  const fontSize = useMemo(() => {
    if (breakpoint === 'xs' || breakpoint === 'sm') return null;
    return 'xl';
  }, [breakpoint]);

  return (
    <div
      className={clsx(styles.Item, className, {
        [styles.isFirst]: isFirst,
        [styles.isLast]: isLast,
      })}
    >
      <Container className={styles.Item__container}>
        <span className={styles.Item__fauxBg} />
        {heading && <Heading className={styles.Item__heading}>{heading}</Heading>}
        <div className={styles.Item__blurb}>
          {us && (
            <div className={styles.Item__us__wrapper}>
              <Prose
                className={styles.Item__us}
                fontSize={fontSize}
              >
                <p>{us}</p>
              </Prose>
            </div>
          )}
          {them && (
            <Prose
              className={styles.Item__them}
              fontSize={null}
            >
              <p>{them}</p>
            </Prose>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Item;
