---
title: SesActiveReceiptRuleSet
menu:
  docs_v2020.10.13:
    identifier: sesactivereceiptruleset-aws.kubeform.com
    name: SesActiveReceiptRuleSet
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## SesActiveReceiptRuleSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SesActiveReceiptRuleSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SesActiveReceiptRuleSetSpec](#sesactivereceiptrulesetspec)***||
| `status` | ***[SesActiveReceiptRuleSetStatus](#sesactivereceiptrulesetstatus)***||
## Phase(`string` alias)

Appears on:[SesActiveReceiptRuleSetStatus](#sesactivereceiptrulesetstatus)

## SesActiveReceiptRuleSetSpec

Appears on:[SesActiveReceiptRuleSet](#sesactivereceiptruleset), [SesActiveReceiptRuleSetStatus](#sesactivereceiptrulesetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ruleSetName` | ***string***||
## SesActiveReceiptRuleSetStatus

Appears on:[SesActiveReceiptRuleSet](#sesactivereceiptruleset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SesActiveReceiptRuleSetSpec](#sesactivereceiptrulesetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
