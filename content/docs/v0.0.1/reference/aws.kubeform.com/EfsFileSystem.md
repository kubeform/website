---
title: EfsFileSystem
menu:
  docs_v0.0.1:
    identifier: efsfilesystem-aws.kubeform.com
    name: EfsFileSystem
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## EfsFileSystem
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EfsFileSystem` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EfsFileSystemSpec](#efsfilesystemspec)***||
| `status` | ***[EfsFileSystemStatus](#efsfilesystemstatus)***||
## EfsFileSystemSpec

Appears on:[EfsFileSystem](#efsfilesystem), [EfsFileSystemStatus](#efsfilesystemstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `creationToken` | ***string***| ***(Optional)*** |
| `dnsName` | ***string***| ***(Optional)*** |
| `encrypted` | ***bool***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `performanceMode` | ***string***| ***(Optional)*** |
| `provisionedThroughputInMibps` | ***encoding/json.Number***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `throughputMode` | ***string***| ***(Optional)*** |
## EfsFileSystemStatus

Appears on:[EfsFileSystem](#efsfilesystem)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EfsFileSystemSpec](#efsfilesystemspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
