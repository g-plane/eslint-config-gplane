const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('()=>0'))
    .toHasLintingError('arrow-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('() => 0'))
    .not.toHasLintingError('arrow-spacing')
})
