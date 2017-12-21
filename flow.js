module.exports = {
  'extends': 'gplane',
  parser: 'babel-eslint',
  plugins: [
    'flowtype'
  ],
  rules: {
    'flowtype/boolean-style': [2, 'boolean'],
    'flowtype/define-flow-type': 2,
    'flowtype/delimiter-dangle': [2, 'only-multiline'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 1,
    'flowtype/no-unused-expressions': 2,
    'flowtype/object-type-delimiter': [2, 'comma'],
    'flowtype/require-parameter-type': [
      1,
      {
        excludeArrowFunctions: 'expressionsOnly',
        excludeParameterMatch: '^_'
      }
    ],
    'flowtype/require-return-type': [
      1,
      'always',
      { excludeArrowFunctions: true }
    ],
    'flowtype/require-variable-type': [
      1,
      {
        excludeVariableTypes: {
          'var': true,
          let: true,
          'const': false,
        }
      }
    ],
    'flowtype/semi': [2, 'never'],
    'flowtype/space-after-type-colon': [2, 'always', { allowLineBreak: true }],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/space-before-type-colon': [2, 'never'],
    'flowtype/type-id-match': [1, '^([A-Z][a-z0-9]*)+'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/use-flow-type': 2,
  }
}
