const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('a  +  b'))
    .toHasLintingError('no-multi-spaces')
})

test('correct', () => {
  expect(cli.executeOnText('a + b'))
    .not.toHasLintingError('no-multi-spaces')

  expect(cli.executeOnText('exp  // comments'))
    .not.toHasLintingError('no-multi-spaces')
})
