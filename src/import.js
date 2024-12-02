import importPlugin from 'eslint-plugin-import'

/**
 * @param {import('neostandard').NeostandardOptions['env']} env Environment.
 * @param {string} moduleResolution Module Resolution.
 * @param {boolean} ts Enables ts support.
 * @returns {import('eslint').Linter.Config[]}
 */
const generateImportRules = (env, moduleResolution, ts) => [
  // https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#rules
  importPlugin.flatConfigs.recommended,
  ...(ts ? [importPlugin.flatConfigs.typescript] : []),
  {
    name: 'melchor629:import',
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    rules: {
      // NOTE: neostandard does not provide default config for this
      // https://github.com/neostandard/neostandard/issues/15
      // overrides recommended import plugin rules
      'import/no-unresolved': ['error', { caseSensitive: true }],
      'import/no-extraneous-dependencies': ['error', {
        devDependencies: [
          '**/vite.config.ts',
          '**/vitest.config.ts',
          '**/eslint.config.{js,mjs}',
          '**/*.{test,spec,bench,mock}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        ],
        optionalDependencies: false,
      }],
      'import/no-mutable-exports': 'error',
      'import/no-commonjs': 'warn',
      'import/no-amd': 'error',
      'import/no-nodejs-modules': !env || env.includes('node') || env.includes('nodeBuiltin') ? 'off' : 'error',
      'import/first': 'error',
      'import/imports-first': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        moduleResolution === 'node-esm'
          ? {
              js: 'always',
              mjs: 'always',
              jsx: 'always',
              ts: 'never',
              mts: 'never',
              tsx: 'always',
            }
          : (moduleResolution === 'bundler'
              ? {
                  js: 'never',
                  mjs: 'never',
                  jsx: 'never',
                  ts: 'never',
                  mts: 'never',
                  tsx: 'never',
                }
              : {}),
      ],
      'import/order': ['error', {
        alphabetize: { order: 'asc', orderImportKind: 'asc' },
        groups: ['builtin', 'external', 'internal', ['index', 'parent', 'sibling']],
        named: true,
      }],
      'import/newline-after-import': 'error',
      'import/prefer-default-export': 'error',
      'import/no-absolute-path': 'error',
      'import/no-named-default': 'error',
      'import/no-self-import': 'error',
      // NOTE: this is slow, might be disabled some day...
      'import/no-cycle': ['error', { maxDepth: '∞' }],
      'import/no-useless-path-segments': 'error',
      'import/no-import-module-exports': 'error',
    },
    settings: {
      'import/resolver': ts ? { typescript: true } : undefined,
    },
  },
]

export default generateImportRules
