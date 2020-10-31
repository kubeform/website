---
title: WafXssMatchSet
menu:
  docs_v2020.10.30:
    identifier: wafxssmatchset-aws.kubeform.com
    name: WafXssMatchSet
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## WafXssMatchSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafXssMatchSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafXssMatchSetSpec](#wafxssmatchsetspec)***||
| `status` | ***[WafXssMatchSetStatus](#wafxssmatchsetstatus)***||
## Phase(`string` alias)

Appears on:[WafXssMatchSetStatus](#wafxssmatchsetstatus)

## WafXssMatchSetSpec

Appears on:[WafXssMatchSet](#wafxssmatchset), [WafXssMatchSetStatus](#wafxssmatchsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `xssMatchTuples` | ***[[]WafXssMatchSetSpecXssMatchTuples](#wafxssmatchsetspecxssmatchtuples)***| ***(Optional)*** |
## WafXssMatchSetSpecXssMatchTuples

Appears on:[WafXssMatchSetSpec](#wafxssmatchsetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `fieldToMatch` | ***[[]WafXssMatchSetSpecXssMatchTuplesFieldToMatch](#wafxssmatchsetspecxssmatchtuplesfieldtomatch)***||
| `textTransformation` | ***string***||
## WafXssMatchSetSpecXssMatchTuplesFieldToMatch

Appears on:[WafXssMatchSetSpecXssMatchTuples](#wafxssmatchsetspecxssmatchtuples)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `data` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## WafXssMatchSetStatus

Appears on:[WafXssMatchSet](#wafxssmatchset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafXssMatchSetSpec](#wafxssmatchsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
