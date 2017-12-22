const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('const nums = [1, 2]; Math.max.apply(Math, nums)'))
    .toHasLintingError('prefer-spread')
})

test('correct', () => {
  expect(cli.executeOnText('const nums = [1, 2]; Math.max(Math, ...nums)'))
    .not.toHasLintingError('prefer-spread')
})
