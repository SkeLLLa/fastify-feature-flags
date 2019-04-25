[fastify-feature-flags](../README.md) > [FastifyFeatureFlagsPlugin](../modules/fastifyfeatureflagsplugin.md) > [Plugin](../interfaces/fastifyfeatureflagsplugin.plugin.md)

# Interface: Plugin

## Hierarchy

**Plugin**

## Index

### Properties

* [providers](fastifyfeatureflagsplugin.plugin.md#providers)

### Methods

* [checkEnabled](fastifyfeatureflagsplugin.plugin.md#checkenabled)
* [isEnabled](fastifyfeatureflagsplugin.plugin.md#isenabled)

---

## Properties

<a id="providers"></a>

###  providers

**● providers**: *`object`*

*Defined in index.ts:15*

#### Type declaration

[key: `string`]: [GenericProvider](../classes/genericprovider.md)

___

## Methods

<a id="checkenabled"></a>

###  checkEnabled

▸ **checkEnabled**(feature: *`string`*, context?: *`any`*): `void`

*Defined in index.ts:28*

Check if feature is enabled and throws exception if not

*__throws__*: Error if feature is not enabled

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| feature | `string` |  feature name |
| `Optional` context | `any` |

**Returns:** `void`
true if feature enabled

___
<a id="isenabled"></a>

###  isEnabled

▸ **isEnabled**(feature: *`string`*, context?: *`any`*): `Promise`<`boolean`>

*Defined in index.ts:21*

Check if feature is enabled

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| feature | `string` |  feature name |
| `Optional` context | `any` |

**Returns:** `Promise`<`boolean`>
true if feature enabled

___

