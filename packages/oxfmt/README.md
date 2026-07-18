# @melchor629/oxfmt-config

My personal [oxlint](https://oxc.rs/docs/guide/usage/formatter.html) config, with some rules of my preference.

The goal of this project is to be used across all my projects, but anyone could potentially use it if desired. The rule selection are my own preference.

## Install

Just install:

```sh
npm install -D oxfmt @melchor629/oxfmt-config
```

## Usage

Add an `oxfmt.config.js` in your project and configure:

```js
import { defineConfig } from 'oxfmt'
import melchor629 from '@melchor629/oxfmt-config'

export default melchor629()
```
