/* eslint-env commonjs */
/* @typescript-eslint/eslint-plugin v2.8.0 */
const base = require('./.eslintrc.json').rules

module.exports = {
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx', '.js'],
      },
    },
  },
  rules: {
    'brace-style': 0,
    camelcase: 0,
    'func-call-spacing': 0,
    indent: 0,
    'no-empty-function': 0,
    'no-extra-parens': 0,
    'no-undef': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    quotes: 0,
    semi: 0,
    'space-before-function-paren': 0,
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [
      2,
      { default: 'array-simple', readonly: 'array-simple' },
    ],
    '@typescript-eslint/await-thenable': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/brace-style': base['brace-style'],
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 2,
    '@typescript-eslint/class-name-casing': 2,
    '@typescript-eslint/consistent-type-assertions': [
      2,
      { assertionStyle: 'as' },
    ],
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/func-call-spacing': base['func-call-spacing'],
    '@typescript-eslint/generic-type-naming': 0,
    '@typescript-eslint/indent': base.indent,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: { delimiter: 'none', requireLast: false },
        singleline: { delimiter: 'comma', requireLast: false },
      },
    ],
    '@typescript-eslint/member-naming': 0,
    '@typescript-eslint/member-ordering': 0,
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-empty-function': base['no-empty-function'],
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extra-parens': base['no-extra-parens'],
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-floating-promises': 0,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-magic-numbers': 0,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-misused-promises': 2,
    '@typescript-eslint/no-namespace': [
      2,
      { allowDeclarations: true, allowDefinitionFiles: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-this-alias': [2, { allowDestructuring: true }],
    '@typescript-eslint/no-type-alias': 2,
    '@typescript-eslint/no-unnecessary-condition': 2,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-arguments': 0,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-untyped-public-signature': 0,
    '@typescript-eslint/no-unused-expressions': base['no-unused-expressions'],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': [2, 'nofunc'],
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-function-type': 0,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/prefer-namespace-keyword': 0,
    '@typescript-eslint/prefer-readonly': 0,
    '@typescript-eslint/prefer-regexp-exec': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    '@typescript-eslint/promise-function-async': 0,
    '@typescript-eslint/quotes': base.quotes,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/require-await': 0,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/restrict-template-expressions': [
      2,
      {
        allowNumber: true,
        allowBoolean: false,
        allowNullable: false,
      },
    ],
    '@typescript-eslint/semi': base.semi,
    '@typescript-eslint/space-before-function-paren':
      base['space-before-function-paren'],
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/triple-slash-reference': [
      2,
      { path: 'never', types: 'never', lib: 'never' },
    ],
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/typedef': 0,
    '@typescript-eslint/unbound-method': [2, { ignoreStatic: true }],
    '@typescript-eslint/unified-signatures': 2,
  },
}

try {
  require.resolve('eslint-plugin-import')
  Object.assign(module.exports.rules, {
    'import/no-unresolved': 0,
    'import/named': 0,
    'import/default': 0,
    'import/namespace': 0,
  })
} catch (_) {
  // ignore
}

try {
  require.resolve('eslint-plugin-node')
  Object.assign(module.exports.rules, {
    'node/no-extraneous-require': 0,
    'node/no-missing-require': 0,
    'node/no-unsupported-features/es-syntax': 0,
  })
} catch (_) {
  // ignore
}
