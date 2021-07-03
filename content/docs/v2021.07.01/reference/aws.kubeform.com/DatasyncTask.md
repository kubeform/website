---
title: DatasyncTask
menu:
  docs_v2021.07.01:
    identifier: datasynctask-aws.kubeform.com
    name: DatasyncTask
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

## DatasyncTask
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DatasyncTask` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DatasyncTaskSpec](#datasynctaskspec)***||
| `status` | ***[DatasyncTaskStatus](#datasynctaskstatus)***||
## DatasyncTaskSpec

Appears on:[DatasyncTask](#datasynctask), [DatasyncTaskStatus](#datasynctaskstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `cloudwatchLogGroupArn` | ***string***| ***(Optional)*** |
| `destinationLocationArn` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `options` | ***[[]DatasyncTaskSpecOptions](#datasynctaskspecoptions)***| ***(Optional)*** |
| `sourceLocationArn` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## DatasyncTaskSpecOptions

Appears on:[DatasyncTaskSpec](#datasynctaskspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `atime` | ***string***| ***(Optional)*** |
| `bytesPerSecond` | ***int64***| ***(Optional)*** |
| `gid` | ***string***| ***(Optional)*** |
| `mtime` | ***string***| ***(Optional)*** |
| `posixPermissions` | ***string***| ***(Optional)*** |
| `preserveDeletedFiles` | ***string***| ***(Optional)*** |
| `preserveDevices` | ***string***| ***(Optional)*** |
| `uid` | ***string***| ***(Optional)*** |
| `verifyMode` | ***string***| ***(Optional)*** |
## DatasyncTaskStatus

Appears on:[DatasyncTask](#datasynctask)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DatasyncTaskSpec](#datasynctaskspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DatasyncTaskStatus](#datasynctaskstatus)

---
