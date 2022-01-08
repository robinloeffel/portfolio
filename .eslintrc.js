module.exports = {
  extends: 'sweet',
  rules: {
    'compat/compat': 'off'
  },
  overrides: [{
    files: 'build.mjs',
    extends: 'sweet/node',
    rules: {
      'node/no-unsupported-features/es-syntax': 'off'
    }
  }]
};
