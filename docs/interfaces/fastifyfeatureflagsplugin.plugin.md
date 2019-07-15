> **[fastify-feature-flags](../README.md)**

[FastifyFeatureFlagsPlugin](../modules/fastifyfeatureflagsplugin.md) / [Plugin](fastifyfeatureflagsplugin.plugin.md) /

# Interface: Plugin

## Hierarchy

* **Plugin**

### Index

#### Methods

* [checkEnabled](fastifyfeatureflagsplugin.plugin.md#checkenabled)
* [isEnabled](fastifyfeatureflagsplugin.plugin.md#isenabled)

## Methods

###  checkEnabled

▸ **checkEnabled**(`feature`: string, `context?`: any): *void*

Defined in index.ts:24

Check if feature is enabled and throws exception if not

**`throws`** Error if feature is not enabled

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`feature` | string | feature name |
`context?` | any | - |

**Returns:** *void*

true if feature enabled

___

###  isEnabled

▸ **isEnabled**(`feature`: string, `context?`: any): *`Promise<boolean>`*

Defined in index.ts:17

Check if feature is enabled

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`feature` | string | feature name |
`context?` | any | - |

**Returns:** *`Promise<boolean>`*

true if feature enabled