import { configs } from 'eslint-plugin-regexp'
import type { OxlintConfig } from 'oxlint'

const regexpRules: OxlintConfig = {
  jsPlugins: [import.meta.resolve('eslint-plugin-regexp')],
  rules: configs['flat/recommended'].rules,
}

export default regexpRules
