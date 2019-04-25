[fastify-feature-flags](../README.md) > [EnvProvider](../classes/envprovider.md)

# Class: EnvProvider

## Hierarchy

 [GenericProvider](genericprovider.md)

**↳ EnvProvider**

## Index

### Interfaces

* [Options](../interfaces/envprovider.options.md)

### Constructors

* [constructor](envprovider.md#constructor)

### Properties

* [conf](envprovider.md#conf)
* [options](envprovider.md#options-1)

### Methods

* [isEnabled](envprovider.md#isenabled)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new EnvProvider**(options: *`Options`*): [EnvProvider](envprovider.md)

*Overrides [GenericProvider](genericprovider.md).[constructor](genericprovider.md#constructor)*

*Defined in providers/env.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | `Options` |

**Returns:** [EnvProvider](envprovider.md)

___

## Properties

<a id="conf"></a>

### `<Private>` conf

**● conf**: *`object`*

*Defined in providers/env.ts:13*

#### Type declaration

[key: `string`]: `string` \| `undefined`

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

▸ **isEnabled**(feature: *`string`*): `Promise`<`boolean`>

*Overrides [GenericProvider](genericprovider.md).[isEnabled](genericprovider.md#isenabled)*

*Defined in providers/env.ts:31*

**Parameters:**

| Name | Type |
| ------ | ------ |
| feature | `string` |

**Returns:** `Promise`<`boolean`>

___

