const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    obj.
      property
  `)).toHasLintingError('dot-location')
})

test('correct', () => {
  expect(cli.executeOnText(`
    obj
      .property
  `)).not.toHasLintingError('dot-location')
})
