import type { Linter } from 'eslint'
import type { NeostandardOptions } from 'neostandard'

export type Melchor629Options = Readonly<NeostandardOptions & {
  /**
   * The value of `import.meta.dirname`. It is required for an
   * improved ruleset of the strict checks.
   */
  dirname?: string
}>

declare const melchor629: (options?: Melchor629Options) => ReadonlyArray<Linter.Config>
export default melchor629
