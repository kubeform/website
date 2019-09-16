---
title: WafregionalGeoMatchSet
menu:
  docs_v0.0.1:
    identifier: wafregionalgeomatchset-aws.kubeform.com
    name: WafregionalGeoMatchSet
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## WafregionalGeoMatchSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalGeoMatchSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalGeoMatchSetSpec](#wafregionalgeomatchsetspec)***||
| `status` | ***[WafregionalGeoMatchSetStatus](#wafregionalgeomatchsetstatus)***||
## WafregionalGeoMatchSetSpec

Appears on:[WafregionalGeoMatchSet](#wafregionalgeomatchset), [WafregionalGeoMatchSetStatus](#wafregionalgeomatchsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `geoMatchConstraint` | ***[[]WafregionalGeoMatchSetSpecGeoMatchConstraint](#wafregionalgeomatchsetspecgeomatchconstraint)***| ***(Optional)*** |
| `name` | ***string***||
## WafregionalGeoMatchSetSpecGeoMatchConstraint

Appears on:[WafregionalGeoMatchSetSpec](#wafregionalgeomatchsetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
| `value` | ***string***||
## WafregionalGeoMatchSetStatus

Appears on:[WafregionalGeoMatchSet](#wafregionalgeomatchset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafregionalGeoMatchSetSpec](#wafregionalgeomatchsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
