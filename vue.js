// eslint-plugin-vue v5.2.2
/* eslint sort-keys: 2 */
/* eslint-env commonjs */

module.exports = {
  env: {
    browser: true,
  },
  parserOptions: {
    extraFileExtensions: ['.vue'], // For "@typescript-eslint/parser"
  },
  plugins: ['vue'],
  rules: {
    'vue/array-bracket-spacing': [2, 'never'],
    'vue/arrow-spacing': 2,
    'vue/attribute-hyphenation': [2, 'always'],
    'vue/attributes-order': 1,
    'vue/block-spacing': 2,
    'vue/brace-style': [2, '1tbs'],
    'vue/comma-dangle': [2, 'only-multiline'],
    'vue/comment-directive': 2,
    'vue/component-name-in-template-casing': [2, 'kebab-case'],
    'vue/eqeqeq': 2,
    'vue/html-closing-bracket-newline': [2, {
      multiline: 'always',
      singleline: 'never',
    }],
    'vue/html-closing-bracket-spacing': [2, {
      endTag: 'never',
      selfClosingTag: 'always',
      startTag: 'never',
    }],
    'vue/html-end-tags': 2,
    'vue/html-indent': [2, 2],
    'vue/html-quotes': [2, 'double'],
    'vue/html-self-closing': 2,
    'vue/jsx-uses-vars': 2,
    'vue/key-spacing': 2,
    'vue/match-component-file-name': 2,
    'vue/multiline-html-element-content-newline': 2,
    'vue/mustache-interpolation-spacing': [2, 'always'],
    'vue/name-property-casing': [2, 'PascalCase'],
    'vue/no-async-in-computed-properties': 2,
    'vue/no-dupe-keys': 2,
    'vue/no-duplicate-attributes': 2,
    'vue/no-multi-spaces': 2,
    'vue/no-parsing-error': 2,
    'vue/no-reserved-keys': 2,
    'vue/no-shared-component-data': 2,
    'vue/no-side-effects-in-computed-properties': 2,
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    'vue/no-template-key': 2,
    'vue/no-template-shadow': 2,
    'vue/no-textarea-mustache': 2,
    'vue/no-unused-components': 2,
    'vue/no-unused-vars': 2,
    'vue/no-use-v-if-with-v-for': 2,
    'vue/object-curly-spacing': [
      2, 'always', { arraysInObjects: true, objectsInObjects: true },
    ],
    'vue/order-in-components': 2,
    'vue/prop-name-casing': [2, 'camelCase'],
    'vue/require-component-is': 2,
    'vue/require-direct-export': 2,
    'vue/require-prop-types': 2,
    'vue/require-render-return': 2,
    'vue/require-v-for-key': 2,
    'vue/require-valid-default-prop': 2,
    'vue/return-in-computed-property': 2,
    'vue/script-indent': [2, 2, {
      baseIndent: 0,
      switchCase: 1,
    }],
    'vue/space-infix-ops': 2,
    'vue/space-unary-ops': 2,
    'vue/this-in-template': 2,
    'vue/v-bind-style': 2,
    'vue/v-on-function-call': [2, 'never'],
    'vue/v-on-style': 2,
    'vue/valid-template-root': 2,
    'vue/valid-v-bind': 2,
    'vue/valid-v-cloak': 2,
    'vue/valid-v-else': 2,
    'vue/valid-v-else-if': 2,
    'vue/valid-v-for': 2,
    'vue/valid-v-html': 2,
    'vue/valid-v-if': 2,
    'vue/valid-v-model': 2,
    'vue/valid-v-on': 2,
    'vue/valid-v-once': 2,
    'vue/valid-v-pre': 2,
    'vue/valid-v-show': 2,
    'vue/valid-v-text': 2,
  },
}
