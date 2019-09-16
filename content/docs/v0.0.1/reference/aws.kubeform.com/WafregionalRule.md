---
title: WafregionalRule
menu:
  docs_v0.0.1:
    identifier: wafregionalrule-aws.kubeform.com
    name: WafregionalRule
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## WafregionalRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalRuleSpec](#wafregionalrulespec)***||
| `status` | ***[WafregionalRuleStatus](#wafregionalrulestatus)***||
## WafregionalRuleSpec

Appears on:[WafregionalRule](#wafregionalrule), [WafregionalRuleStatus](#wafregionalrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
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
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
