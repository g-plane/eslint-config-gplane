const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    class C {
      construtor () {
        //
      }
      methodA () {
        //
      }
    }
  `)).toHasLintingError('lines-between-class-members')
})

test('correct', () => {
  expect(cli.executeOnText(`
    class C {
      construtor () {
        //
      }

      methodA () {
        //
      }
    }
  `)).not.toHasLintingError('lines-between-class-members')
})
