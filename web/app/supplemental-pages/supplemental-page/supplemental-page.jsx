'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { COMPONENT_KEY } from '~/constants';
import Accordion from '~/components/Accordion/Accordion';
import Container from '~/components/Container/Container';
import EmbedCode from '~/components/EmbedCode/EmbedCode';
import Prose from '~/components/Prose/Prose';
import fetchSupplementalPage from './utils/fetchSupplementalPage';
import styles from './supplemental-page.module.scss';

const COMPONENTS = {
  'global.accordion': Accordion,
  'global.embed-code': EmbedCode,
  'global.prose': Prose,
};

const SupplementalPage = (props) => {
  const { initialData, slug } = props;

  const { data } = useQuery({
    queryKey: ['fetchSupplementalPage', slug],
    queryFn: () => fetchSupplementalPage({ slug }),
    initialData,
  });

  const components = data.attributes.components
    .map((component) => {
      const key = component[COMPONENT_KEY];
      const Component = COMPONENTS[key];

      if (!Component) return null;

      const id = [key, component.id].join('-');

      const componentProps = (() => {
        switch (key) {
          case 'global.prose':
            return { children: component.blurb, fontSize: 'xl' };
          case 'global.embed-code':
            return { children: component.embedCode };
          case 'global.accordion': {
            return {
              data: { items: component.items },
            };
          }
          default:
            return [null, null];
        }
      })();

      return { Component, id, props: componentProps };
    })
    .filter(Boolean);

  return (
    <Container className={styles.SupplementalPage}>
      {components.map((component) => {
        const { Component, id, props: componentProps } = component;
        return <Component key={id} {...componentProps} />;
      })}
    </Container>
  );
};

export default SupplementalPage;
