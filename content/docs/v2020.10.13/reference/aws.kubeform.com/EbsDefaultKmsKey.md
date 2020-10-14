---
title: EbsDefaultKmsKey
menu:
  docs_v2020.10.13:
    identifier: ebsdefaultkmskey-aws.kubeform.com
    name: EbsDefaultKmsKey
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## EbsDefaultKmsKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EbsDefaultKmsKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EbsDefaultKmsKeySpec](#ebsdefaultkmskeyspec)***||
| `status` | ***[EbsDefaultKmsKeyStatus](#ebsdefaultkmskeystatus)***||
## EbsDefaultKmsKeySpec



Appears on:[EbsDefaultKmsKey](#ebsdefaultkmskey), [EbsDefaultKmsKeyStatus](#ebsdefaultkmskeystatus)



| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `keyArn` | ***string***||
## EbsDefaultKmsKeyStatus



Appears on:[EbsDefaultKmsKey](#ebsdefaultkmskey)



| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EbsDefaultKmsKeySpec](#ebsdefaultkmskeyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
