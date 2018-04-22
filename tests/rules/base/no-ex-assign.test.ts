import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText('try {} catch (e) {e=3}'))
    .toHasLintingError('no-ex-assign')
})

test('correct', () => {
  expect(cli.executeOnText('try {} catch (e) {}'))
    .not.toHasLintingError('no-ex-assign')
})
