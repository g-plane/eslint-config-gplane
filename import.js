module.exports = {
  plugins: ['import'],
  rules: {
    'import/no-unresolved': [2, { ignore: ['^@'] }],
    'import/named': 1,
    'import/default': 2,
    'import/namespace': 2,
    'import/no-absolute-path': 2,
    'import/no-dynamic-require': 1,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-named-as-default-member': 1,
    'import/no-deprecated': 1,
    'import/no-extraneous-dependencies': [
      2,
      { devDependencies: ['**/*.test.js', '**/*.spec.js'] }
    ],
    'import/first': 2,
    'import/exports-last': 1,
    'import/newline-after-import': 2,
    'import/prefer-default-export': 2
  }
}
