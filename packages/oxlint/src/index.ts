import { defineConfig, type OxlintConfig, type OxlintEnv } from 'oxlint'
import generateBaseRules from './base.ts'
import generateImportRules from './import.ts'
import generateReactRules from './react.ts'
import regexpRules from './regexp.ts'
import generateTypescriptRules from './ts.ts'

type Melchor629OxlintOptions = Readonly<{
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

const melchor629Oxlint = ({
  env = { builtin: true },
  jsx = false,
  ts = true,
}: Melchor629OxlintOptions): OxlintConfig =>
  defineConfig({
    extends: [
      generateBaseRules(),
      generateImportRules(env),
      ts ? generateTypescriptRules() : {},
      jsx ? generateReactRules() : {},
      regexpRules,
    ],
    env,
  })

export default melchor629Oxlint
