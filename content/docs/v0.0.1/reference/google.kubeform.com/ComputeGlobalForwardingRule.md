---
title: ComputeGlobalForwardingRule
menu:
  docs_v0.0.1:
    identifier: computeglobalforwardingrule-google.kubeform.com
    name: ComputeGlobalForwardingRule
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## ComputeGlobalForwardingRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeGlobalForwardingRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeGlobalForwardingRuleSpec](#ComputeGlobalForwardingRuleSpec)***||
| `status` | ***[ComputeGlobalForwardingRuleStatus](#ComputeGlobalForwardingRuleStatus)***||
## ComputeGlobalForwardingRuleSpec
##### (Appears on:[ComputeGlobalForwardingRule](#ComputeGlobalForwardingRule), [ComputeGlobalForwardingRuleStatus](#ComputeGlobalForwardingRuleStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `ipAddress` | ***string***| ***(Optional)*** |
| `ipProtocol` | ***string***| ***(Optional)*** |
| `ipVersion` | ***string***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `portRange` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `target` | ***string***||
## ComputeGlobalForwardingRuleStatus
##### (Appears on:[ComputeGlobalForwardingRule](#ComputeGlobalForwardingRule))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeGlobalForwardingRuleSpec](#ComputeGlobalForwardingRuleSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
