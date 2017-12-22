const { CLIEngine } = require('eslint')
const options = require('../../../.eslintrc.json')

const cli = new CLIEngine(options)

test('incorrect', () => {
  expect(cli.executeOnText(`
    const fs = require('fs')
    fs.readFile((err, data) => {})
  `)).toHasLintingWarning('handle-callback-err')
})

test('correct', () => {
  expect(cli.executeOnText(`
    const fs = require('fs')
    fs.readFile((err, data) => {
      if (err) return
    })
  `)).not.toHasLintingError('handle-callback-err')
})
