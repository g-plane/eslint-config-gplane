const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    if (a) {
      //
    } else {
      if (b) {
        //
      }
    }
  `)).toHasLintingError('no-lonely-if')
})

test('correct', () => {
  expect(cli.executeOnText(`
    if (a) {
      //
    } else if (b) {
      //
    }
  `)).not.toHasLintingError('no-lonely-if')
})
