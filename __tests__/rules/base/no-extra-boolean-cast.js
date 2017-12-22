const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (!!!a) {}'))
    .toHasLintingError('no-extra-boolean-cast')

  expect(cli.executeOnText('if (!!a) {}'))
    .toHasLintingError('no-extra-boolean-cast')
})

test('correct', () => {
  expect(cli.executeOnText('const a = !!b'))
    .not.toHasLintingError('no-extra-boolean-cast')
})
