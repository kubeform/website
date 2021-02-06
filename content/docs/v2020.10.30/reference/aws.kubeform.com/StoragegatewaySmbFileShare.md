---
title: StoragegatewaySmbFileShare
menu:
  docs_v2020.10.30:
    identifier: storagegatewaysmbfileshare-aws.kubeform.com
    name: StoragegatewaySmbFileShare
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## StoragegatewaySmbFileShare
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `StoragegatewaySmbFileShare` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StoragegatewaySmbFileShareSpec](#storagegatewaysmbfilesharespec)***||
| `status` | ***[StoragegatewaySmbFileShareStatus](#storagegatewaysmbfilesharestatus)***||
## Phase(`string` alias)

Appears on:[StoragegatewaySmbFileShareStatus](#storagegatewaysmbfilesharestatus)

## StoragegatewaySmbFileShareSpec

Appears on:[StoragegatewaySmbFileShare](#storagegatewaysmbfileshare), [StoragegatewaySmbFileShareStatus](#storagegatewaysmbfilesharestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
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

Appears on:[StoragegatewaySmbFileShare](#storagegatewaysmbfileshare)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StoragegatewaySmbFileShareSpec](#storagegatewaysmbfilesharespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---