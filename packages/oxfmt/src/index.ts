import { defineConfig } from 'oxfmt'
import type { OxfmtConfig } from 'oxfmt'

const melchor629Oxfmt: OxfmtConfig = Object.freeze(
  defineConfig({
    endOfLine: 'lf',
    insertFinalNewline: true,
    jsdoc: {
      preferCodeFences: true,
      commentLineStrategy: 'keep',
    },
    semi: false,
    singleQuote: true,
    singleAttributePerLine: true,
    sortImports: {
      groups: [
        'builtin',
        'external',
        ['internal', 'subpath'],
        'parent',
        'index',
        'sibling',
        'unknown',
      ],
      newlinesBetween: false,
    },
    sortTailwindcss: true,
    tabWidth: 2,
    useTabs: false,
    printWidth: 100,
    // https://github.com/oxc-project/oxc/issues/16366
    // experimentalOperatorPosition: 'start',
  }),
)

export default melchor629Oxfmt
