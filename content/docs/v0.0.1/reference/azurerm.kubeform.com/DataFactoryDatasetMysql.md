---
title: DataFactoryDatasetMysql
menu:
  docs_v0.0.1:
    identifier: datafactorydatasetmysql-azurerm.kubeform.com
    name: DataFactoryDatasetMysql
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DataFactoryDatasetMysql
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DataFactoryDatasetMysql` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataFactoryDatasetMysqlSpec](#datafactorydatasetmysqlspec)***||
| `status` | ***[DataFactoryDatasetMysqlStatus](#datafactorydatasetmysqlstatus)***||
## DataFactoryDatasetMysqlSpec

Appears on:[DataFactoryDatasetMysql](#datafactorydatasetmysql), [DataFactoryDatasetMysqlStatus](#datafactorydatasetmysqlstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `additionalProperties` | ***map[string]string***| ***(Optional)*** |
| `annotations` | ***[]string***| ***(Optional)*** |
| `dataFactoryName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `folder` | ***string***| ***(Optional)*** |
| `linkedServiceName` | ***string***||
| `name` | ***string***||
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `schemaColumn` | ***[[]DataFactoryDatasetMysqlSpecSchemaColumn](#datafactorydatasetmysqlspecschemacolumn)***| ***(Optional)*** |
| `tableName` | ***string***| ***(Optional)*** |
## DataFactoryDatasetMysqlSpecSchemaColumn

Appears on:[DataFactoryDatasetMysqlSpec](#datafactorydatasetmysqlspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## DataFactoryDatasetMysqlStatus

Appears on:[DataFactoryDatasetMysql](#datafactorydatasetmysql)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataFactoryDatasetMysqlSpec](#datafactorydatasetmysqlspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
