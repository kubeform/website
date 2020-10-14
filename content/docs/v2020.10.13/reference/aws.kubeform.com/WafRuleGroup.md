---
title: WafRuleGroup
menu:
  docs_v2020.10.13:
    identifier: wafrulegroup-aws.kubeform.com
    name: WafRuleGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## WafRuleGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafRuleGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafRuleGroupSpec](#wafrulegroupspec)***||
| `status` | ***[WafRuleGroupStatus](#wafrulegroupstatus)***||
## Phase(`string` alias)

Appears on:[WafRuleGroupStatus](#wafrulegroupstatus)

## WafRuleGroupSpec

Appears on:[WafRuleGroup](#wafrulegroup), [WafRuleGroupStatus](#wafrulegroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `activatedRule` | ***[[]WafRuleGroupSpecActivatedRule](#wafrulegroupspecactivatedrule)***| ***(Optional)*** |
| `metricName` | ***string***||
| `name` | ***string***||
## WafRuleGroupSpecActivatedRule

Appears on:[WafRuleGroupSpec](#wafrulegroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***[[]WafRuleGroupSpecActivatedRuleAction](#wafrulegroupspecactivatedruleaction)***||
| `priority` | ***int64***||
| `ruleID` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## WafRuleGroupSpecActivatedRuleAction

Appears on:[WafRuleGroupSpecActivatedRule](#wafrulegroupspecactivatedrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
## WafRuleGroupStatus

Appears on:[WafRuleGroup](#wafrulegroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafRuleGroupSpec](#wafrulegroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
