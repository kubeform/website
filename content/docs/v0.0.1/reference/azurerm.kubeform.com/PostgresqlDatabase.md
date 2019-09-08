---
title: PostgresqlDatabase
menu:
  docs_v0.0.1:
    identifier: postgresqldatabase-azurerm.kubeform.com
    name: PostgresqlDatabase
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## PostgresqlDatabase
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PostgresqlDatabase` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PostgresqlDatabaseSpec](#PostgresqlDatabaseSpec)***||
| `status` | ***[PostgresqlDatabaseStatus](#PostgresqlDatabaseStatus)***||
## PostgresqlDatabaseSpec
##### (Appears on:[PostgresqlDatabase](#PostgresqlDatabase), [PostgresqlDatabaseStatus](#PostgresqlDatabaseStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `charset` | ***string***||
| `collation` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `serverName` | ***string***||
## PostgresqlDatabaseStatus
##### (Appears on:[PostgresqlDatabase](#PostgresqlDatabase))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PostgresqlDatabaseSpec](#PostgresqlDatabaseSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---