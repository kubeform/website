---
title: WafregionalRateBasedRule
menu:
  docs_v2020.10.13:
    identifier: wafregionalratebasedrule-aws.kubeform.com
    name: WafregionalRateBasedRule
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## WafregionalRateBasedRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafregionalRateBasedRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafregionalRateBasedRuleSpec](#wafregionalratebasedrulespec)***||
| `status` | ***[WafregionalRateBasedRuleStatus](#wafregionalratebasedrulestatus)***||
## Phase(`string` alias)

Appears on:[WafregionalRateBasedRuleStatus](#wafregionalratebasedrulestatus)

## WafregionalRateBasedRuleSpec

Appears on:[WafregionalRateBasedRule](#wafregionalratebasedrule), [WafregionalRateBasedRuleStatus](#wafregionalratebasedrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `metricName` | ***string***||
| `name` | ***string***||
| `predicate` | ***[[]WafregionalRateBasedRuleSpecPredicate](#wafregionalratebasedrulespecpredicate)***| ***(Optional)*** |
| `rateKey` | ***string***||
| `rateLimit` | ***int64***||
## WafregionalRateBasedRuleSpecPredicate

Appears on:[WafregionalRateBasedRuleSpec](#wafregionalratebasedrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dataID` | ***string***||
| `negated` | ***bool***||
| `type` | ***string***||
## WafregionalRateBasedRuleStatus

Appears on:[WafregionalRateBasedRule](#wafregionalratebasedrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafregionalRateBasedRuleSpec](#wafregionalratebasedrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
