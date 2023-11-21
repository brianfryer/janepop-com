const { forEach, set } = require('lodash');
const breakpoints = require('../breakpoints.json');

const screens = () => {
  const formattedBreakpoints = Object
    .keys(breakpoints)
    .map((key) => [key, breakpoints[key]]);

  const SCREENS = {};

  forEach(formattedBreakpoints, (b, i) => {
    const next = formattedBreakpoints[i + 1];
    const nextMin = next ? next[next.length - 1] : 10000;

    const key = b[0];
    const min = `${b[1]}px`;
    const max = `${nextMin - 1}px`;

    if (i === 0) {
      return set(SCREENS, `${key}.max`, max);
    }

    if (i === formattedBreakpoints.length - 1) {
      return set(SCREENS, `${key}.min`, min);
    }

    const setScreens = () => {
      set(SCREENS, `${key}>.min`, min);
      set(SCREENS, `${key}.min`, min);
      set(SCREENS, `${key}.max`, max);
      set(SCREENS, `<${key}.max`, max);
    };

    return setScreens();
  });

  // Example output:
  // {
  //   xs: { max },
  //   'sm>': { min },
  //   sm: { min, max },
  //   '<sm': { max },
  //   'md>': { min },
  //   md: { min, max },
  //   '<md': { max },
  //   'lg>': { min },
  //   lg: { min, max },
  //   '<lg': { max },
  //   xl: { min }
  // }

  return SCREENS;
};

module.exports = screens;
