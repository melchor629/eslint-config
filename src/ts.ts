import type { Linter } from 'eslint'
import tseslint from 'typescript-eslint'

/**
 * @param jsx Has JSX support.
 * @param dirname Root directory of the project.
 * @returns TS rules
 */
const generateTypescriptRules = (jsx: boolean, dirname?: string): Linter.Config => ({
  name: 'melchor629:ts',
  files: ['**/*.ts', ...(jsx ? ['**/*.tsx'] : [])],
  languageOptions: dirname
    ? {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: dirname,
        },
      }
    : {},
  rules: {
    // disables incomaptible rules for ts
    'no-unused-vars': 'off',

    // https://typescript-eslint.io/users/configs#recommended-configurations
    ...(dirname ? tseslint.configs.recommendedTypeChecked : tseslint.configs.recommended)
      .map(({ rules }) => rules)
      .filter((rules) => rules != null)
      .reduce((allRules, rules) => ({ ...allRules, ...rules }), {}),
    // warn about deprecated APIs
    '@typescript-eslint/no-deprecated': 'warn',
    // unused vars except _asd
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'all',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    }],
  },
})

export default generateTypescriptRules
