> **[fastify-feature-flags](../README.md)**

[GenericProvider](genericprovider.md) /

# Class: GenericProvider

## Hierarchy

* **GenericProvider**

  * [ConfigProvider](configprovider.md)

  * [EnvProvider](envprovider.md)

  * [UnleashProvider](unleashprovider.md)

### Index

#### Constructors

* [constructor](genericprovider.md#constructor)

#### Properties

* [fastify](genericprovider.md#protected-fastify)
* [options](genericprovider.md#protected-options)

#### Methods

* [attachFastify](genericprovider.md#attachfastify)
* [isEnabled](genericprovider.md#isenabled)
* [onFastifyAttached](genericprovider.md#protected-onfastifyattached)

## Constructors

###  constructor

\+ **new GenericProvider**(`options`: any): *[GenericProvider](genericprovider.md)*

Defined in providers/generic.ts:6

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | any | Provider options  |

**Returns:** *[GenericProvider](genericprovider.md)*

## Properties

### `Protected` fastify

• **fastify**: *`FastifyInstance`*

Defined in providers/generic.ts:5

___

### `Protected` options

• **options**: *any*

Defined in providers/generic.ts:4

## Methods

###  attachFastify

▸ **attachFastify**(`f`: `FastifyInstance`): *void*

Defined in providers/generic.ts:18

Attach fastify instance to provider

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`f` | `FastifyInstance` | fastify instance  |

**Returns:** *void*

___

###  isEnabled

▸ **isEnabled**(`_feature`: string, `_context?`: any): *`Promise<boolean>`*

Defined in providers/generic.ts:27

Checks if feature is enabled

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`_feature` | string | feature name |
`_context?` | any | context used in feature check  |

**Returns:** *`Promise<boolean>`*

___

### `Protected` onFastifyAttached

▸ **onFastifyAttached**(): *void*

Defined in providers/generic.ts:6

**Returns:** *void*