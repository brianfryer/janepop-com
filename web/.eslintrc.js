module.exports = {
  plugins: ['next-on-pages'],
  extends: ['next', 'plugin:next-on-pages/recommended', 'airbnb/base'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['~', './']],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    '@next/next/no-img-element': 'off',
    'import/no-unresolved': ['error', {
      'ignore': [ '\.svg' ],
    }],
    'max-len': 'off',
    'no-console': ['warn', { allow: ['error', 'info', 'warn'] }],
    'no-void': ['error', { 'allowAsStatement': true }],
  },
};
