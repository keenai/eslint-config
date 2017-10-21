# eslint-config-javascript

## Table of Contents
1. [Installation](#installation)
1. [Rules](#rules)
	1. [import/first](#import-first)
	1. [import/no-extraneous-dependencies](#import-no-extraneous-dependencies)
	1. [import/order](#import-order)
	1. [import/resolver](#import-resolver)
	1. [wyze/sort-imports](#wyze-sort-imports)

## Installation
Install the package.
```
yarn add @keenai/eslint-config-javascript
```

Then, extend `@keenai/javascript` in your ESLint configuration file.
```
{
  extends: [
    '@keenai/javascript',
  ],
}
```

## Rules
Check out [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules) for a list of all the rules we are inheriting.

### `import/first`
We prefer alphabetical sorting. No preference given to absolute versus relative.


### `import/no-extraneous-dependencies`
Modified to exclude known development files. If you are writing a story or test, you should be able to import a package listed under `devDependencies` without any lint errors. Otherwise, if you are importing a package that is not listed under `dependencies`, this check will fail.

### `import/order`
See [import/first](#import-first).

Also, the options [here](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md#groups-array) are, while well defined and understandable, _super confusing_.

### `import/resolver`
This gives you an opportunity to define module paths. If you want to be able to import something absolutely, from outside of the `node_modules` folder, you will need to set your `NODE_PATH` environment variable to a string of module paths, separated by `:`.

For example, if you had something like this:
```
import SomeThing from '../../../some/thing';
import OtherThing from '../../../other/thing';
```

With a folder structure like this:
```
src/
  some/
    thing/
  other/
    thing/
```

You could use the `NODE_PATH` environment variable to set `src` to as a module path.
```
NODE_PATH=./src
```

Now you can:
```
import SomeThing from 'some/thing';
import OtherThing from 'other/thing';
```

How you provide the environment variable is up to you. You could always override the setting from your configuration file if you'd like.

The important thing to not is that the environment variable needs to be readable within the scope of your ESLint configuration file.

I prefer to use the [dotenv](https://github.com/motdotla/dotenv) package and check a `.env` file into my repositories.

Then, `require('dotenv')` from the top of my `.eslintrc.js` file.

### `wyze/sort-imports`
Case-insensitive sorting of imports in alphabetical order, except flow types. Import types before anything else.
