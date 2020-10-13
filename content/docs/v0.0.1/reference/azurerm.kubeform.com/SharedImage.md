---
title: SharedImage
menu:
  docs_v0.0.1:
    identifier: sharedimage-azurerm.kubeform.com
    name: SharedImage
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SharedImage
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SharedImage` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SharedImageSpec](#sharedimagespec)***||
| `status` | ***[SharedImageStatus](#sharedimagestatus)***||
## SharedImageSpec

Appears on:[SharedImage](#sharedimage), [SharedImageStatus](#sharedimagestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `eula` | ***string***| ***(Optional)*** |
| `galleryName` | ***string***||
| `identifier` | ***[[]SharedImageSpecIdentifier](#sharedimagespecidentifier)***||
| `location` | ***string***||
| `name` | ***string***||
| `osType` | ***string***||
| `privacyStatementURI` | ***string***| ***(Optional)*** |
| `releaseNoteURI` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## SharedImageSpecIdentifier

Appears on:[SharedImageSpec](#sharedimagespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `offer` | ***string***||
| `publisher` | ***string***||
| `sku` | ***string***||
## SharedImageStatus

Appears on:[SharedImage](#sharedimage)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SharedImageSpec](#sharedimagespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---