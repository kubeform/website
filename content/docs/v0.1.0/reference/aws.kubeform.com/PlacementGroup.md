---
title: PlacementGroup
menu:
  docs_v0.1.0:
    identifier: placementgroup-aws.kubeform.com
    name: PlacementGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## PlacementGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `PlacementGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PlacementGroupSpec](#placementgroupspec)***||
| `status` | ***[PlacementGroupStatus](#placementgroupstatus)***||
## Phase(`string` alias)

Appears on:[PlacementGroupStatus](#placementgroupstatus)

## PlacementGroupSpec

Appears on:[PlacementGroup](#placementgroup), [PlacementGroupStatus](#placementgroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `strategy` | ***string***||
## PlacementGroupStatus

Appears on:[PlacementGroup](#placementgroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PlacementGroupSpec](#placementgroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
