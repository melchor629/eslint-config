import eslintBase from '@eslint/js'
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys'

/**
 * @returns {import('eslint').Linter.Config[]}
 */
const generateBaseRules = () => [
  // https://eslint.org/docs/latest/rules/
  eslintBase.configs.recommended,
  {
    name: 'melchor629:base',
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {
      'sort-destructure-keys': sortDestructureKeysPlugin,
    },
    rules: {
      // style changes from neostandard
      '@stylistic/space-before-function-paren': ['error', {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      }],
      // https://github.com/neostandard/neostandard/issues/143
      '@stylistic/comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      }],
      '@stylistic/operator-linebreak': ['error', 'before'],

      // eslint recommended overrides
      'no-void': 'off',
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      }],

      'sort-destructure-keys/sort-destructure-keys': 'error',
    },
  },
]

export default generateBaseRules
