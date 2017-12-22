const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('if (true) {\ndoSth()}'))
    .toHasLintingError('indent')

  expect(cli.executeOnText('if (true) {\n\tdoSth()}'))
    .toHasLintingError('indent')

  expect(cli.executeOnText('if (true) {\n    doSth()}'))
    .toHasLintingError('indent')
})

test('correct', () => {
  expect(cli.executeOnText('if (true) {\n  doSth()}'))
    .not.toHasLintingError('indent')
})
