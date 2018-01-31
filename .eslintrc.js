module.exports = {
  extends: 'airbnb-base',
  env: {
    jest: true,
    node: true,
  },
  rules: {
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
};
