---
title: StorageObjectAccessControl
menu:
  docs_v2020.10.13:
    identifier: storageobjectaccesscontrol-google.kubeform.com
    name: StorageObjectAccessControl
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## StorageObjectAccessControl
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageObjectAccessControl` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageObjectAccessControlSpec](#storageobjectaccesscontrolspec)***||
| `status` | ***[StorageObjectAccessControlStatus](#storageobjectaccesscontrolstatus)***||
## Phase(`string` alias)

Appears on:[StorageObjectAccessControlStatus](#storageobjectaccesscontrolstatus)

## StorageObjectAccessControlSpec

Appears on:[StorageObjectAccessControl](#storageobjectaccesscontrol), [StorageObjectAccessControlStatus](#storageobjectaccesscontrolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucket` | ***string***||
| `domain` | ***string***| ***(Optional)*** |
| `email` | ***string***| ***(Optional)*** |
| `entity` | ***string***||
| `entityID` | ***string***| ***(Optional)*** |
| `generation` | ***int64***| ***(Optional)*** |
| `object` | ***string***||
| `projectTeam` | ***[[]StorageObjectAccessControlSpecProjectTeam](#storageobjectaccesscontrolspecprojectteam)***| ***(Optional)*** |
| `role` | ***string***||
## StorageObjectAccessControlSpecProjectTeam

Appears on:[StorageObjectAccessControlSpec](#storageobjectaccesscontrolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `projectNumber` | ***string***| ***(Optional)*** |
| `team` | ***string***| ***(Optional)*** |
## StorageObjectAccessControlStatus

Appears on:[StorageObjectAccessControl](#storageobjectaccesscontrol)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageObjectAccessControlSpec](#storageobjectaccesscontrolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
