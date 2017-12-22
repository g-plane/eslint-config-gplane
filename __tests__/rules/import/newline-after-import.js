const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    import './mod'
    fn()
  `)).toHasLintingError('import/newline-after-import')
})

test('correct', () => {
  expect(cli.executeOnText(`
    import './mod'

    fn()
  `)).not.toHasLintingError('import/newline-after-import')
})
