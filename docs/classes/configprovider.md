[fastify-feature-flags](../README.md) > [ConfigProvider](../classes/configprovider.md)

# Class: ConfigProvider

## Hierarchy

 [GenericProvider](genericprovider.md)

**↳ ConfigProvider**

## Index

### Interfaces

* [Options](../interfaces/configprovider.options.md)

### Constructors

* [constructor](configprovider.md#constructor)

### Properties

* [options](configprovider.md#options-1)

### Methods

* [checkEnabled](configprovider.md#checkenabled)
* [isEnabled](configprovider.md#isenabled)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ConfigProvider**(options: *[Options](../interfaces/configprovider.options.md)*): [ConfigProvider](configprovider.md)

*Overrides [GenericProvider](genericprovider.md).[constructor](genericprovider.md#constructor)*

*Defined in providers/config.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [Options](../interfaces/configprovider.options.md) |

**Returns:** [ConfigProvider](configprovider.md)

___

## Properties

<a id="options-1"></a>

### `<Protected>` options

**● options**: *`any`*

*Inherited from [GenericProvider](genericprovider.md).[options](genericprovider.md#options)*

*Defined in providers/generic.ts:5*

___

## Methods

<a id="checkenabled"></a>

###  checkEnabled

▸ **checkEnabled**(feature: *`string`*, ...args: *`Array`<`any`>*): `Promise`<`void`>

*Inherited from [GenericProvider](genericprovider.md).[checkEnabled](genericprovider.md#checkenabled)*

*Defined in providers/generic.ts:26*

Checks if feature is enabled

*__throws__*: FeatureError

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| feature | `string` |  feature name |
| `Rest` args | `Array`<`any`> |  any other options |

**Returns:** `Promise`<`void`>

___
<a id="isenabled"></a>

###  isEnabled

▸ **isEnabled**(feature: *`string`*): `Promise`<`boolean`>

*Overrides [GenericProvider](genericprovider.md).[isEnabled](genericprovider.md#isenabled)*

*Defined in providers/config.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| feature | `string` |

**Returns:** `Promise`<`boolean`>

___

