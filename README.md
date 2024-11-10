# @melchor629/eslint-config

My personal [ESLint](https://eslint.org/) config, which includes [neostandard](https://github.com/neostandard/neostandard) base config, recommended [ESLint](https://eslint.org/docs/latest/rules/) rules, personal rules for [import](https://github.com/import-js/eslint-plugin-import?tab=readme-ov-file#rules) rules, recommended [typescript](https://typescript-eslint.io/users/configs#recommended-configurations) rules and react rules.

The goal of this project is to be used across all my projects, but anyone could potentially use it if desired. The rule selection are my own preference.

## Install

Ensure to have the scope `@melchor629` in `.npmrc`  pointing to `https://npm.pkg.github.com` like so:

```ini
@melchor629:registry=https://npm.pkg.github.com
```

Then just install:

```sh
npm install -D eslint@^9 @melchor629/eslint-config
```

## Usage

Add an `eslint.config.js` in your project and configure:

```js
import melchor629 from '@melchor629/eslint-config'

export default melchor629()
```

If your project has TypeScript, it is recommended to enable the rules:

```js
import melchor629 from '@melchor629/eslint-config'

export default melchor629({
  // enables ts support
  ts: true,
  // enables special rules that uses ts
  dirname: import.meta.dirname,
})
```

It is also recommended to select the `moduleResolution` setting according to your needs if encounter issues with certain rules.

You can also provide your own rules or custom extensions:

```js
import melchor629 from '@melchor629/eslint-config'

export default [
  ...melchor629(),
  {
    // Custom ESLint config...
  },
]
```
