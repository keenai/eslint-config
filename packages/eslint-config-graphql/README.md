# eslint-config-graphql

## Table of Contents
1. [Installation](#installation)
1. [Rules](#rules)
	1. [graphql/template-strings](#graphql-template-strings)

## Installation
Install the package.
```
yarn add @keenai/eslint-config-graphql
```

Then, extend `@keenai/react` in your ESLint configuration file.
```
{
  extends: [
    '@keenai/graphql',
  ],
}
```

## Rules
Check out [eslint-plugin-graphql](https://github.com/apollographql/eslint-plugin-graphql) and please explain it to me.

### `graphql/template-strings`
Okay, so there are a couple assumptions occurring in this configuration.

1. You have a `schema.json` file in the root of your project. I use [apollo-codegen](https://github.com/apollographql/apollo-codegen) to generate my schema.
1. Your GraphQL queries live in literal files.

If both of these apply to you, you may proceed.

You have to update your linter to look at new file extensions, such as `.gql` or `.graphql`, whatever applies to your case.

From the command line, it would be something like:
```
eslint . --ext .js --ext .gql --ext .graphql
```

If you lint in your IDE, be sure that it's also configured to lint your query files.

If you use Atom, for example, you need to update the settings in [linter-eslint](https://github.com/AtomLinter/linter-eslint) and update the list of scopes to run ESLint on to the following:
```
source.js, source.jsx, source.js.jsx, source.babel, source.js-semantic, source.gql, source.graphql
```
