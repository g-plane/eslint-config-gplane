module.exports = {
  'extends': 'gplane',
  plugins: ['eslint-comments'],
  rules: {
    'eslint-comments/disable-enable-pair': [1, { allowWholeFile: true }],
    'eslint-comments/no-aggregating-enable': 1,
    'eslint-comments/no-duplicate-disable': 1,
    'eslint-comments/no-unused-disable': 1,
    'eslint-comments/no-unused-enable': 1
  }
}
