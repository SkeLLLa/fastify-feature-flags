> **[fastify-feature-flags](../README.md)**

[EnvProvider](envprovider.md) /

# Class: EnvProvider

## Hierarchy

* [GenericProvider](genericprovider.md)

  * **EnvProvider**

### Index

#### Interfaces

* [Options](../interfaces/envprovider.options.md)

#### Constructors

* [constructor](envprovider.md#constructor)

#### Properties

* [conf](envprovider.md#private-conf)
* [fastify](envprovider.md#protected-fastify)
* [options](envprovider.md#protected-options)

#### Methods

* [attachFastify](envprovider.md#attachfastify)
* [isEnabled](envprovider.md#isenabled)
* [onFastifyAttached](envprovider.md#protected-onfastifyattached)

## Constructors

###  constructor

\+ **new EnvProvider**(`options`: [Options](../interfaces/envprovider.options.md)): *[EnvProvider](envprovider.md)*

*Overrides [GenericProvider](genericprovider.md).[constructor](genericprovider.md#constructor)*

Defined in providers/env.ts:13

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../interfaces/envprovider.options.md) |

**Returns:** *[EnvProvider](envprovider.md)*

## Properties

### `Private` conf

• **conf**: *object*

Defined in providers/env.ts:13

#### Type declaration:

● \[▪ **key**: *string*\]: string | undefined

___

### `Protected` fastify

• **fastify**: *`FastifyInstance`*

*Inherited from [GenericProvider](genericprovider.md).[fastify](genericprovider.md#protected-fastify)*

Defined in providers/generic.ts:5

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

▸ **isEnabled**(`feature`: string): *`Promise<boolean>`*

*Overrides [GenericProvider](genericprovider.md).[isEnabled](genericprovider.md#isenabled)*

Defined in providers/env.ts:31

**Parameters:**

Name | Type |
------ | ------ |
`feature` | string |

**Returns:** *`Promise<boolean>`*

___

### `Protected` onFastifyAttached

▸ **onFastifyAttached**(): *void*

*Inherited from [GenericProvider](genericprovider.md).[onFastifyAttached](genericprovider.md#protected-onfastifyattached)*

Defined in providers/generic.ts:6

**Returns:** *void*