import type { OxlintConfig, OxlintEnv } from 'oxlint'

const generateImportRules = (env: OxlintEnv): OxlintConfig => ({
  plugins: ['import'],
  settings: {
    'import-x/resolver-next': {
      interfaceVersion: 3,
      name: 'eslint-import-resolver-typescript',
    },
  },
  rules: {
    // rules from suspicious, style or restriction
    'import/export': 'error',
    'import/no-duplicates': 'warn',
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'warn',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': env.node || env.nodeBuiltin ? 'off' : 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/no-self-import': 'error',

    // disable sus rules
    'import/no-unassigned-import': 'off',
    'import/no-empty-named-blocks': 'off',

    // not implemented
    // 'import-x/no-unresolved': ['error', { caseSensitive: true }],
    // 'import-x/no-useless-path-segments': 'error',
    // 'import-x/no-import-module-exports': 'error',
    // not supported
    // 'import-x/no-extraneous-dependencies': [
    //   'error',
    //   {
    //     devDependencies: [
    //       '**/vite.config.ts',
    //       '**/vitest.config.ts',
    //       '**/eslint.config.{js,mjs}',
    //       '**/*.{test,spec,bench,mock}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    //     ],
    //     optionalDependencies: false,
    //   },
    // ],
  },
})

export default generateImportRules
