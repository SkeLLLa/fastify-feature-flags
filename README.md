# fastify-feature-flags

[![NPM Version](https://img.shields.io/npm/v/fastify-feature-flags.svg)](https://www.npmjs.com/package/fastify-feature-flags)
[![Downloads Count](https://img.shields.io/npm/dm/fastify-feature-flags.svg)](https://www.npmjs.com/package/fastify-feature-flags)
[![Vunerabilities Count](https://snyk.io/test/npm/fastify-feature-flags/badge.svg)](https://www.npmjs.com/package/fastify-feature-flags)
[![Build Status](https://gitlab.com/m03geek/fastify-feature-flags/badges/master/pipeline.svg)](https://gitlab.com/m03geek/fastify-feature-flags/commits/master)
[![License](https://img.shields.io/npm/l/fastify-feature-flags.svg)](https://gitlab.com/m03geek/fastify-feature-flags/blob/master/LICENSE)
<!-- [![Coverage Status](https://gitlab.com/m03geek/fastify-feature-flags/badges/master/coverage.svg)](https://gitlab.com/m03geek/fastify-feature-flags/commits/master) -->

Fastify feature flags plugin. By default it has built-in provider for `config` module. However it could be extended by various plugins that implement simple interface.

## ToC
- [fastify-feature-flags](#fastify-feature-flags)
  - [ToC](#toc)
  - [Fastify support](#fastify-support)
  - [Installation](#installation)
  - [Features and requirements](#features-and-requirements)
  - [Usage](#usage)
  - [Docs](#docs)
  - [Changelog](#changelog)
  - [See also](#see-also)
  - [License](#license)

## Fastify support

- **v1.x.x** - supports `>= fastify-1.0.0`, including `v2.x.x` versions.

## Installation

```sh
npm i fastify-feature-flags --save
```

<sub>[Back to top](#toc)</sub>

## Features and requirements

--- 

* Requires fastify `>=1.0.0`.
* Node.js `>=8.9.0`.

<sub>[Back to top](#toc)</sub>

## Usage

Add it to your project like regular fastify plugin. Use `register` method and pass options to it.

```js
const fastify = require('fastify');
const app = fastify();

const ffPlugin = require('fastify-feature-flags');
app.register(ffPlugin, {providers: [new ffPlugin.ConfigProvider()]});
```

Plugin adds an object with built-in providers and generic provider interface that you can extend. For checking features availability it adds two methods: `fastify.featureFlags.isEnabled` which returns `true` or `false` and `fastify.featureFlags.checkEnabled` which throws an error if feature is disabled.

<sub>[Back to top](#toc)</sub>

## Docs

See [docs](docs/README.md).

<sub>[Back to top](#toc)</sub>

## Changelog

See [changelog](CHANGELOG.md).

<sub>[Back to top](#toc)</sub>

## See also

* [unleash](https://github.com/Unleash/unleash) - feature toogle service.

<sub>[Back to top](#toc)</sub>

## License

Licensed under [MIT](./LICENSE).

<sub>[Back to top](#toc)</sub>
