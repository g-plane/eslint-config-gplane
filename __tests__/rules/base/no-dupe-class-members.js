const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    class C {
      method () {}

      method () {}
    }
  `)).toHasLintingError('no-dupe-class-members')
})