import { defineConfig } from 'oxlint'
import melchor629Oxlint from './packages/oxlint/src/index.ts'

export default defineConfig({
  extends: [
    melchor629Oxlint({
      env: { builtin: true, node: true, nodeBultin: true },
      ts: true,
    }),
  ],
})
