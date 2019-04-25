# fastify-feature-flags

[![NPM Version](https://img.shields.io/npm/v/fastify-feature-flags.svg)](https://www.npmjs.com/package/fastify-feature-flags)
[![Downloads Count](https://img.shields.io/npm/dm/fastify-feature-flags.svg)](https://www.npmjs.com/package/fastify-feature-flags)
[![Vunerabilities Count](https://snyk.io/test/npm/fastify-feature-flags/badge.svg)](https://www.npmjs.com/package/fastify-feature-flags)
[![Build Status](https://gitlab.com/m03geek/fastify-feature-flags/badges/master/pipeline.svg)](https://gitlab.com/m03geek/fastify-feature-flags/commits/master)
[![License](https://img.shields.io/npm/l/fastify-feature-flags.svg)](https://gitlab.com/m03geek/fastify-feature-flags/blob/master/LICENSE)
<!-- [![Coverage Status](https://gitlab.com/m03geek/fastify-feature-flags/badges/master/coverage.svg)](https://gitlab.com/m03geek/fastify-feature-flags/commits/master) -->

Fastify feature flags plugin. By default it has built-in provider for `config` module. However it could be extended by various plugins that implement simple interface.

This plugin is currently in **beta**, so some bugs can appear. Feel free to create an issue and I'll try to fix them asap.

## ToC
- [fastify-feature-flags](#fastify-feature-flags)
  - [ToC](#toc)
  - [Fastify support](#fastify-support)
  - [Installation](#installation)
  - [Features and requirements](#features-and-requirements)
  - [Usage](#usage)
    - [Providers](#providers)
      - [Generic provider](#generic-provider)
      - [Config provider](#config-provider)
      - [Env provider](#env-provider)
      - [Unleash provider](#unleash-provider)
    - [Using plugin](#using-plugin)
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

Plugin adds an object with built-in providers and generic provider interface that you can extend. For checking features availability it adds two methods: `fastify.featureFlags.isEnabled` which returns `true` or `false` and `fastify.featureFlags.checkEnabled` which throws an error if feature is disabled. The list of built-in providers is available below.

<sub>[Back to top](#toc)</sub>

### Providers

#### Generic provider

Generic provider is an abstract class that you may extend to add new providers. It should have `isEnabled` method that consumes feature name and context (optionally) and returns `true` or `false`.

#### Config provider

Reads feature flags from specified config section. Depends on [`config`](https://www.npmjs.com/package/config) module. It's constuctor consumes options object that contains `prefix` for config section where features are defined.

Example:

`default.js` (in config directory):
```js
module.exports = {
  features: {
    a: true,
    b: false,
  }
}
```

Configuring provider:
```js
const provider = new ffPlugin.ConfigProvider({
  prefix: 'features',
})
```

Valid config values for feature to be enabled are: `true`, `"true"` or `"1"`. Last two may be useful if you're using config module with env overrides. 

#### Env provider

Reads feature flags from env variables. It's constuctor consumes options object that may contain `prefix` for filtering env variables containing features.

Example:

`default.js` (in config directory):
```.env
FEATURE_A = true
FEATURE_B = false
```

Configuring provider:
```js
const provider = new ffPlugin.EnvProvider({
  prefix: 'FEATURE_',
})
```

Valid config values for feature to be enabled are: `"true"` or `"1"`. 

#### Unleash provider

This provider relies on feature flags service [Unleash](https://github.com/Unleash/unleash). You may configure it separately, see instructions in their repo.

Example:

Configuring provider:
```js
const provider = new ffPlugin.UnleashProvider({
  appName: 'my-fastify-app';
  url: 'https://unleash.example.com';
})
```

For more options please refer to [unleash docs](https://github.com/unleash/unleash-client-node#advanced-usage)

### Using plugin

After configuring providers and registering the plugin in your fastify app you can use `isEnabled` or `checkEnabled` methods.

You may also specify multiple providers, then the feature will be enabled only when it will be enabled in **all** providers.

Example: 

```js
const fastify = require('fastify')();
const ffPlugin = require('fastify-feature-flags');

fastify.register(ffPlugin, {
  providers: [new ffPlugin.EnvProvider({prefix: 'FEATURE_'})]
});

fastify.get('/a', async (request, reply) => {
  await fastify.featureFlags.checkEnabled('A');
  reply.type('application/json').code(200);
  return { a: 'enabled' };
});

fastify.get('/b', async (request, reply) => {
  const isEnabled = await fastify.featureFlags.isEnabled('B');
  reply.type('application/json').code(200);
  return { b: isEnabled };
});

(async () => {
  await fastify.ready();
  await fastify.listen(3000);
})();
```

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
