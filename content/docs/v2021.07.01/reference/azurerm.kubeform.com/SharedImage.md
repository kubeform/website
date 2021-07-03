---
title: SharedImage
menu:
  docs_v2021.07.01:
    identifier: sharedimage-azurerm.kubeform.com
    name: SharedImage
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## SharedImage
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SharedImage` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SharedImageSpec](#sharedimagespec)***||
| `status` | ***[SharedImageStatus](#sharedimagestatus)***||
## Phase(`string` alias)

Appears on:[SharedImageStatus](#sharedimagestatus)

## SharedImageSpec

Appears on:[SharedImage](#sharedimage), [SharedImageStatus](#sharedimagestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
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
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
