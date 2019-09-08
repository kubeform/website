---
title: SsmPatchGroup
menu:
  docs_v0.0.1:
    identifier: ssmpatchgroup-aws.kubeform.com
    name: SsmPatchGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## SsmPatchGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmPatchGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmPatchGroupSpec](#SsmPatchGroupSpec)***||
| `status` | ***[SsmPatchGroupStatus](#SsmPatchGroupStatus)***||
## SsmPatchGroupSpec
##### (Appears on:[SsmPatchGroup](#SsmPatchGroup), [SsmPatchGroupStatus](#SsmPatchGroupStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `baselineID` | ***string***||
| `patchGroup` | ***string***||
## SsmPatchGroupStatus
##### (Appears on:[SsmPatchGroup](#SsmPatchGroup))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmPatchGroupSpec](#SsmPatchGroupSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---