/* eslint-env commonjs */
/* eslint-plugin-node v10.0.0 */

module.exports = {
  env: {
    node: true,
  },
  plugins: ['node'],
  settings: {
    node: {
      allowModules: ['electron'],
      tryExtensions: ['.js', '.ts', '.tsx', '.json', '.node'],
    },
  },
  rules: {
    'node/no-callback-literal': 2,
    'node/no-exports-assign': 2,
    'node/no-extraneous-import': 0,
    'node/no-extraneous-require': 2,
    'node/no-missing-import': 0,
    'node/no-missing-require': 2,
    'node/no-unpublished-bin': 2,
    'node/no-unpublished-import': 0,
    'node/no-unpublished-require': 2,
    'node/no-unsupported-features/es-builtins': 2,
    'node/no-unsupported-features/es-syntax': 2,
    'node/no-unsupported-features/node-builtins': 2,
    'node/process-exit-as-throw': 2,
    'node/shebang': 2,
    'node/no-deprecated-api': 2,
    'node/exports-style': [2, 'module.exports'],
    'node/file-extension-in-import': 0,
    'node/prefer-global/buffer': [2, 'never'],
    'node/prefer-global/console': [2, 'always'],
    'node/prefer-global/process': [2, 'always'],
    'node/prefer-global/text-decoder': [2, 'never'],
    'node/prefer-global/text-encoder': [2, 'never'],
    'node/prefer-global/url-search-params': [2, 'never'],
    'node/prefer-global/url': [2, 'never'],
    'node/prefer-promises/dns': 2,
    'node/prefer-promises/fs': 2,
  },
}
