import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

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
