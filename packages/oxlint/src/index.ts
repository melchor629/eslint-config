import { defineConfig, type OxlintConfig, type OxlintEnv } from 'oxlint'
import generateBaseRules from './base.ts'
import generateImportRules from './import.ts'
import generateReactRules from './react.ts'
import regexpRules from './regexp.ts'
import generateTypescriptRules from './ts.ts'

type Melchor629OxlintOptions = Readonly<{
  /**
   * Provide additional config and overrides. Workaround because some of the properties are not
   * merged when using `extends`.
   */
  additional?: OxlintConfig[]
  /**
   * The environment settings for the linter. It is used to determine which rules should be applied
   * based on the target environment (e.g., Node.js, browser, etc.).
   */
  env?: OxlintEnv
  /**
   * Enables jsx rules.
   */
  jsx?: boolean
  /**
   * Enables typescript rules.
   */
  ts?: boolean
}>

const isObject = (obj: unknown): obj is Record<string, unknown> =>
  obj != null && typeof obj === 'object' && !Array.isArray(obj)

const deepMerge = <T>(target: T, ...sources: T[]): T => {
  if (!sources.length) return target
  const source = sources.shift()
  if (isObject(target) && isObject(source)) {
    for (const key of Object.keys(source)) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        deepMerge(target[key], source[key])
      } else if (Array.isArray(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: [] })
        deepMerge(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  } else if (Array.isArray(target) && Array.isArray(source)) {
    target.push(...source)
  }
  return deepMerge(target, ...sources)
}

// there are certain issues with the extends property
// https://github.com/oxc-project/oxc/issues/20087
const melchor629Oxlint = ({
  additional = [],
  env = { builtin: true },
  jsx = false,
  ts = true,
}: Melchor629OxlintOptions): OxlintConfig =>
  deepMerge<OxlintConfig>(
    {},
    generateBaseRules(),
    generateImportRules(env),
    ts ? generateTypescriptRules() : {},
    jsx ? generateReactRules() : {},
    regexpRules,
    ...additional,
    defineConfig({ env }),
  )

export default melchor629Oxlint
