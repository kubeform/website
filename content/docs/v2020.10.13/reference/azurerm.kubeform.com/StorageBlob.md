---
title: StorageBlob
menu:
  docs_v2020.10.13:
    identifier: storageblob-azurerm.kubeform.com
    name: StorageBlob
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## StorageBlob
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageBlob` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageBlobSpec](#storageblobspec)***||
| `status` | ***[StorageBlobStatus](#storageblobstatus)***||
## Phase(`string` alias)

Appears on:[StorageBlobStatus](#storageblobstatus)

## StorageBlobSpec

Appears on:[StorageBlob](#storageblob), [StorageBlobStatus](#storageblobstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `attempts` | ***int64***| ***(Optional)*** |
| `contentType` | ***string***| ***(Optional)*** |
| `metadata` | ***map[string]string***| ***(Optional)*** |
| `name` | ***string***||
| `parallelism` | ***int64***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `size` | ***int64***| ***(Optional)*** |
| `source` | ***string***| ***(Optional)*** |
| `sourceURI` | ***string***| ***(Optional)*** |
| `storageAccountName` | ***string***||
| `storageContainerName` | ***string***||
| `type` | ***string***| ***(Optional)*** |
| `url` | ***string***| ***(Optional)*** |
## StorageBlobStatus

Appears on:[StorageBlob](#storageblob)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageBlobSpec](#storageblobspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
