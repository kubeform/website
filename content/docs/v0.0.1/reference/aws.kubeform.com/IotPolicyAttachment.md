---
title: IotPolicyAttachment
menu:
  docs_v0.0.1:
    identifier: iotpolicyattachment-aws.kubeform.com
    name: IotPolicyAttachment
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## IotPolicyAttachment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IotPolicyAttachment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IotPolicyAttachmentSpec](#iotpolicyattachmentspec)***||
| `status` | ***[IotPolicyAttachmentStatus](#iotpolicyattachmentstatus)***||
## IotPolicyAttachmentSpec

Appears on:[IotPolicyAttachment](#iotpolicyattachment), [IotPolicyAttachmentStatus](#iotpolicyattachmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `policy` | ***string***||
| `target` | ***string***||
## IotPolicyAttachmentStatus

Appears on:[IotPolicyAttachment](#iotpolicyattachment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IotPolicyAttachmentSpec](#iotpolicyattachmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
