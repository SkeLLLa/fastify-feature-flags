[fastify-feature-flags](../README.md) > [GenericProvider](../classes/genericprovider.md)

# Class: GenericProvider

## Hierarchy

**GenericProvider**

↳  [ConfigProvider](configprovider.md)

↳  [EnvProvider](envprovider.md)

↳  [UnleashProvider](unleashprovider.md)

## Index

### Interfaces

* [Options](../interfaces/genericprovider.options.md)

### Constructors

* [constructor](genericprovider.md#constructor)

### Properties

* [options](genericprovider.md#options-1)

### Methods

* [isEnabled](genericprovider.md#isenabled)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new GenericProvider**(options: *[Options](../interfaces/genericprovider.options.md)*): [GenericProvider](genericprovider.md)

*Defined in providers/generic.ts:10*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| options | [Options](../interfaces/genericprovider.options.md) |  Provider options |

**Returns:** [GenericProvider](genericprovider.md)

___

## Properties

<a id="options-1"></a>

### `<Protected>` options

**● options**: *[Options](../interfaces/genericprovider.options.md)*

*Defined in providers/generic.ts:10*

___

## Methods

<a id="isenabled"></a>

###  isEnabled

▸ **isEnabled**(_feature: *`string`*, _context?: *`any`*): `Promise`<`boolean`>

*Defined in providers/generic.ts:22*

Checks if feature is enabled

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| _feature | `string` |  feature name |
| `Optional` _context | `any` |  context used in feature check |

**Returns:** `Promise`<`boolean`>

___

