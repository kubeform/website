---
title: SqlElasticpool
menu:
  docs_v2020.10.13:
    identifier: sqlelasticpool-azurerm.kubeform.com
    name: SqlElasticpool
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## SqlElasticpool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SqlElasticpool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqlElasticpoolSpec](#sqlelasticpoolspec)***||
| `status` | ***[SqlElasticpoolStatus](#sqlelasticpoolstatus)***||
## Phase(`string` alias)

Appears on:[SqlElasticpoolStatus](#sqlelasticpoolstatus)

## SqlElasticpoolSpec

Appears on:[SqlElasticpool](#sqlelasticpool), [SqlElasticpoolStatus](#sqlelasticpoolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationDate` | ***string***| ***(Optional)*** |
| `dbDtuMax` | ***int64***| ***(Optional)*** |
| `dbDtuMin` | ***int64***| ***(Optional)*** |
| `dtu` | ***int64***||
| `edition` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `poolSize` | ***int64***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `serverName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## SqlElasticpoolStatus

Appears on:[SqlElasticpool](#sqlelasticpool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqlElasticpoolSpec](#sqlelasticpoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
