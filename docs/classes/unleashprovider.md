> **[fastify-feature-flags](../README.md)**

[UnleashProvider](unleashprovider.md) /

# Class: UnleashProvider

## Hierarchy

* [GenericProvider](genericprovider.md)

  * **UnleashProvider**

### Index

#### Interfaces

* [Options](../interfaces/unleashprovider.options.md)

#### Constructors

* [constructor](unleashprovider.md#constructor)

#### Properties

* [fastify](unleashprovider.md#protected-fastify)
* [instance](unleashprovider.md#private-instance)
* [options](unleashprovider.md#protected-options)

#### Methods

* [attachFastify](unleashprovider.md#attachfastify)
* [isEnabled](unleashprovider.md#isenabled)
* [onFastifyAttached](unleashprovider.md#onfastifyattached)

## Constructors

###  constructor

\+ **new UnleashProvider**(`options`: [Options](../interfaces/unleashprovider.options.md)): *[UnleashProvider](unleashprovider.md)*

*Overrides [GenericProvider](genericprovider.md).[constructor](genericprovider.md#constructor)*

Defined in providers/unleash.ts:10

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../interfaces/unleashprovider.options.md) |

**Returns:** *[UnleashProvider](unleashprovider.md)*

## Properties

### `Protected` fastify

• **fastify**: *`FastifyInstance`*

*Inherited from [GenericProvider](genericprovider.md).[fastify](genericprovider.md#protected-fastify)*

Defined in providers/generic.ts:5

___

### `Private` instance

• **instance**: *`Unleash`*

Defined in providers/unleash.ts:10

___

### `Protected` options

• **options**: *any*

*Inherited from [GenericProvider](genericprovider.md).[options](genericprovider.md#protected-options)*

Defined in providers/generic.ts:4

## Methods

###  attachFastify

▸ **attachFastify**(`f`: `FastifyInstance`): *void*

*Inherited from [GenericProvider](genericprovider.md).[attachFastify](genericprovider.md#attachfastify)*

Defined in providers/generic.ts:18

Attach fastify instance to provider

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | `FastifyInstance` | fastify instance  |

**Returns:** *void*

___

###  isEnabled

▸ **isEnabled**(`feature`: string, `context?`: any): *`Promise<boolean>`*

*Overrides [GenericProvider](genericprovider.md).[isEnabled](genericprovider.md#isenabled)*

Defined in providers/unleash.ts:30

**Parameters:**

Name | Type |
------ | ------ |
`feature` | string |
`context?` | any |

**Returns:** *`Promise<boolean>`*

___

###  onFastifyAttached

▸ **onFastifyAttached**(): *void*

*Overrides [GenericProvider](genericprovider.md).[onFastifyAttached](genericprovider.md#protected-onfastifyattached)*

Defined in providers/unleash.ts:16

**Returns:** *void*