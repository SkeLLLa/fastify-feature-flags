> **[fastify-feature-flags](../README.md)**

[ConfigProvider](configprovider.md) /

# Class: ConfigProvider

## Hierarchy

* [GenericProvider](genericprovider.md)

  * **ConfigProvider**

### Index

#### Interfaces

* [Options](../interfaces/configprovider.options.md)

#### Constructors

* [constructor](configprovider.md#constructor)

#### Properties

* [conf](configprovider.md#private-conf)
* [fastify](configprovider.md#protected-fastify)
* [options](configprovider.md#protected-options)

#### Methods

* [attachFastify](configprovider.md#attachfastify)
* [isEnabled](configprovider.md#isenabled)
* [onFastifyAttached](configprovider.md#protected-onfastifyattached)

## Constructors

###  constructor

\+ **new ConfigProvider**(`options`: [Options](../interfaces/configprovider.options.md)): *[ConfigProvider](configprovider.md)*

*Overrides [GenericProvider](genericprovider.md).[constructor](genericprovider.md#constructor)*

Defined in providers/config.ts:14

**Parameters:**

Name | Type |
------ | ------ |
`options` | [Options](../interfaces/configprovider.options.md) |

**Returns:** *[ConfigProvider](configprovider.md)*

## Properties

### `Private` conf

• **conf**: *object*

Defined in providers/config.ts:14

#### Type declaration:

● \[▪ **key**: *string*\]: boolean | string

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

Defined in providers/config.ts:20

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