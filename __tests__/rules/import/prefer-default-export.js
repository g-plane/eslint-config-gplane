const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('export const a = 5'))
    .toHasLintingError('import/prefer-default-export')
})

test('correct', () => {
  expect(cli.executeOnText('export default 5'))
    .not.toHasLintingError('import/prefer-default-export')
})
