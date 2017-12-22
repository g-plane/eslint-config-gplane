const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('for (let i = 0;i < 2;i++) {}'))
    .toHasLintingError('semi-spacing')

  expect(cli.executeOnText('for (let i = 0 ;i < 2 ;i++) {}'))
    .toHasLintingError('semi-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('for (let i = 0; i < 2; i++) {}'))
    .not.toHasLintingError('semi-spacing')
})
