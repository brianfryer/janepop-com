const rawRadixColors = require('@radix-ui/colors');

const raidxColors = Object.entries(rawRadixColors).reduce((acc, [colorKey, colors]) => {
  const isAlphaOrP3Color = colorKey.endsWith('A') || colorKey.endsWith('P3');
  if (isAlphaOrP3Color) return acc;

  // Convert camelCase to kebab-case and lowercase
  const formattedColorKey = colorKey.replace(/[A-Z]/g, (s) => `-${s}`).toLowerCase();

  // Convert radix-ui colors to tailwindcss colors
  const formattedColors = (() => {
    const baseKey = colorKey.replace('Dark', '');
    return Object
      .entries(colors)
      .map(([k, v]) => {
        const key = k.replace(baseKey, '');
        return { [key]: v };
      })
      .reduce((a, b) => ({ ...a, ...b }), {});
  })();

  return { ...acc, [`radix-${formattedColorKey}`]: formattedColors };
}, {});

module.exports = raidxColors;
