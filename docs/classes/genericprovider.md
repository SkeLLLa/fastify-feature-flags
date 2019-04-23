[fastify-feature-flags](../README.md) > [GenericProvider](../classes/genericprovider.md)

# Class: GenericProvider

## Hierarchy

**GenericProvider**

↳  [ConfigProvider](configprovider.md)

## Index

### Constructors

* [constructor](genericprovider.md#constructor)

### Properties

* [options](genericprovider.md#options)

### Methods

* [checkEnabled](genericprovider.md#checkenabled)
* [isEnabled](genericprovider.md#isenabled)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GenericProvider**(options?: *`any`*): [GenericProvider](genericprovider.md)

*Defined in providers/generic.ts:5*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| `Optional` options | `any` |  Provider options |

**Returns:** [GenericProvider](genericprovider.md)

___

## Properties

<a id="options"></a>

### `<Protected>` options

**● options**: *`any`*

*Defined in providers/generic.ts:5*

___

## Methods

<a id="checkenabled"></a>

###  checkEnabled

▸ **checkEnabled**(feature: *`string`*, ...args: *`Array`<`any`>*): `Promise`<`void`>

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

▸ **isEnabled**(_feature: *`string`*, ..._args: *`Array`<`any`>*): `Promise`<`boolean`>

*Defined in providers/generic.ts:17*

Checks if feature is enabled

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| _feature | `string` |  feature name |
| `Rest` _args | `Array`<`any`> |  any other options |

**Returns:** `Promise`<`boolean`>

___

