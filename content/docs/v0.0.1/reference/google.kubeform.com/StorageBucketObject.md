---
title: StorageBucketObject
menu:
  docs_v0.0.1:
    identifier: storagebucketobject-google.kubeform.com
    name: StorageBucketObject
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## StorageBucketObject
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageBucketObject` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageBucketObjectSpec](#StorageBucketObjectSpec)***||
| `status` | ***[StorageBucketObjectStatus](#StorageBucketObjectStatus)***||
## StorageBucketObjectSpec
##### (Appears on:[StorageBucketObject](#StorageBucketObject), [StorageBucketObjectStatus](#StorageBucketObjectStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucket` | ***string***||
| `cacheControl` | ***string***| ***(Optional)*** |
| `content` | ***string***| ***(Optional)*** |
| `contentDisposition` | ***string***| ***(Optional)*** |
| `contentEncoding` | ***string***| ***(Optional)*** |
| `contentLanguage` | ***string***| ***(Optional)*** |
| `contentType` | ***string***| ***(Optional)*** |
| `crc32c` | ***string***| ***(Optional)*** |
| `detectMd5hash` | ***string***| ***(Optional)*** |
| `md5hash` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `source` | ***string***| ***(Optional)*** |
| `storageClass` | ***string***| ***(Optional)*** |
## StorageBucketObjectStatus
##### (Appears on:[StorageBucketObject](#StorageBucketObject))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageBucketObjectSpec](#StorageBucketObjectSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
