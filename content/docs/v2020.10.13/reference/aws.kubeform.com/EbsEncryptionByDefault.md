---
title: EbsEncryptionByDefault
menu:
  docs_v2020.10.13:
    identifier: ebsencryptionbydefault-aws.kubeform.com
    name: EbsEncryptionByDefault
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## EbsEncryptionByDefault
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EbsEncryptionByDefault` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EbsEncryptionByDefaultSpec](#ebsencryptionbydefaultspec)***||
| `status` | ***[EbsEncryptionByDefaultStatus](#ebsencryptionbydefaultstatus)***||
## EbsEncryptionByDefaultSpec



Appears on:[EbsEncryptionByDefault](#ebsencryptionbydefault), [EbsEncryptionByDefaultStatus](#ebsencryptionbydefaultstatus)



| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
## EbsEncryptionByDefaultStatus



Appears on:[EbsEncryptionByDefault](#ebsencryptionbydefault)



| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EbsEncryptionByDefaultSpec](#ebsencryptionbydefaultspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
