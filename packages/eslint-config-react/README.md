# eslint-config-react
Check out [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb/rules) for a list of all the rules we are inheriting.

## Table of Contents
1. [Installation](#installation)
1. [Rules](#rules)
	1. [react/no-set-state](#reactno-set-state)
	1. [react/sort-comp](#reactsort-comp)

## Installation
Install the package.
```
yarn add @keenai/eslint-config-react
```

Then, extend `@keenai/react` in your ESLint configuration file.
```
{
  extends: [
    '@keenai/react',
  ],
}
```

## Rules
### `react/no-set-state`
We use Redux for state management. This should probably be a warning, because there may be a situation where using state would be the correct solution. Anyway, it's an error.

### `react/sort-comp`
Will warn if you do not sort your component properties in the expected order:

  1. Type annotations
  1. Static methods
  1. Lifecycle methods
  1. Handler methods (onThis, onThat)
  1. Getter methods
  1. Setter methods
  1. Everything else
  1. Render methods
  1. Render
