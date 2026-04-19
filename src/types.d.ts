declare module 'eslint-plugin-sort-destructure-keys' {
  import type { Linter } from 'eslint'

  const sortDestructureKeysPlugin: NonNullable<Linter.Config['plugins']>['a']
  export default sortDestructureKeysPlugin
}
