---
title: ComputeForwardingRule
menu:
  docs_v2020.10.13:
    identifier: computeforwardingrule-google.kubeform.com
    name: ComputeForwardingRule
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## ComputeForwardingRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeForwardingRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeForwardingRuleSpec](#computeforwardingrulespec)***||
| `status` | ***[ComputeForwardingRuleStatus](#computeforwardingrulestatus)***||
## ComputeForwardingRuleSpec

Appears on:[ComputeForwardingRule](#computeforwardingrule), [ComputeForwardingRuleStatus](#computeforwardingrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backendService` | ***string***| ***(Optional)*** |
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `ipAddress` | ***string***| ***(Optional)*** |
| `ipProtocol` | ***string***| ***(Optional)*** |
| `ipVersion` | ***string***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** Deprecated|
| `loadBalancingScheme` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `network` | ***string***| ***(Optional)*** |
| `networkTier` | ***string***| ***(Optional)*** |
| `portRange` | ***string***| ***(Optional)*** |
| `ports` | ***[]string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `serviceLabel` | ***string***| ***(Optional)*** Deprecated|
| `serviceName` | ***string***| ***(Optional)*** Deprecated|
| `subnetwork` | ***string***| ***(Optional)*** |
| `target` | ***string***| ***(Optional)*** |
## ComputeForwardingRuleStatus

Appears on:[ComputeForwardingRule](#computeforwardingrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeForwardingRuleSpec](#computeforwardingrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeForwardingRuleStatus](#computeforwardingrulestatus)

---
