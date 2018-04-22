import * as eslint from 'eslint'
declare let config: eslint.Linter.Config & { plugins: string[] }
export = config
