'use client';

import React, { useContext, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import BreakpointsContext from '~/contexts/BreakpointsContext';
import fetchHomePage from './utils/fetchHomePage';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import How from './components/How/How';
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
    contact,
    hero,
    how,
    // welcome,
    why,
  } = data?.attributes || {};

  const { breakpoint } = useContext(BreakpointsContext);

  const fontSize = useMemo(() => {
    if (breakpoint === 'xs') return 'lg';
    if (breakpoint === 'sm') return 'xl';
    return '2xl';
  }, [breakpoint]);

  return (
    <div className={styles.HomePage}>
      <Hero
        className={styles.HomePage__hero}
        data={{ hero }}
        fontSize={fontSize}
      >
        {/* <Welcome
          className={styles.HomePage__welcome}
          data={{ welcome }}
          fontSize={fontSize}
        /> */}
      </Hero>
      <About
        className={styles.HomePage__about}
        data={{ about }}
        fontSize={fontSize}
      />
      <Why
        className={styles.HomePage__why}
        data={{ why }}
        fontSize={fontSize}
      />
      <How
        className={styles.HomePage__how}
        data={{ how }}
        fontSize={fontSize}
      />
      <Contact
        className={styles.HomePage__contact}
        data={{ contact }}
        fontSize={fontSize}
      />
    </div>
  );
};

export default HomePage;
