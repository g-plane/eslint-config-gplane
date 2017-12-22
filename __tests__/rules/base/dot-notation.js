const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('obj["key"]'))
    .toHasLintingError('dot-notation')
})

test('correct', () => {
  expect(cli.executeOnText('obj.key'))
    .not.toHasLintingError('dot-notation')

  expect(cli.executeOnText('obj["class"]'))
    .not.toHasLintingError('dot-notation')
})
