---
title: RamResourceAssociation
menu:
  docs_v2020.10.30:
    identifier: ramresourceassociation-aws.kubeform.com
    name: RamResourceAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## RamResourceAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RamResourceAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RamResourceAssociationSpec](#ramresourceassociationspec)***||
| `status` | ***[RamResourceAssociationStatus](#ramresourceassociationstatus)***||
## Phase(`string` alias)

Appears on:[RamResourceAssociationStatus](#ramresourceassociationstatus)

## RamResourceAssociationSpec

Appears on:[RamResourceAssociation](#ramresourceassociation), [RamResourceAssociationStatus](#ramresourceassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `resourceArn` | ***string***||
| `resourceShareArn` | ***string***||
## RamResourceAssociationStatus

Appears on:[RamResourceAssociation](#ramresourceassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RamResourceAssociationSpec](#ramresourceassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
