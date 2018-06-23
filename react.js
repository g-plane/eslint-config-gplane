const { isPkgInstalled } = require('./utils')

module.exports = {
  plugins: [
    'react'
  ],
  env: {
    browser: true,
  },
  settings: {
    react: {
      pragma: isPkgInstalled('preact') ? 'h' : 'React'
    }
  },
  rules: {
    'react/destructuring-assignment': [2, 'always'],
    'react/no-access-state-in-setstate': 2,
    'react/no-array-index-key': 2,
    'react/no-children-prop': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-redundant-should-component-update': 2,
    'react/no-typos': 1,
    'react/no-this-in-sfc': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 1,
    'react/no-unused-state': 1,
    'react/no-will-update-set-state': 2,
    'react/prefer-stateless-function': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, 'line-aligned'],
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': [2, {
      when: 'never',
      children: true,
    }],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline-multiprop'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-no-comment-textnodes': 1,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-space-before-closing': [2, 'always'],
    'react/jsx-tag-spacing': [2, {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never'
    }],
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': [2, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      'return': 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line'
    }]
  }
}
