'use client';

import React, { useContext, useMemo } from 'react';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import BreakpointsContext from '~/contexts/BreakpointsContext';
import fetchHomePage from './utils/fetchHomePage';
import About from './components/About/About';
// import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
// import How from './components/How/How';
// import Welcome from './components/Welcome/Welcome';
import Why from './components/Why/Why';
import styles from './home-page.module.scss';

const HomePage = (props) => {
  const { initialData } = props;

  const { data } = useQuery({
    queryKey: ['fetchHomePage'],
    queryFn: fetchHomePage,
    initialData,
  });

  const {
    about,
    // contact,
    hero,
    // how,
    // welcome,
    why,
  } = data?.attributes || {};

  const { breakpoint } = useContext(BreakpointsContext);

  const fontSize = useMemo(() => {
    if (breakpoint === 'xs') return 'lg';
    if (breakpoint === 'sm') return 'xl';
    return '2xl';
  }, [breakpoint]);

  const sections = useMemo(() => [
    !hero ? null : {
      Component: Hero,
      className: styles.HomePage__hero,
      data: { hero },
      key: 'hero',
    },
    !about ? null : {
      Component: About,
      className: styles.HomePage__about,
      data: { about },
      key: 'about',
    },
    !why ? null : {
      Component: Why,
      className: styles.HomePage__why,
      data: { why },
      key: 'why',
    },
    // !how ? null : {
    //   Component: How,
    //   className: styles.HomePage__how,
    //   data: { how },
    //   key: 'how',
    // },
    // !contact ? null : {
    //   Component: Contact,
    //   className: styles.HomePage__contact,
    //   data: { contact },
    //   key: 'contact',
    // },
  ].filter(Boolean), [
    about,
    // contact,
    hero,
    // how,
    why,
  ]);

  if (sections.length === 0) return null;

  return (
    <div className={styles.HomePage}>
      {sections.map(({
        Component,
        className,
        data: componentData,
        key,
      }) => (
        <Component
          className={clsx(styles.HomePage__section, className)}
          data={componentData}
          fontSize={fontSize}
          key={key}
        />
      ))}
    </div>
  );
};

export default HomePage;
