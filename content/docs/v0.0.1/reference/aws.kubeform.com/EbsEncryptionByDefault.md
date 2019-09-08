---
title: EbsEncryptionByDefault
menu:
  docs_v0.0.1:
    identifier: ebsencryptionbydefault-aws.kubeform.com
    name: EbsEncryptionByDefault
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## EbsEncryptionByDefault
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EbsEncryptionByDefault` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EbsEncryptionByDefaultSpec](#EbsEncryptionByDefaultSpec)***||
| `status` | ***[EbsEncryptionByDefaultStatus](#EbsEncryptionByDefaultStatus)***||
## EbsEncryptionByDefaultSpec
##### (Appears on:[EbsEncryptionByDefault](#EbsEncryptionByDefault), [EbsEncryptionByDefaultStatus](#EbsEncryptionByDefaultStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
## EbsEncryptionByDefaultStatus
##### (Appears on:[EbsEncryptionByDefault](#EbsEncryptionByDefault))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EbsEncryptionByDefaultSpec](#EbsEncryptionByDefaultSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---