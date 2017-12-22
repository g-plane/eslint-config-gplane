const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const o = {}\nfor (k in o) { e = o[k] }'))
    .toHasLintingError('guard-for-in')
})

test('correct', () => {
  expect(cli.executeOnText(
    'const o = {}\nfor (k in o) { if (o.hasOwnProperty(k)) { e = o[k] } }'
  )).not.toHasLintingError('guard-for-in')
})
