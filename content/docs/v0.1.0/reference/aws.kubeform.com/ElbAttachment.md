---
title: ElbAttachment
menu:
  docs_v0.1.0:
    identifier: elbattachment-aws.kubeform.com
    name: ElbAttachment
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ElbAttachment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElbAttachment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElbAttachmentSpec](#elbattachmentspec)***||
| `status` | ***[ElbAttachmentStatus](#elbattachmentstatus)***||
## ElbAttachmentSpec

Appears on:[ElbAttachment](#elbattachment), [ElbAttachmentStatus](#elbattachmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `elb` | ***string***||
| `instance` | ***string***||
## ElbAttachmentStatus

Appears on:[ElbAttachment](#elbattachment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElbAttachmentSpec](#elbattachmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElbAttachmentStatus](#elbattachmentstatus)

---
