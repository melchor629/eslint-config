declare module 'eslint-plugin-sort-destructure-keys' {
  import type { ESLint } from 'eslint'

  const sortDestructureKeysPlugin: {
    meta: {
      name: string
      namespace: string
      version: string
    }
    rules: Record<'sort-destructure-keys', NonNullable<ESLint.Plugin['rules']>[string]>
  }
  export default sortDestructureKeysPlugin
}
