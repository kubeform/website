---
title: RamResourceAssociation
menu:
  docs_v0.0.1:
    identifier: ramresourceassociation-aws.kubeform.com
    name: RamResourceAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## RamResourceAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RamResourceAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RamResourceAssociationSpec](#ramresourceassociationspec)***||
| `status` | ***[RamResourceAssociationStatus](#ramresourceassociationstatus)***||
## RamResourceAssociationSpec

Appears on:[RamResourceAssociation](#ramresourceassociation), [RamResourceAssociationStatus](#ramresourceassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `resourceArn` | ***string***||
| `resourceShareArn` | ***string***||
## RamResourceAssociationStatus

Appears on:[RamResourceAssociation](#ramresourceassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RamResourceAssociationSpec](#ramresourceassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
