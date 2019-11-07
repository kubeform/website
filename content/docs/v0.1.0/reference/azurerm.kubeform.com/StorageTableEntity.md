---
title: StorageTableEntity
menu:
  docs_v0.1.0:
    identifier: storagetableentity-azurerm.kubeform.com
    name: StorageTableEntity
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## StorageTableEntity
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageTableEntity` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageTableEntitySpec](#storagetableentityspec)***||
| `status` | ***[StorageTableEntityStatus](#storagetableentitystatus)***||
## Phase(`string` alias)

Appears on:[StorageTableEntityStatus](#storagetableentitystatus)

## StorageTableEntitySpec

Appears on:[StorageTableEntity](#storagetableentity), [StorageTableEntityStatus](#storagetableentitystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `entity` | ***map[string]string***||
| `partitionKey` | ***string***||
| `rowKey` | ***string***||
| `storageAccountName` | ***string***||
| `tableName` | ***string***||
## StorageTableEntityStatus

Appears on:[StorageTableEntity](#storagetableentity)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageTableEntitySpec](#storagetableentityspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
