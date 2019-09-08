---
title: EbsDefaultKmsKey
menu:
  docs_v0.0.1:
    identifier: ebsdefaultkmskey-aws.kubeform.com
    name: EbsDefaultKmsKey
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## EbsDefaultKmsKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EbsDefaultKmsKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EbsDefaultKmsKeySpec](#EbsDefaultKmsKeySpec)***||
| `status` | ***[EbsDefaultKmsKeyStatus](#EbsDefaultKmsKeyStatus)***||
## EbsDefaultKmsKeySpec
##### (Appears on:[EbsDefaultKmsKey](#EbsDefaultKmsKey), [EbsDefaultKmsKeyStatus](#EbsDefaultKmsKeyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `keyArn` | ***string***||
## EbsDefaultKmsKeyStatus
##### (Appears on:[EbsDefaultKmsKey](#EbsDefaultKmsKey))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EbsDefaultKmsKeySpec](#EbsDefaultKmsKeySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
