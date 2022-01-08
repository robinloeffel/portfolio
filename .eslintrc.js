module.exports = {
  extends: 'sweet',
  overrides: [{
    files: 'build.mjs',
    extends: 'sweet/node',
    rules: {
      'node/no-unsupported-features/es-syntax': 'off'
    }
  }]
};
