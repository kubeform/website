---
title: WafregionalXssMatchSet
menu:
  docs_v0.0.1:
    identifier: wafregionalxssmatchset-aws.kubeform.com
    name: WafregionalXssMatchSet
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## WafregionalXssMatchSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalXssMatchSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalXssMatchSetSpec](#WafregionalXssMatchSetSpec)***||
| `status` | ***[WafregionalXssMatchSetStatus](#WafregionalXssMatchSetStatus)***||
## WafregionalXssMatchSetSpec
##### (Appears on:[WafregionalXssMatchSet](#WafregionalXssMatchSet), [WafregionalXssMatchSetStatus](#WafregionalXssMatchSetStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `xssMatchTuple` | ***[[]WafregionalXssMatchSetSpecXssMatchTuple](#WafregionalXssMatchSetSpecXssMatchTuple)***| ***(Optional)*** |
## WafregionalXssMatchSetSpecXssMatchTuple
##### (Appears on:[WafregionalXssMatchSetSpec](#WafregionalXssMatchSetSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `fieldToMatch` | ***[[]WafregionalXssMatchSetSpecXssMatchTupleFieldToMatch](#WafregionalXssMatchSetSpecXssMatchTupleFieldToMatch)***||
| `textTransformation` | ***string***||
## WafregionalXssMatchSetSpecXssMatchTupleFieldToMatch
##### (Appears on:[WafregionalXssMatchSetSpecXssMatchTuple](#WafregionalXssMatchSetSpecXssMatchTuple))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `data` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## WafregionalXssMatchSetStatus
##### (Appears on:[WafregionalXssMatchSet](#WafregionalXssMatchSet))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafregionalXssMatchSetSpec](#WafregionalXssMatchSetSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
