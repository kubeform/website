---
title: Snapshot
menu:
  docs_v2020.10.13:
    identifier: snapshot-azurerm.kubeform.com
    name: Snapshot
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## Snapshot
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `Snapshot` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SnapshotSpec](#snapshotspec)***||
| `status` | ***[SnapshotStatus](#snapshotstatus)***||
## Phase(`string` alias)

Appears on:[SnapshotStatus](#snapshotstatus)

## SnapshotSpec

Appears on:[Snapshot](#snapshot), [SnapshotStatus](#snapshotstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createOption` | ***string***||
| `diskSizeGb` | ***int64***| ***(Optional)*** |
| `encryptionSettings` | ***[[]SnapshotSpecEncryptionSettings](#snapshotspecencryptionsettings)***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `sourceResourceID` | ***string***| ***(Optional)*** |
| `sourceURI` | ***string***| ***(Optional)*** |
| `storageAccountID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SnapshotSpecEncryptionSettings

Appears on:[SnapshotSpec](#snapshotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `diskEncryptionKey` | ***[[]SnapshotSpecEncryptionSettingsDiskEncryptionKey](#snapshotspecencryptionsettingsdiskencryptionkey)***| ***(Optional)*** |
| `enabled` | ***bool***||
| `keyEncryptionKey` | ***[[]SnapshotSpecEncryptionSettingsKeyEncryptionKey](#snapshotspecencryptionsettingskeyencryptionkey)***| ***(Optional)*** |
## SnapshotSpecEncryptionSettingsDiskEncryptionKey

Appears on:[SnapshotSpecEncryptionSettings](#snapshotspecencryptionsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `secretURL` | ***string***||
| `sourceVaultID` | ***string***||
## SnapshotSpecEncryptionSettingsKeyEncryptionKey

Appears on:[SnapshotSpecEncryptionSettings](#snapshotspecencryptionsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `keyURL` | ***string***||
| `sourceVaultID` | ***string***||
## SnapshotStatus

Appears on:[Snapshot](#snapshot)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SnapshotSpec](#snapshotspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
