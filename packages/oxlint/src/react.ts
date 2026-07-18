import type { OxlintConfig } from 'oxlint'

const generateReactRules = (): OxlintConfig => ({
  plugins: ['react', 'jsx-a11y'],
  settings: {
    react: {
      version: '18',
    },
    linkComponents: ['Link'],
    'jsx-a11y': {
      polymorphicPropName: 'component',
      components: {},
    },
  },
  rules: {
    // disable rules not needed for react 18 or higher
    'react/react-in-jsx-scope': 'off',
    'react/no-object-type-as-default-prop': 'off',

    // rules from pedantic, style or restriction
    'react/jsx-boolean-value': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always',
      },
    ],
    'react/no-unescaped-entities': 'allow',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
        explicitSpread: 'ignore',
      },
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/hook-use-state': [
      'error',
      {
        allowDestructuredState: true,
      },
    ],
    'react/rules-of-hooks': 'error',
    'react/exhaustive-deps': 'warn',

    // overrides from correctness
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation'],
        canvas: ['img'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'menuitemradio', 'menuitemcheckbox', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
        fieldset: ['radiogroup', 'presentation'],
      },
    ],
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        allowExpressionValues: true,
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],

    // not implemented: react compiler rules (react-hooks)
    // "react/prefer-read-only-props": "error",
  },
})

export default generateReactRules
