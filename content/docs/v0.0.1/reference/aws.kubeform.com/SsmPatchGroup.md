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
info:
  version: v0.0.1
---

## SsmPatchGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmPatchGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmPatchGroupSpec](#ssmpatchgroupspec)***||
| `status` | ***[SsmPatchGroupStatus](#ssmpatchgroupstatus)***||
## SsmPatchGroupSpec

Appears on:[SsmPatchGroup](#ssmpatchgroup), [SsmPatchGroupStatus](#ssmpatchgroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `baselineID` | ***string***||
| `patchGroup` | ***string***||
## SsmPatchGroupStatus

Appears on:[SsmPatchGroup](#ssmpatchgroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmPatchGroupSpec](#ssmpatchgroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
