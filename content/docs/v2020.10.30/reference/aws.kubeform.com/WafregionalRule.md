---
title: WafregionalRule
menu:
  docs_v2020.10.30:
    identifier: wafregionalrule-aws.kubeform.com
    name: WafregionalRule
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## WafregionalRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalRuleSpec](#wafregionalrulespec)***||
| `status` | ***[WafregionalRuleStatus](#wafregionalrulestatus)***||
## Phase(`string` alias)

Appears on:[WafregionalRuleStatus](#wafregionalrulestatus)

## WafregionalRuleSpec

Appears on:[WafregionalRule](#wafregionalrule), [WafregionalRuleStatus](#wafregionalrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `metricName` | ***string***||
| `name` | ***string***||
| `predicate` | ***[[]WafregionalRuleSpecPredicate](#wafregionalrulespecpredicate)***| ***(Optional)*** |
## WafregionalRuleSpecPredicate

Appears on:[WafregionalRuleSpec](#wafregionalrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dataID` | ***string***||
| `negated` | ***bool***||
| `type` | ***string***||
## WafregionalRuleStatus

Appears on:[WafregionalRule](#wafregionalrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafregionalRuleSpec](#wafregionalrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
