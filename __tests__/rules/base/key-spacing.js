const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    const a = {
      a:1
    }
  `)).toHasLintingError('key-spacing')

  expect(cli.executeOnText(`
    const a = {
      a : 1
    }
  `)).toHasLintingError('key-spacing')

  expect(cli.executeOnText(`
    const a = {
      a       : 1,
      veryLong: 2
    }
  `)).toHasLintingError('key-spacing')
})

test('correct', () => {
  expect(cli.executeOnText(`
    const a = {
      a: 1
    }
  `)).not.toHasLintingError('key-spacing')
})
