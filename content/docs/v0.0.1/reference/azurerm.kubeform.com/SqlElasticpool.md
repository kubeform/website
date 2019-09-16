---
title: SqlElasticpool
menu:
  docs_v0.0.1:
    identifier: sqlelasticpool-azurerm.kubeform.com
    name: SqlElasticpool
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SqlElasticpool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SqlElasticpool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqlElasticpoolSpec](#sqlelasticpoolspec)***||
| `status` | ***[SqlElasticpoolStatus](#sqlelasticpoolstatus)***||
## SqlElasticpoolSpec

Appears on:[SqlElasticpool](#sqlelasticpool), [SqlElasticpoolStatus](#sqlelasticpoolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationDate` | ***string***| ***(Optional)*** |
| `dbDtuMax` | ***int***| ***(Optional)*** |
| `dbDtuMin` | ***int***| ***(Optional)*** |
| `dtu` | ***int***||
| `edition` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `poolSize` | ***int***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `serverName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## SqlElasticpoolStatus

Appears on:[SqlElasticpool](#sqlelasticpool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqlElasticpoolSpec](#sqlelasticpoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
