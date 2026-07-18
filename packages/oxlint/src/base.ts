import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys'
import type { OxlintConfig } from 'oxlint'

const generateBaseRules = (): OxlintConfig => ({
  jsPlugins: [sortDestructureKeysPlugin.meta!.name!],
  plugins: ['unicorn', 'typescript', 'eslint', 'oxc', 'promise'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
    perf: 'warn',
    style: 'off',
  },
  env: {
    builtin: true,
  },
  rules: {
    // override default rule from correctness
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'unicorn/require-module-specifiers': 'off',

    // pedantic, restriction or style rules
    'no-array-constructor': 'error',
    'no-case-declarations': 'error',
    'no-empty': 'error',
    'no-fallthrough': 'error',
    'no-implied-eval': 'error',
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-throw-literal': 'error',
    'no-undef': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',

    // external plugin
    'sort-destructure-keys/sort-destructure-keys': 'error',
  },
})

export default generateBaseRules
