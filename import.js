/* eslint-env commonjs */
/* eslint-plugin-import v2.16.0 */

module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': 2,
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-restricted-paths': 0,
    'import/no-absolute-path': 2,
    'import/no-dynamic-require': 2,
    'import/no-internal-modules': 0,
    'import/no-webpack-loader-syntax': 2,
    'import/no-self-import': 0,
    'import/no-cycle': 0,
    'import/no-useless-path-segments': 2,
    'import/no-relative-parent-imports': 0,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 2,
    'import/no-deprecated': 2,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: [
          'tests/**/*.*',
          'test/**/*.*',
          '__tests__/**/*.*',
          '**/*.test.*',
          '**/*.spec.*',
          'scripts/**/*.*',
          'tools/**/*.*',
          't.js',
        ],
      },
    ],
    'import/no-mutable-exports': 2,
    'import/unambiguous': 0,
    'import/no-commonjs': 0,
    'import/no-amd': 2,
    'import/no-nodejs-modules': 0,
    'import/first': 2,
    'import/exports-last': 0,
    'import/no-duplicates': 2,
    'import/no-namespace': 0,
    'import/extensions': 0,
    'import/order': 2,
    'import/newline-after-import': 2,
    'import/prefer-default-export': 0,
    'import/max-dependencies': 0,
    'import/no-unassigned-import': 0,
    'import/no-named-default': 2,
    'import/no-default-export': 0,
    'import/no-named-export': 0,
    'import/no-anonymous-default-export': 0,
    'import/group-exports': 0,
    'import/dynamic-import-chunkname': 0,
  },
}
