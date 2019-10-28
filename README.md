<h1 align="center">
  📦⚓ URL Plugin for Verdaccio
</h1>

<p align="center">
  Adds npm URLs to Verdaccio – <a href="https://www.verdaccio.org">https://www.verdaccio.org</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/verdaccio-npm-urls">
    <img alt="Version" src="https://flat.badgen.net/npm/v/verdaccio-npm-urls?icon=npm">
  </a>
  <a href="https://raw.githubusercontent.com/n4bb12/verdaccio-npm-urls/master/LICENSE">
    <img alt="License" src="https://flat.badgen.net/github/license/n4bb12/verdaccio-npm-urls?icon=github">
  </a>
  <a href="https://github.com/n4bb12/verdaccio-npm-urls/issues/new/choose">
    <img alt="Issues" src="https://flat.badgen.net/badge/github/create issue/pink?icon=github">
  </a>
  <a href="https://circleci.com/gh/n4bb12/workflows/verdaccio-npm-urls">
    <img alt="CircleCI" src="https://flat.badgen.net/circleci/github/n4bb12/verdaccio-npm-urls?icon=circleci">
  </a>
  <a href="https://david-dm.org/n4bb12/verdaccio-npm-urls">
    <img alt="Dependencies" src="https://flat.badgen.net/david/dep/n4bb12/verdaccio-npm-urls?icon=npm">
  </a>
</p>

## About

Verdaccio has slightly different URLs compared to NPM. For example it has a different package detail page:

|             |                          |
| ----------- | ------------------------ |
| NPM         | /package/my-package      |
| Verdaccio 3 | /#/detail/my-package     |
| Verdaccio 4 | /-/web/detail/my-package |

To improve compatibility with existing tools, this plugin adds the routes used by NPM to Verdaccio.

As an example, [release-it](https://raw.githubusercontent.com/release-it/release-it/master/docs/assets/release-it.gif) prints the package URL after successful publishing, but the link is incorrect for Verdaccio by default.

### Compatibility

- Verdaccio 3 and 4
- Node >=10

## List of additional URLs

| |
|-|
| /package/:name |

## Install

```
$ npm install verdaccio-npm-urls
```

## Configuration

Merge the below options with your existing Verdaccio configuration:

```yml
middlewares:
  npm-urls:
    enabled: true
```
