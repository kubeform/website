---
title: WafregionalSizeConstraintSet
menu:
  docs_v0.0.1:
    identifier: wafregionalsizeconstraintset-aws.kubeform.com
    name: WafregionalSizeConstraintSet
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## WafregionalSizeConstraintSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalSizeConstraintSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalSizeConstraintSetSpec](#WafregionalSizeConstraintSetSpec)***||
| `status` | ***[WafregionalSizeConstraintSetStatus](#WafregionalSizeConstraintSetStatus)***||
## WafregionalSizeConstraintSetSpec
##### (Appears on:[WafregionalSizeConstraintSet](#WafregionalSizeConstraintSet), [WafregionalSizeConstraintSetStatus](#WafregionalSizeConstraintSetStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `sizeConstraints` | ***[[]WafregionalSizeConstraintSetSpecSizeConstraints](#WafregionalSizeConstraintSetSpecSizeConstraints)***| ***(Optional)*** |
## WafregionalSizeConstraintSetSpecSizeConstraints
##### (Appears on:[WafregionalSizeConstraintSetSpec](#WafregionalSizeConstraintSetSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `comparisonOperator` | ***string***||
| `fieldToMatch` | ***[[]WafregionalSizeConstraintSetSpecSizeConstraintsFieldToMatch](#WafregionalSizeConstraintSetSpecSizeConstraintsFieldToMatch)***||
| `size` | ***int***||
| `textTransformation` | ***string***||
## WafregionalSizeConstraintSetSpecSizeConstraintsFieldToMatch
##### (Appears on:[WafregionalSizeConstraintSetSpecSizeConstraints](#WafregionalSizeConstraintSetSpecSizeConstraints))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `data` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## WafregionalSizeConstraintSetStatus
##### (Appears on:[WafregionalSizeConstraintSet](#WafregionalSizeConstraintSet))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafregionalSizeConstraintSetSpec](#WafregionalSizeConstraintSetSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
