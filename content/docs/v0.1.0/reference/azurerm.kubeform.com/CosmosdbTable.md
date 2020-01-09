---
title: CosmosdbTable
menu:
  docs_v0.1.0:
    identifier: cosmosdbtable-azurerm.kubeform.com
    name: CosmosdbTable
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## CosmosdbTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `CosmosdbTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CosmosdbTableSpec](#cosmosdbtablespec)***||
| `status` | ***[CosmosdbTableStatus](#cosmosdbtablestatus)***||
## CosmosdbTableSpec

Appears on:[CosmosdbTable](#cosmosdbtable), [CosmosdbTableStatus](#cosmosdbtablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountName` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
## CosmosdbTableStatus

Appears on:[CosmosdbTable](#cosmosdbtable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CosmosdbTableSpec](#cosmosdbtablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CosmosdbTableStatus](#cosmosdbtablestatus)

---