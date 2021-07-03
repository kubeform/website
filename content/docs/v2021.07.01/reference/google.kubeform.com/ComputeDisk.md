---
title: ComputeDisk
menu:
  docs_v2021.07.01:
    identifier: computedisk-google.kubeform.com
    name: ComputeDisk
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

## ComputeDisk
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeDisk` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeDiskSpec](#computediskspec)***||
| `status` | ***[ComputeDiskStatus](#computediskstatus)***||
## ComputeDiskSpec

Appears on:[ComputeDisk](#computedisk), [ComputeDiskStatus](#computediskstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `diskEncryptionKey` | ***[[]ComputeDiskSpecDiskEncryptionKey](#computediskspecdiskencryptionkey)***| ***(Optional)*** |
| `image` | ***string***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `lastAttachTimestamp` | ***string***| ***(Optional)*** |
| `lastDetachTimestamp` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `physicalBlockSizeBytes` | ***int64***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `size` | ***int64***| ***(Optional)*** |
| `snapshot` | ***string***| ***(Optional)*** |
| `sourceImageEncryptionKey` | ***[[]ComputeDiskSpecSourceImageEncryptionKey](#computediskspecsourceimageencryptionkey)***| ***(Optional)*** |
| `sourceImageID` | ***string***| ***(Optional)*** |
| `sourceSnapshotEncryptionKey` | ***[[]ComputeDiskSpecSourceSnapshotEncryptionKey](#computediskspecsourcesnapshotencryptionkey)***| ***(Optional)*** |
| `sourceSnapshotID` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
| `users` | ***[]string***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## ComputeDiskSpecDiskEncryptionKey

Appears on:[ComputeDiskSpec](#computediskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `kmsKeySelfLink` | ***string***| ***(Optional)*** |
| `rawKey` | ***string***| ***(Optional)*** |
| `sha256` | ***string***| ***(Optional)*** |
## ComputeDiskSpecSourceImageEncryptionKey

Appears on:[ComputeDiskSpec](#computediskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `kmsKeySelfLink` | ***string***| ***(Optional)*** |
| `rawKey` | ***string***| ***(Optional)*** |
| `sha256` | ***string***| ***(Optional)*** |
## ComputeDiskSpecSourceSnapshotEncryptionKey

Appears on:[ComputeDiskSpec](#computediskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `kmsKeySelfLink` | ***string***| ***(Optional)*** |
| `rawKey` | ***string***| ***(Optional)*** |
| `sha256` | ***string***| ***(Optional)*** |
## ComputeDiskStatus

Appears on:[ComputeDisk](#computedisk)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeDiskSpec](#computediskspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeDiskStatus](#computediskstatus)

---
