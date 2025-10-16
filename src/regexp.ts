import type { Linter } from 'eslint'
import { configs } from 'eslint-plugin-regexp'

const regexpRules: Linter.Config[] = [
  configs['flat/recommended'],
]

export default regexpRules
