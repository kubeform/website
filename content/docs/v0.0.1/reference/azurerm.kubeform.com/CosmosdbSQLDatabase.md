---
title: CosmosdbSQLDatabase
menu:
  docs_v0.0.1:
    identifier: cosmosdbsqldatabase-azurerm.kubeform.com
    name: CosmosdbSQLDatabase
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## CosmosdbSQLDatabase
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `CosmosdbSQLDatabase` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CosmosdbSQLDatabaseSpec](#CosmosdbSQLDatabaseSpec)***||
| `status` | ***[CosmosdbSQLDatabaseStatus](#CosmosdbSQLDatabaseStatus)***||
## CosmosdbSQLDatabaseSpec
##### (Appears on:[CosmosdbSQLDatabase](#CosmosdbSQLDatabase), [CosmosdbSQLDatabaseStatus](#CosmosdbSQLDatabaseStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountName` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
## CosmosdbSQLDatabaseStatus
##### (Appears on:[CosmosdbSQLDatabase](#CosmosdbSQLDatabase))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CosmosdbSQLDatabaseSpec](#CosmosdbSQLDatabaseSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
