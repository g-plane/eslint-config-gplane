/* eslint-env commonjs */
/* @typescript-eslint/eslint-plugin v1.4.0 */

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
    camelcase: 2,
    indent: 2,
    'no-undef': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/array-type': [2, 'array-simple'],
    '@typescript-eslint/ban-types': [2, {
      types: {
        String: {
          message: 'Use `string` instead.',
          fixWith: 'string',
        },
        Number: {
          message: 'Use `number` instead.',
          fixWith: 'number',
        },
        Boolean: {
          message: 'Use `boolean` instead.',
          fixWith: 'boolean',
        },
      },
    }],
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],
    '@typescript-eslint/class-name-casing': 2,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/generic-type-naming': 0,
    '@typescript-eslint/indent': [2, 2, { SwitchCase: 1 }],
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
    '@typescript-eslint/no-angle-bracket-type-assertion': 2,
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-namespace': [
      2,
      { allowDeclarations: true, allowDefinitionFiles: true },
    ],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-this-alias': [2, { allowDestructuring: true }],
    '@typescript-eslint/no-triple-slash-reference': 2,
    '@typescript-eslint/no-type-alias': 2,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-unused-vars': 0, // Consider using similar option from TypeScript compiler itself.
    '@typescript-eslint/no-use-before-define': [2, 'nofunc'],
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/prefer-function-type': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/prefer-namespace-keyword': 0,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/type-annotation-spacing': 2,
  },
}

try {
  require.resolve('eslint-plugin-node')
  module.exports.rules['node/no-unsupported-features/es-syntax'] = 0
} catch (_) {
  // ignore
}
