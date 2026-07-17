import { configs } from 'eslint-plugin-regexp'
import type { OxlintConfig } from 'oxlint'

const regexpRules: OxlintConfig = {
  jsPlugins: ['eslint-plugin-regexp'],
  rules: configs['flat/recommended'].rules,
}

export default regexpRules
