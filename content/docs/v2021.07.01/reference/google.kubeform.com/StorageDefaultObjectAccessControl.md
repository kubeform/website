---
title: StorageDefaultObjectAccessControl
menu:
  docs_v2021.07.01:
    identifier: storagedefaultobjectaccesscontrol-google.kubeform.com
    name: StorageDefaultObjectAccessControl
    parent: google.kubeform.com-reference
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

## StorageDefaultObjectAccessControl
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageDefaultObjectAccessControl` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageDefaultObjectAccessControlSpec](#storagedefaultobjectaccesscontrolspec)***||
| `status` | ***[StorageDefaultObjectAccessControlStatus](#storagedefaultobjectaccesscontrolstatus)***||
## Phase(`string` alias)

Appears on:[StorageDefaultObjectAccessControlStatus](#storagedefaultobjectaccesscontrolstatus)

## StorageDefaultObjectAccessControlSpec

Appears on:[StorageDefaultObjectAccessControl](#storagedefaultobjectaccesscontrol), [StorageDefaultObjectAccessControlStatus](#storagedefaultobjectaccesscontrolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucket` | ***string***||
| `domain` | ***string***| ***(Optional)*** |
| `email` | ***string***| ***(Optional)*** |
| `entity` | ***string***||
| `entityID` | ***string***| ***(Optional)*** |
| `generation` | ***int64***| ***(Optional)*** |
| `object` | ***string***| ***(Optional)*** |
| `projectTeam` | ***[[]StorageDefaultObjectAccessControlSpecProjectTeam](#storagedefaultobjectaccesscontrolspecprojectteam)***| ***(Optional)*** |
| `role` | ***string***||
## StorageDefaultObjectAccessControlSpecProjectTeam

Appears on:[StorageDefaultObjectAccessControlSpec](#storagedefaultobjectaccesscontrolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `projectNumber` | ***string***| ***(Optional)*** |
| `team` | ***string***| ***(Optional)*** |
## StorageDefaultObjectAccessControlStatus

Appears on:[StorageDefaultObjectAccessControl](#storagedefaultobjectaccesscontrol)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageDefaultObjectAccessControlSpec](#storagedefaultobjectaccesscontrolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
