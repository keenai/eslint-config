# Keenai Linters
It's basically Airbnb with Flow and GraphQL.

Breaking these linter configurations apart allows for some more flexibility. Instead of one configuration that may require packages your project does not use or need, you opt-in to what you want.

## Table of Contents
1. [Packages](#packages)
1. [Installation](#installation)

## Packages
* [eslint-config-javascript](https://github.com/keenai/eslint-config/tree/master/packages/eslint-config-javascript)
* [eslint-config-flowtype](https://github.com/keenai/eslint-config/tree/master/packages/eslint-config-flowtype)
* [eslint-config-react](https://github.com/keenai/eslint-config/tree/master/packages/eslint-config-react)
* [eslint-config-graphql](https://github.com/keenai/eslint-config/tree/master/packages/eslint-config-graphql)

## Installation
You will need to install each package you desire individually.
```
yarn add @keenai/eslint-config-javascript
yarn add @keenai/eslint-config-flowtype
yarn add @keenai/eslint-config-react
yarn add @keenai/eslint-config-graphql
```

Then, add the respective package name to the "extends" property of your ESLint configuration file.
```
{
  extends: [
    '@keenai/javascript',
    '@keenai/flowtype',
    '@keenai/react',
    '@keenai/graphql',
  ],
}
```

Be sure the checkout the **README** of the plugin you are installing.
