const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    class C extends Parent {
      constructor () {
        this.a
        super()
      }
    }
  `)).toHasLintingError('no-this-before-super')
})
