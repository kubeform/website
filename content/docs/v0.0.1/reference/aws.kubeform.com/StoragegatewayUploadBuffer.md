---
title: StoragegatewayUploadBuffer
menu:
  docs_v0.0.1:
    identifier: storagegatewayuploadbuffer-aws.kubeform.com
    name: StoragegatewayUploadBuffer
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## StoragegatewayUploadBuffer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `StoragegatewayUploadBuffer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StoragegatewayUploadBufferSpec](#StoragegatewayUploadBufferSpec)***||
| `status` | ***[StoragegatewayUploadBufferStatus](#StoragegatewayUploadBufferStatus)***||
## StoragegatewayUploadBufferSpec
##### (Appears on:[StoragegatewayUploadBuffer](#StoragegatewayUploadBuffer), [StoragegatewayUploadBufferStatus](#StoragegatewayUploadBufferStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `diskID` | ***string***||
| `gatewayArn` | ***string***||
## StoragegatewayUploadBufferStatus
##### (Appears on:[StoragegatewayUploadBuffer](#StoragegatewayUploadBuffer))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StoragegatewayUploadBufferSpec](#StoragegatewayUploadBufferSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---