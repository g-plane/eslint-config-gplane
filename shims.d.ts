declare namespace jest {
  interface Matchers<R> {
    /**
     * Checks if linting result has error of specified rule id you expected.
     */
    toHasLintingError (expected: string): R

    /**
     * Checks if linting result has warning of specified rule id you expected.
     */
    toHasLintingWarning (expected: string): R
  }
}

declare module '*.json' {
  let content: any
  export = content
}
