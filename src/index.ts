import type { Linter } from 'eslint'
import neostandard, { resolveIgnoresFromGitignore, type NeostandardOptions } from 'neostandard'
import generateBaseRules from './base.ts'
import generateImportRules from './import.ts'
import generateReactRules from './react.ts'
import regexpRules from './regexp.ts'
import generateTypescriptRules from './ts.ts'

export type Melchor629Options = Readonly<NeostandardOptions & {
  /**
   * The value of `import.meta.dirname`. It is required for an
   * improved ruleset of the strict checks.
   */
  dirname?: string
}>

/**
 * Provides the personal configuration and rules.
 * @param param0 Config options
 */
function melchor629({
  dirname,
  ignores: providedIgnores,
  noJsx,
  semi = false,
  ts = false,
  ...neostandardOptions
}: Melchor629Options = {}): ReadonlyArray<Linter.Config> {
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
