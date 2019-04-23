[fastify-feature-flags](../README.md) > [FastifyFeatureSwitchPlugin](../modules/fastifyfeatureswitchplugin.md) > [Plugin](../interfaces/fastifyfeatureswitchplugin.plugin.md)

# Interface: Plugin

## Hierarchy

**Plugin**

## Index

### Properties

* [providers](fastifyfeatureswitchplugin.plugin.md#providers)

### Methods

* [checkEnabled](fastifyfeatureswitchplugin.plugin.md#checkenabled)
* [isEnabled](fastifyfeatureswitchplugin.plugin.md#isenabled)

---

## Properties

<a id="providers"></a>

###  providers

**● providers**: *`object`*

*Defined in index.ts:11*

#### Type declaration

[key: `string`]: [GenericProvider](../classes/genericprovider.md)

___

## Methods

<a id="checkenabled"></a>

###  checkEnabled

▸ **checkEnabled**(feature: *`string`*): `void`

*Defined in index.ts:24*

Check if feature is enabled

*__throws__*: Error if feature is not enabled

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| feature | `string` |  feature name |

**Returns:** `void`
true if feature enabled

___
<a id="isenabled"></a>

###  isEnabled

▸ **isEnabled**(feature: *`string`*): `Promise`<`boolean`>

*Defined in index.ts:17*

Check if feature is enabled

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| feature | `string` |  feature name |

**Returns:** `Promise`<`boolean`>
true if feature enabled

___

