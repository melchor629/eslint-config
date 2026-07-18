import type { OxlintConfig } from 'oxlint'

const generateTypescriptRules = (): OxlintConfig => ({
  options: {
    typeAware: true,
  },
  overrides: [
    {
      plugins: ['typescript'],
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-redeclare': 'off',
        'prefer-promise-reject-errors': 'off',
        'require-await': 'off',
        'typescript/no-unsafe-type-assertion': 'off',
        'typescript/consistent-return': 'off',
        // --- rules from pedantic or restriction
        'typescript/ban-ts-comment': 'error',
        'typescript/no-empty-interface': 'error',
        'typescript/no-empty-object-type': 'error',
        'typescript/no-explicit-any': 'error',
        'typescript/no-misused-promises': 'error',
        'typescript/no-namespace': 'error',
        'typescript/no-require-imports': 'error',
        'typescript/no-unsafe-argument': 'error',
        'typescript/no-unsafe-assignment': 'error',
        'typescript/no-unsafe-call': 'error',
        'typescript/no-unsafe-function-type': 'error',
        'typescript/no-unsafe-member-access': 'error',
        'typescript/no-unsafe-return': 'error',
        'typescript/only-throw-error': 'error',
        'typescript/prefer-namespace-keyword': 'error',
        'typescript/prefer-promise-reject-errors': 'error',
        'typescript/require-await': 'error',
        'typescript/restrict-plus-operands': 'error',
        'typescript/no-deprecated': 'warn',
      },
    },
  ],
})

export default generateTypescriptRules
