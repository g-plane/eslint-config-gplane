// @ts-check

/**
 * @typedef ESLintMessage
 * @type {object}
 * @property {string} ruleId
 * @property {1 | 2} severity
 * @property {boolean | null} fatal
 */

/**
 * @typedef TriggeredRulesCount
 * @type {object}
 * @property {number} errorCount
 * @property {number} warningCount
 * @property {number} fixableErrorCount
 * @property {number} fixableWarningCount
 */

/**
 * @typedef ESLintResult
 * @type {object}
 * @property {({ messages: ESLintMessage[] } & TriggeredRulesCount)[]} results
 * @property {number} errorCount
 * @property {number} warningCount
 * @property {number} fixableErrorCount
 * @property {number} fixableWarningCount
 */

/**
 * @typedef CustomMatcher
 * @type {object}
 * @property {boolean} pass
 * @property {() => string} message
 */

expect.extend({
  /**
   * @param {ESLintResult} received ESLint results
   * @param {string} expected Expected rule Id.
   * @returns {CustomMatcher} Matcher's result
   */
  toHasLintingError (received, expected) {
    const pass = !!received.results[0].messages
      .find(msg => msg.ruleId === expected && msg.severity === 2)
    if (received.results[0].messages[0].fatal) {
      return {
        pass: false,
        message: () => 'ESLint has parsing error!'
      }
    }
    return {
      pass,
      message: () => (this.isNot
        ? `Expected not containing linting error with ${expected}.`
        : `Expected containing linting error with ${expected}.`)
    }
  }
})

expect.extend({
  /**
   * @param {ESLintResult} received Linting results
   * @param {string} expected Expected rule Id.
   * @returns {CustomMatcher} Matcher's result
   */
  toHasLintingWarning (received, expected) {
    const pass = !!received.results[0].messages
      .find(msg => msg.ruleId === expected && msg.severity === 1)
    if (received.results[0].messages[0].fatal) {
      return {
        pass: false,
        message: () => 'ESLint has parsing error!'
      }
    }
    return {
      pass,
      message: () => (this.isNot
        ? `Expected not containing linting warning with ${expected}.`
        : `Expected containing linting warning with ${expected}.`)
    }
  }
})
