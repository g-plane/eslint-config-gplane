const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('tag `sth`'))
    .toHasLintingError('template-tag-spacing')
})

test('correct', () => {
  expect(cli.executeOnText('tag`sth`'))
    .not.toHasLintingError('template-tag-spacing')
})
