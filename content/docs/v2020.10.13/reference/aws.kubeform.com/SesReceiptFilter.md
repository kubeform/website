---
title: SesReceiptFilter
menu:
  docs_v2020.10.13:
    identifier: sesreceiptfilter-aws.kubeform.com
    name: SesReceiptFilter
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## SesReceiptFilter
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SesReceiptFilter` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SesReceiptFilterSpec](#sesreceiptfilterspec)***||
| `status` | ***[SesReceiptFilterStatus](#sesreceiptfilterstatus)***||
## Phase(`string` alias)

Appears on:[SesReceiptFilterStatus](#sesreceiptfilterstatus)

## SesReceiptFilterSpec

Appears on:[SesReceiptFilter](#sesreceiptfilter), [SesReceiptFilterStatus](#sesreceiptfilterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `cidr` | ***string***||
| `name` | ***string***||
| `policy` | ***string***||
## SesReceiptFilterStatus

Appears on:[SesReceiptFilter](#sesreceiptfilter)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SesReceiptFilterSpec](#sesreceiptfilterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
