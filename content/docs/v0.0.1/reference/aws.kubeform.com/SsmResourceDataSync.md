---
title: SsmResourceDataSync
menu:
  docs_v0.0.1:
    identifier: ssmresourcedatasync-aws.kubeform.com
    name: SsmResourceDataSync
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SsmResourceDataSync
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmResourceDataSync` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmResourceDataSyncSpec](#ssmresourcedatasyncspec)***||
| `status` | ***[SsmResourceDataSyncStatus](#ssmresourcedatasyncstatus)***||
## SsmResourceDataSyncSpec

Appears on:[SsmResourceDataSync](#ssmresourcedatasync), [SsmResourceDataSyncStatus](#ssmresourcedatasyncstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `s3Destination` | ***[[]SsmResourceDataSyncSpecS3Destination](#ssmresourcedatasyncspecs3destination)***||
## SsmResourceDataSyncSpecS3Destination

Appears on:[SsmResourceDataSyncSpec](#ssmresourcedatasyncspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `bucketName` | ***string***||
| `kmsKeyArn` | ***string***| ***(Optional)*** |
| `prefix` | ***string***| ***(Optional)*** |
| `region` | ***string***||
| `syncFormat` | ***string***| ***(Optional)*** |
## SsmResourceDataSyncStatus

Appears on:[SsmResourceDataSync](#ssmresourcedatasync)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmResourceDataSyncSpec](#ssmresourcedatasyncspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
