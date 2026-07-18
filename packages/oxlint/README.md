# @melchor629/oxlint-config

My personal [oxlint](https://oxc.rs/docs/guide/usage/linter) config, based on the `correctness`, `suspicious` and `perf` categories, with additional rules of my preference.

The goal of this project is to be used across all my projects, but anyone could potentially use it if desired. The rule selection are my own preference.

## Install

Just install:

```sh
npm install -D oxlint @melchor629/oxlint-config
npm install -D oxlint-tsgolint # if expected to enable ts rules
```

## Usage

Add an `oxlint.config.js` in your project and configure:

```js
import { defineConfig } from 'oxlint'
import melchor629 from '@melchor629/oxlint-config'

export default melchor629()
```

If your project has TypeScript, it is recommended to enable the rules:

```js
import { defineConfig } from 'oxlint'
import melchor629 from '@melchor629/oxlint-config'

export default melchor629({
  // enables ts support
  ts: true,
})
```

It is also recommended to select the `env` setting according to your needs if encounter issues with certain rules.

You can also provide your own rules or custom extensions:

```js
import { defineConfig } from 'oxlint'
import melchor629 from '@melchor629/oxlint-config'

export default melchor629({
  additional: [
    {
      // put here overwrites and all stuff
    }
  ],
})
```
