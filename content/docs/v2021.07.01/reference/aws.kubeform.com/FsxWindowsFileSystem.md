---
title: FsxWindowsFileSystem
menu:
  docs_v2021.07.01:
    identifier: fsxwindowsfilesystem-aws.kubeform.com
    name: FsxWindowsFileSystem
    parent: aws.kubeform.com-reference
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

## FsxWindowsFileSystem
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `FsxWindowsFileSystem` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FsxWindowsFileSystemSpec](#fsxwindowsfilesystemspec)***||
| `status` | ***[FsxWindowsFileSystemStatus](#fsxwindowsfilesystemstatus)***||
## FsxWindowsFileSystemSpec

Appears on:[FsxWindowsFileSystem](#fsxwindowsfilesystem), [FsxWindowsFileSystemStatus](#fsxwindowsfilesystemstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `activeDirectoryID` | ***string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `automaticBackupRetentionDays` | ***int64***| ***(Optional)*** |
| `copyTagsToBackups` | ***bool***| ***(Optional)*** |
| `dailyAutomaticBackupStartTime` | ***string***| ***(Optional)*** |
| `dnsName` | ***string***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `networkInterfaceIDS` | ***[]string***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `securityGroupIDS` | ***[]string***| ***(Optional)*** |
| `selfManagedActiveDirectory` | ***[[]FsxWindowsFileSystemSpecSelfManagedActiveDirectory](#fsxwindowsfilesystemspecselfmanagedactivedirectory)***| ***(Optional)*** |
| `skipFinalBackup` | ***bool***| ***(Optional)*** |
| `storageCapacity` | ***int64***||
| `subnetIDS` | ***[]string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `throughputCapacity` | ***int64***||
| `vpcID` | ***string***| ***(Optional)*** |
| `weeklyMaintenanceStartTime` | ***string***| ***(Optional)*** |
## FsxWindowsFileSystemSpecSelfManagedActiveDirectory

Appears on:[FsxWindowsFileSystemSpec](#fsxwindowsfilesystemspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dnsIPS` | ***[]string***||
| `domainName` | ***string***||
| `fileSystemAdministratorsGroup` | ***string***| ***(Optional)*** |
| `organizationalUnitDistinguishedName` | ***string***| ***(Optional)*** |
| `username` | ***string***||
## FsxWindowsFileSystemStatus

Appears on:[FsxWindowsFileSystem](#fsxwindowsfilesystem)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FsxWindowsFileSystemSpec](#fsxwindowsfilesystemspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FsxWindowsFileSystemStatus](#fsxwindowsfilesystemstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `self_managed_active_directory.<index>.password` | ***string*** ||
