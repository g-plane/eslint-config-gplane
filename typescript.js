/* eslint-env commonjs */
/* @typescript-eslint/eslint-plugin v1.4.0 */

module.exports = {
  plugins: ['@typescript-eslint'],
  rules: {
    camelcase: 2,
    indent: 2,
    'no-undef': 0,
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/camelcase': [2, { ignoreDestructuring: true }],
    '@typescript-eslint/class-name-casing': 2,
    '@typescript-eslint/indent': [2, 2, { SwitchCase: 1 }],
    '@typescript-eslint/member-delimiter-style': [
      2,
      {
        multiline: { delimiter: 'none', requireLast: false },
        singleline: { delimiter: 'comma', requireLast: false },
      },
    ],
    '@typescript-eslint/no-angle-bracket-type-assertion': 2,
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-extraneous-class': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-namespace': [
      2,
      { allowDeclarations: true, allowDefinitionFiles: true },
    ],
    '@typescript-eslint/no-require-imports': 2,
    '@typescript-eslint/no-this-alias': [2, { allowDestructuring: true }],
    '@typescript-eslint/no-triple-slash-reference': 2,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-unused-vars': 0, // Consider using similar option from TypeScript compiler itself.
    '@typescript-eslint/no-useless-constructor': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/restrict-plus-operands': 2,
    '@typescript-eslint/type-annotation-spacing': 2,
  },
}
