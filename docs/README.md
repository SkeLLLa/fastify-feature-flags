
#  fastify-feature-flags

## Index

### Modules

* ["fastify"](modules/_fastify_.md)
* [FastifyFeatureFlagsPlugin](modules/fastifyfeatureflagsplugin.md)

### Classes

* [ConfigProvider](classes/configprovider.md)
* [EnvProvider](classes/envprovider.md)
* [FeatureError](classes/featureerror.md)
* [GenericProvider](classes/genericprovider.md)
* [UnleashProvider](classes/unleashprovider.md)

### Variables

* [DEFAULT_ERROR_CODE](#default_error_code)
* [PLUGIN_NAME](#plugin_name)

### Functions

* [fastifyFeatureSwitch](#fastifyfeatureswitch)

---

## Variables

<a id="default_error_code"></a>

### `<Const>` DEFAULT_ERROR_CODE

**● DEFAULT_ERROR_CODE**: *`500`* = 500

*Defined in index.ts:11*

___
<a id="plugin_name"></a>

### `<Const>` PLUGIN_NAME

**● PLUGIN_NAME**: *"featureFlags"* = "featureFlags"

*Defined in index.ts:10*

___

## Functions

<a id="fastifyfeatureswitch"></a>

### `<Const>` fastifyFeatureSwitch

▸ **fastifyFeatureSwitch**(fastify: *`FastifyInstance`*, options: *[Options](interfaces/fastifyfeatureflagsplugin.options.md)*): `Promise`<`void`>

*Defined in index.ts:42*

**Parameters:**

| Name | Type |
| ------ | ------ |
| fastify | `FastifyInstance` |
| options | [Options](interfaces/fastifyfeatureflagsplugin.options.md) |

**Returns:** `Promise`<`void`>

___

