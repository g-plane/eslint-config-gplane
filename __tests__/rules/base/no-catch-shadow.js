const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('let e\ntry {} catch (e) {}'))
    .toHasLintingError('no-catch-shadow')
})

test('correct', () => {
  expect(cli.executeOnText('let e\ntry {} catch (error) {}'))
    .not.toHasLintingError('no-catch-shadow')
})
