---
title: LbRule
menu:
  docs_v0.0.1:
    identifier: lbrule-azurerm.kubeform.com
    name: LbRule
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## LbRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LbRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbRuleSpec](#LbRuleSpec)***||
| `status` | ***[LbRuleStatus](#LbRuleStatus)***||
## LbRuleSpec
##### (Appears on:[LbRule](#LbRule), [LbRuleStatus](#LbRuleStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backendAddressPoolID` | ***string***| ***(Optional)*** |
| `backendPort` | ***int***||
| `disableOutboundSnat` | ***bool***| ***(Optional)*** |
| `enableFloatingIP` | ***bool***| ***(Optional)*** |
| `frontendIPConfigurationID` | ***string***| ***(Optional)*** |
| `frontendIPConfigurationName` | ***string***||
| `frontendPort` | ***int***||
| `idleTimeoutInMinutes` | ***int***| ***(Optional)*** |
| `loadDistribution` | ***string***| ***(Optional)*** |
| `loadbalancerID` | ***string***||
| `location` | ***string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `probeID` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
| `resourceGroupName` | ***string***||
## LbRuleStatus
##### (Appears on:[LbRule](#LbRule))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbRuleSpec](#LbRuleSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
