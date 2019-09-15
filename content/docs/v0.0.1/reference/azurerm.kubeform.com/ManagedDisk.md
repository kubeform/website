---
title: ManagedDisk
menu:
  docs_v0.0.1:
    identifier: manageddisk-azurerm.kubeform.com
    name: ManagedDisk
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ManagedDisk
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ManagedDisk` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ManagedDiskSpec](#ManagedDiskSpec)***||
| `status` | ***[ManagedDiskStatus](#ManagedDiskStatus)***||
## ManagedDiskSpec
##### (Appears on:[ManagedDisk](#ManagedDisk), [ManagedDiskStatus](#ManagedDiskStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createOption` | ***string***||
| `diskSizeGb` | ***int***| ***(Optional)*** |
| `encryptionSettings` | ***[[]ManagedDiskSpecEncryptionSettings](#ManagedDiskSpecEncryptionSettings)***| ***(Optional)*** |
| `imageReferenceID` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `osType` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `sourceResourceID` | ***string***| ***(Optional)*** |
| `sourceURI` | ***string***| ***(Optional)*** |
| `storageAccountType` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `zones` | ***[]string***| ***(Optional)*** |
## ManagedDiskSpecEncryptionSettings
##### (Appears on:[ManagedDiskSpec](#ManagedDiskSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `diskEncryptionKey` | ***[[]ManagedDiskSpecEncryptionSettingsDiskEncryptionKey](#ManagedDiskSpecEncryptionSettingsDiskEncryptionKey)***| ***(Optional)*** |
| `enabled` | ***bool***||
| `keyEncryptionKey` | ***[[]ManagedDiskSpecEncryptionSettingsKeyEncryptionKey](#ManagedDiskSpecEncryptionSettingsKeyEncryptionKey)***| ***(Optional)*** |
## ManagedDiskSpecEncryptionSettingsDiskEncryptionKey
##### (Appears on:[ManagedDiskSpecEncryptionSettings](#ManagedDiskSpecEncryptionSettings))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `secretURL` | ***string***||
| `sourceVaultID` | ***string***||
## ManagedDiskSpecEncryptionSettingsKeyEncryptionKey
##### (Appears on:[ManagedDiskSpecEncryptionSettings](#ManagedDiskSpecEncryptionSettings))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `keyURL` | ***string***||
| `sourceVaultID` | ***string***||
## ManagedDiskStatus
##### (Appears on:[ManagedDisk](#ManagedDisk))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ManagedDiskSpec](#ManagedDiskSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
