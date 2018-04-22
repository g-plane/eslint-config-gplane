import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    switch (a) {
      case 1:break
    }
  `)).toHasLintingError('switch-colon-spacing')

  expect(cli.executeOnText(`
    switch (a) {
      case 1 : break
    }
  `)).toHasLintingError('switch-colon-spacing')
})

test('correct', () => {
  expect(cli.executeOnText(`
    switch (a) {
      case 1: break
    }
  `)).not.toHasLintingError('switch-colon-spacing')
})
