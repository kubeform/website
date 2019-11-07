---
title: IamUserPolicyAttachment
menu:
  docs_v0.1.0:
    identifier: iamuserpolicyattachment-aws.kubeform.com
    name: IamUserPolicyAttachment
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## IamUserPolicyAttachment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IamUserPolicyAttachment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IamUserPolicyAttachmentSpec](#iamuserpolicyattachmentspec)***||
| `status` | ***[IamUserPolicyAttachmentStatus](#iamuserpolicyattachmentstatus)***||
## IamUserPolicyAttachmentSpec

Appears on:[IamUserPolicyAttachment](#iamuserpolicyattachment), [IamUserPolicyAttachmentStatus](#iamuserpolicyattachmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `policyArn` | ***string***||
| `user` | ***string***||
## IamUserPolicyAttachmentStatus

Appears on:[IamUserPolicyAttachment](#iamuserpolicyattachment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IamUserPolicyAttachmentSpec](#iamuserpolicyattachmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IamUserPolicyAttachmentStatus](#iamuserpolicyattachmentstatus)

---
