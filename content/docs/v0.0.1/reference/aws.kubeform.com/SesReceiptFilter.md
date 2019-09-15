---
title: SesReceiptFilter
menu:
  docs_v0.0.1:
    identifier: sesreceiptfilter-aws.kubeform.com
    name: SesReceiptFilter
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SesReceiptFilter
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SesReceiptFilter` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SesReceiptFilterSpec](#SesReceiptFilterSpec)***||
| `status` | ***[SesReceiptFilterStatus](#SesReceiptFilterStatus)***||
## SesReceiptFilterSpec
##### (Appears on:[SesReceiptFilter](#SesReceiptFilter), [SesReceiptFilterStatus](#SesReceiptFilterStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `cidr` | ***string***||
| `name` | ***string***||
| `policy` | ***string***||
## SesReceiptFilterStatus
##### (Appears on:[SesReceiptFilter](#SesReceiptFilter))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SesReceiptFilterSpec](#SesReceiptFilterSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
