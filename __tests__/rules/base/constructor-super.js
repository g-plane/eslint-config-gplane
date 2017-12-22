const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    class C extends Parent {
      constructor () {
      }
    }
  `)).toHasLintingError('constructor-super')

  expect(cli.executeOnText(`
    class C {
      constructor () {
        super()
      }
    }
  `)).toHasLintingError('constructor-super')
})

test('correct', () => {
  expect(cli.executeOnText(`
    class C extends Parent {
      constructor () {
        super()
      }
    }
  `)).not.toHasLintingError('constructor-super')
})
