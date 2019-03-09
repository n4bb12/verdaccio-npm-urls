<h1 align="center">
  📦⚓ URL Plugin for Verdaccio
</h1>

<p align="center">
  Adds npm URLs to Verdaccio – <a href="https://www.verdaccio.org">https://www.verdaccio.org</a>
</p>

<p align="center">
  <a href="https://circleci.com/gh/n4bb12/workflows/verdaccio-npm-urls">
    <img alt="CircleCI" src="https://flat.badgen.net/circleci/github/n4bb12/verdaccio-npm-urls?icon=circleci">
  </a>
  <a href="https://david-dm.org/n4bb12/verdaccio-npm-urls">
    <img alt="Dependencies" src="https://flat.badgen.net/david/dep/n4bb12/verdaccio-npm-urls?icon=npm">
  </a>
  <a href="https://www.npmjs.com/package/verdaccio-npm-urls">
    <img alt="Version" src="https://flat.badgen.net/npm/v/verdaccio-npm-urls?icon=npm">
  </a>
  <a href="https://raw.githubusercontent.com/n4bb12/verdaccio-npm-urls/master/LICENSE">
    <img alt="License" src="https://flat.badgen.net/github/license/n4bb12/verdaccio-npm-urls?icon=github">
  </a>
  <a href="https://github.com/n4bb12/verdaccio-npm-urls/issues/new/choose">
    <img alt="Issues" src="https://flat.badgen.net/badge/github/create issue/pink?icon=github">
  </a>
</p>

## About

Verdaccio has slightly different URLs compared to npm. See for example, the package details page:
```
# Verdaccio
https://my-registry.com/#/detail/my-package

# npm
https://www.npmjs.com/package/my-package
```

To improve compatibility with existing tools, this plugin adds the routes used by npm to Verdaccio.

## Install

```
$ npm install verdaccio-npm-urls
```

## Configuration

```yml
middlewares:
  npm-urls:
    enabled: true
```

## List of URLs

| |
|-|
| /package/:name |
