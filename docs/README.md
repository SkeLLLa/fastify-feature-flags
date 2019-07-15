> **[fastify-feature-flags](README.md)**

### Index

#### Modules

* ["fastify"](modules/_fastify_.md)
* [FastifyFeatureFlagsPlugin](modules/fastifyfeatureflagsplugin.md)

#### Classes

* [ConfigProvider](classes/configprovider.md)
* [EnvProvider](classes/envprovider.md)
* [FeatureError](classes/featureerror.md)
* [GenericProvider](classes/genericprovider.md)
* [UnleashProvider](classes/unleashprovider.md)

#### Variables

* [DEFAULT_ERROR_CODE](README.md#const-default_error_code)
* [PLUGIN_NAME](README.md#const-plugin_name)

#### Functions

* [fastifyFeatureSwitch](README.md#const-fastifyfeatureswitch)

## Variables

### `Const` DEFAULT_ERROR_CODE

• **DEFAULT_ERROR_CODE**: *`500`* = 500

Defined in index.ts:8

___

### `Const` PLUGIN_NAME

• **PLUGIN_NAME**: *"featureFlags"* = "featureFlags"

Defined in index.ts:7

## Functions

### `Const` fastifyFeatureSwitch

▸ **fastifyFeatureSwitch**(`fastify`: `FastifyInstance`, `options`: [Options](interfaces/fastifyfeatureflagsplugin.options.md)): *`Promise<void>`*

Defined in index.ts:44

**Parameters:**

Name | Type |
------ | ------ |
`fastify` | `FastifyInstance` |
`options` | [Options](interfaces/fastifyfeatureflagsplugin.options.md) |

**Returns:** *`Promise<void>`*