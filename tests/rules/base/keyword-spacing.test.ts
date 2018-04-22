import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    if(a) {
      //
    }else{
      //
    }
  `)).toHasLintingError('keyword-spacing')
})

test('correct', () => {
  expect(cli.executeOnText(`
    if (a) {
      //
    } else {
      //
    }
  `)).not.toHasLintingError('keyword-spacing')
})
