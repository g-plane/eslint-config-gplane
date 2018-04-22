import { CLIEngine } from 'eslint'
import options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    const a = [
      1, 2]
  `)).toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText(`
    const a = [
      {
        a,
        b
      }, {
        a,
        b
      }]
  `)).toHasLintingError('array-bracket-newline')
})

test('correct', () => {
  expect(cli.executeOnText('const a = [1]'))
    .not.toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText('const a = [1, 2]'))
    .not.toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText(`
    const a = [
      1,
      2
    ]
  `)).not.toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText(`
    const a = [1,
      2]
  `)).not.toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText(`
    const a = [
      1, 2
    ]
  `)).not.toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText(`
    const a = [{
      a,
      b
    }, {
      a,
      b
    }]
  `)).not.toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText(`
    const a = [
      {
        a,
        b
      },
      {
        a,
        b
      }
    ]
  `)).not.toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText(`
    const a = [{
      a,
      b
    },
    {
      a,
      b
    }]
  `)).not.toHasLintingError('array-bracket-newline')

  expect(cli.executeOnText(`
    const a = [
      {
        a,
        b
      }, {
        a,
        b
      }
    ]
  `)).not.toHasLintingError('array-bracket-newline')
})