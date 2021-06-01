# Mollie ESLint config

This monorepo provides Mollie's ESLint files which are distributed as separate, extensible configuration files.

## Installation

```
git clone git@github.com:mollie/eslint-config-mollie.git
cd eslint-config-mollie
yarn install
yarn bootstrap
```

## Packages

### `@mollie/eslint-config-base`

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and depends on `eslint-plugin-import`.

### `@mollie/eslint-config-node`

Extends the `@mollie/eslint-config-base` configuration. Enables all ECMAScript 6 features (except for modules), Node.js global variables and Node.js scoping.

### `@mollie/eslint-config-react`

Extends the `@mollie/eslint-config-base` configuration. This package includes the shareable ESLint configuration used by Create React App.

### `@mollie/eslint-config-flow`

Standalone package for projects using Flow. Can be used without `@mollie/eslint-config-base`.

### `@mollie/eslint-config-typescript`

Extends the `@mollie/eslint-config-base` configuration. Enables TypeScript support with the help of an [ESLint plugin](https://github.com/typescript-eslint/typescript-eslint).

### `@mollie/eslint-config-react-typescript`

Extends the `@mollie/eslint-config-typescript` and `@mollie/eslint-config-react` configuration. This package enables both React and TypeScript support.
