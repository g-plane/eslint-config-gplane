const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    const a = [1
      , 2]
  `)).toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    f(a
    , b)
  `)).toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    function f (a
    , b) {}
  `)).toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    const f = function (a
    , b) {}
  `)).toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    import {a
    , b} from 'mod'
  `)).toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    const a = {b
    , c}
  `)).toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    const {a
      , b} = c
  `)).toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    let a
      , b
  `)).toHasLintingError('comma-style')
})

test('correct', () => {
  expect(cli.executeOnText(`
    const a = [1,
      2]
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    const [a,
      b] = c
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    (a,
      b) => 0
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    f(a,
    b)
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    function f (a,
      b) {}
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    import {a,
      b} from 'mod'
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    const a = [1,
      2]
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    const a = {b,
      c}
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    const {a,
      b} = c
  `)).not.toHasLintingError('comma-style')

  expect(cli.executeOnText(`
    let a,
      b
  `)).not.toHasLintingError('comma-style')
})
