import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
import generateBaseRules from './base.js'
import generateImportRules from './import.js'
import generateReactRules from './react.js'
import regexpRules from './regexp.js'
import generateTypescriptRules from './ts.js'

/**
 * @param {import('./index.d.ts').Melchor629Options} param0 options
 */
function melchor629({
  dirname,
  ignores: providedIgnores,
  noJsx,
  semi = false,
  ts = false,
  ...neostandardOptions
} = {}) {
  const ignores = [
    'coverage/**/*',
    ...resolveIgnoresFromGitignore(),
    ...providedIgnores ?? [],
  ]

  return Object.freeze([
    { ignores },
    ...neostandard({
      semi,
      ts,
      noJsx,
      ...neostandardOptions,
    }),
    ...generateBaseRules(),
    ...generateImportRules(neostandardOptions.env),
    ...(ts ? [generateTypescriptRules(!noJsx, dirname)] : []),
    ...(noJsx ? [] : generateReactRules()),
    ...regexpRules,
  ])
}

export default melchor629
