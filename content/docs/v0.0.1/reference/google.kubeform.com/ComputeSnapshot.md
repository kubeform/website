---
title: ComputeSnapshot
menu:
  docs_v0.0.1:
    identifier: computesnapshot-google.kubeform.com
    name: ComputeSnapshot
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ComputeSnapshot
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeSnapshot` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeSnapshotSpec](#computesnapshotspec)***||
| `status` | ***[ComputeSnapshotStatus](#computesnapshotstatus)***||
## ComputeSnapshotSpec

Appears on:[ComputeSnapshot](#computesnapshot), [ComputeSnapshotStatus](#computesnapshotstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `diskSizeGb` | ***int***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `licenses` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `snapshotEncryptionKey` | ***[[]ComputeSnapshotSpecSnapshotEncryptionKey](#computesnapshotspecsnapshotencryptionkey)***| ***(Optional)*** |
| `snapshotEncryptionKeySha256` | ***string***| ***(Optional)*** Deprecated|
| `snapshotID` | ***int***| ***(Optional)*** |
| `sourceDisk` | ***string***||
| `sourceDiskEncryptionKey` | ***[[]ComputeSnapshotSpecSourceDiskEncryptionKey](#computesnapshotspecsourcediskencryptionkey)***| ***(Optional)*** |
| `sourceDiskEncryptionKeySha256` | ***string***| ***(Optional)*** Deprecated|
| `sourceDiskLink` | ***string***| ***(Optional)*** |
| `storageBytes` | ***int***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## ComputeSnapshotSpecSnapshotEncryptionKey

Appears on:[ComputeSnapshotSpec](#computesnapshotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sha256` | ***string***| ***(Optional)*** |
## ComputeSnapshotSpecSourceDiskEncryptionKey

Appears on:[ComputeSnapshotSpec](#computesnapshotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
## ComputeSnapshotStatus

Appears on:[ComputeSnapshot](#computesnapshot)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeSnapshotSpec](#computesnapshotspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `snapshot_encryption_key.<index>.raw_key` | ***string*** ||
| `snapshot_encryption_key_raw` | ***string*** ||
| `source_disk_encryption_key.<index>.raw_key` | ***string*** ||
| `source_disk_encryption_key_raw` | ***string*** ||
