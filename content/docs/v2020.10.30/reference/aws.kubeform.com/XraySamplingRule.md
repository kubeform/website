---
title: XraySamplingRule
menu:
  docs_v2020.10.30:
    identifier: xraysamplingrule-aws.kubeform.com
    name: XraySamplingRule
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## XraySamplingRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `XraySamplingRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[XraySamplingRuleSpec](#xraysamplingrulespec)***||
| `status` | ***[XraySamplingRuleStatus](#xraysamplingrulestatus)***||
## Phase(`string` alias)

Appears on:[XraySamplingRuleStatus](#xraysamplingrulestatus)

## XraySamplingRuleSpec

Appears on:[XraySamplingRule](#xraysamplingrule), [XraySamplingRuleStatus](#xraysamplingrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `attributes` | ***map[string]string***| ***(Optional)*** |
| `fixedRate` | ***float64***||
| `host` | ***string***||
| `httpMethod` | ***string***||
| `priority` | ***int64***||
| `reservoirSize` | ***int64***||
| `resourceArn` | ***string***||
| `ruleName` | ***string***| ***(Optional)*** |
| `serviceName` | ***string***||
| `serviceType` | ***string***||
| `urlPath` | ***string***||
| `version` | ***int64***||
## XraySamplingRuleStatus

Appears on:[XraySamplingRule](#xraysamplingrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[XraySamplingRuleSpec](#xraysamplingrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
