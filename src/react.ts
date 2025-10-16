import type { Linter } from 'eslint'
import reactA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactHooksPlugin from 'eslint-plugin-react-hooks'

/**
 * @returns react rules
 */
const generateReactRules = (): Linter.Config[] => [
  // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
  // @ts-expect-error adds .default when not needed
  reactHooksPlugin.configs.flat.recommended,
  // https://github.com/jsx-eslint/eslint-plugin-react
  {
    name: 'melchor629:react',
    ignores: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.ts'],
    plugins: {
      'jsx-a11y': reactA11yPlugin,
    },
    rules: {
      // new non-style rules from neostandard from airbnb
      'react/jsx-props-no-spreading': [
        'error',
        {
          custom: 'ignore',
          explicitSpread: 'ignore',
        },
      ],
      'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: ['arrow-function', 'function-declaration'],
          unnamedComponents: ['arrow-function'],
        },
      ],
      'react/prop-types': ['error', {
        ignore: [],
        customValidators: [],
        skipUndeclared: false,
      }],
      'react/no-unused-prop-types': ['error', {
        customValidators: [],
        skipShapeProps: true,
      }],
      'react/no-array-index-key': 'error',
      'react/prefer-read-only-props': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-unstable-nested-components': 'error',

      // new rules for neostandard and airbnb
      'react/hook-use-state': ['error', { allowDestructuredState: true }],

      // style changes from neostandard
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/jsx-max-props-per-line': ['error', {
        maximum: 1,
        when: 'multiline',
      }],

      // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
      // accessibility rules
      ...reactA11yPlugin.flatConfigs.recommended.rules,
    },
    settings: {
      'jsx-a11y': {
        polymorphicPropName: 'component',
        // Put here the components the app uses
        components: {},
      },
    },
  },
]

export default generateReactRules
