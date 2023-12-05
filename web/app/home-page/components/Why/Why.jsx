import React, { useMemo } from 'react';
import clsx from 'clsx';
import compiler from '~/utils/compiler';
import Container from '~/components/Container/Container';
import Heading from './components/Heading/Heading';
import OrderedList from './components/OrderedList/OrderedList';
import UnOrderedList from './components/UnOrderedList/UnOrderedList';
import styles from './Why.module.scss';

const Why = (props) => {
  const { className, data, fontSize } = props;
  const { componentId, prose } = data?.why || {};

  const {
    orderedList,
    heading,
    subheading,
    unOrderedList,
  } = useMemo(() => {
    const compiledProse = compiler(prose?.blurb);
    const types = {
      h2: 'heading',
      h3: 'subheading',
      ol: 'orderedList',
      ul: 'unOrderedList',
    };

    return compiledProse.props.children.reduce((acc, child) => {
      const type = types[child.type];

      if (type && !acc[type]) {
        acc[type] = child;
      }

      return acc;
    }, {
      heading: null,
      subheading: null,
      orderedList: null,
      unOrderedList: null,
    });
  }, [prose]);

  return (
    <div
      className={clsx(styles.Why, className)}
      id={componentId}
    >
      {heading && (
        <Heading
          className={styles.Why__heading}
          fontSize={fontSize}
        >
          {heading}
        </Heading>
      )}
      <div className={styles.Why__lists}>
        {orderedList && (
          <OrderedList className={styles.Why__orderedList}>
            {orderedList}
          </OrderedList>
        )}
        {unOrderedList && (
          <div className={styles.Why__unOrderedList__wrapper}>
            <Heading
              className={styles.Why__subheading}
              fontSize={fontSize}
            >
              {subheading}
            </Heading>
            <Container>
              <UnOrderedList className={styles.Why__unOrderedList}>
                {unOrderedList}
              </UnOrderedList>
            </Container>
          </div>
        )}
      </div>
    </div>
  );
};

export default Why;
