import importPlugin from 'eslint-plugin-import-x'

/**
 * @param {import('neostandard').NeostandardOptions['env']} env Environment.
 * @param {string} moduleResolution Module Resolution.
 * @returns {import('eslint').Linter.Config[]}
 */
const generateImportRules = (env, moduleResolution) => [
  // https://github.com/un-ts/eslint-plugin-import-x#readme
  {
    name: 'import-x:recommended',
    rules: importPlugin.flatConfigs.recommended.rules,
  },
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
      'import-x/no-unresolved': ['error', { caseSensitive: true }],
      'import-x/no-extraneous-dependencies': ['error', {
        devDependencies: [
          '**/vite.config.ts',
          '**/vitest.config.ts',
          '**/eslint.config.{js,mjs}',
          '**/*.{test,spec,bench,mock}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        ],
        optionalDependencies: false,
      }],
      'import-x/no-mutable-exports': 'error',
      'import-x/no-commonjs': 'warn',
      'import-x/no-amd': 'error',
      'import-x/no-nodejs-modules': !env || env.includes('node') || env.includes('nodeBuiltin') ? 'off' : 'error',
      'import-x/imports-first': 'off',
      'import-x/extensions': [
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
      'import-x/order': ['error', {
        alphabetize: { order: 'asc', orderImportKind: 'asc' },
        groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling'],
      }],
      'import-x/newline-after-import': 'error',
      'import-x/prefer-default-export': 'error',
      'import-x/no-self-import': 'error',
      // NOTE: this is slow, might be disabled some day...
      // 'import-x/no-cycle': ['error', { maxDepth: '∞' }],
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-import-module-exports': 'error',
    },
  },
]

export default generateImportRules
