---
title: WafRateBasedRule
menu:
  docs_v2020.10.30:
    identifier: wafratebasedrule-aws.kubeform.com
    name: WafRateBasedRule
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## WafRateBasedRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafRateBasedRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafRateBasedRuleSpec](#wafratebasedrulespec)***||
| `status` | ***[WafRateBasedRuleStatus](#wafratebasedrulestatus)***||
## Phase(`string` alias)

Appears on:[WafRateBasedRuleStatus](#wafratebasedrulestatus)

## WafRateBasedRuleSpec

Appears on:[WafRateBasedRule](#wafratebasedrule), [WafRateBasedRuleStatus](#wafratebasedrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `metricName` | ***string***||
| `name` | ***string***||
| `predicates` | ***[[]WafRateBasedRuleSpecPredicates](#wafratebasedrulespecpredicates)***| ***(Optional)*** |
| `rateKey` | ***string***||
| `rateLimit` | ***int64***||
## WafRateBasedRuleSpecPredicates

Appears on:[WafRateBasedRuleSpec](#wafratebasedrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dataID` | ***string***||
| `negated` | ***bool***||
| `type` | ***string***||
## WafRateBasedRuleStatus

Appears on:[WafRateBasedRule](#wafratebasedrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafRateBasedRuleSpec](#wafratebasedrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
