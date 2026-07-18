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
  }),
)

export default melchor629Oxfmt
