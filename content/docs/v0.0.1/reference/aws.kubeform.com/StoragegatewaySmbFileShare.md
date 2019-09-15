---
title: StoragegatewaySmbFileShare
menu:
  docs_v0.0.1:
    identifier: storagegatewaysmbfileshare-aws.kubeform.com
    name: StoragegatewaySmbFileShare
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## StoragegatewaySmbFileShare
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `StoragegatewaySmbFileShare` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StoragegatewaySmbFileShareSpec](#StoragegatewaySmbFileShareSpec)***||
| `status` | ***[StoragegatewaySmbFileShareStatus](#StoragegatewaySmbFileShareStatus)***||
## StoragegatewaySmbFileShareSpec
##### (Appears on:[StoragegatewaySmbFileShare](#StoragegatewaySmbFileShare), [StoragegatewaySmbFileShareStatus](#StoragegatewaySmbFileShareStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `authentication` | ***string***| ***(Optional)*** |
| `defaultStorageClass` | ***string***| ***(Optional)*** |
| `fileshareID` | ***string***| ***(Optional)*** |
| `gatewayArn` | ***string***||
| `guessMimeTypeEnabled` | ***bool***| ***(Optional)*** |
| `invalidUserList` | ***[]string***| ***(Optional)*** |
| `kmsEncrypted` | ***bool***| ***(Optional)*** |
| `kmsKeyArn` | ***string***| ***(Optional)*** |
| `locationArn` | ***string***||
| `objectACL` | ***string***| ***(Optional)*** |
| `readOnly` | ***bool***| ***(Optional)*** |
| `requesterPays` | ***bool***| ***(Optional)*** |
| `roleArn` | ***string***||
| `validUserList` | ***[]string***| ***(Optional)*** |
## StoragegatewaySmbFileShareStatus
##### (Appears on:[StoragegatewaySmbFileShare](#StoragegatewaySmbFileShare))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StoragegatewaySmbFileShareSpec](#StoragegatewaySmbFileShareSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
