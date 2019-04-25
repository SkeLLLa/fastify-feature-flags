[fastify-feature-flags](../README.md) > [UnleashProvider](../classes/unleashprovider.md)

# Class: UnleashProvider

## Hierarchy

 [GenericProvider](genericprovider.md)

**↳ UnleashProvider**

## Index

### Interfaces

* [Options](../interfaces/unleashprovider.options.md)

### Constructors

* [constructor](unleashprovider.md#constructor)

### Properties

* [instance](unleashprovider.md#instance)
* [options](unleashprovider.md#options-1)

### Methods

* [isEnabled](unleashprovider.md#isenabled)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new UnleashProvider**(options: *`Options`*): [UnleashProvider](unleashprovider.md)

*Overrides [GenericProvider](genericprovider.md).[constructor](genericprovider.md#constructor)*

*Defined in providers/unleash.ts:10*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `Options` |

**Returns:** [UnleashProvider](unleashprovider.md)

___

## Properties

<a id="instance"></a>

### `<Private>` instance

**● instance**: *`Unleash`*

*Defined in providers/unleash.ts:10*

___
<a id="options-1"></a>

### `<Protected>` options

**● options**: *[Options](../interfaces/genericprovider.options.md)*

*Inherited from [GenericProvider](genericprovider.md).[options](genericprovider.md#options-1)*

*Defined in providers/generic.ts:10*

___

## Methods

<a id="isenabled"></a>

###  isEnabled

▸ **isEnabled**(feature: *`string`*, context?: *`any`*): `Promise`<`boolean`>

*Overrides [GenericProvider](genericprovider.md).[isEnabled](genericprovider.md#isenabled)*

*Defined in providers/unleash.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| feature | `string` |
| `Optional` context | `any` |

**Returns:** `Promise`<`boolean`>

___

