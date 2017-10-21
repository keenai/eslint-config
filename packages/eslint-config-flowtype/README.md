# eslint-config-flowtype
Check out [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype/blob/master/src/configs/recommended.json) for a list of all the rules we are inheriting.

## Table of Contents
1. [Installation](#installation)
1. [Rules](#rules)
	1. [flowtype/require-valid-file-annotation](#flowtyperequire-valid-file-annotation)

## Installation
Install the package.
```
yarn add @keenai/eslint-config-flowtype
```

Then, extend `@keenai/react` in your ESLint configuration file.
```
{
  extends: [
    '@keenai/flowtype',
  ],
}
```

## Rules
### `flowtype/require-valid-file-annotation`
Enforces the line style annotation at the top of all files.

**Good**
```
// @flow
```

**Bad**
```
/* @flow */
```
