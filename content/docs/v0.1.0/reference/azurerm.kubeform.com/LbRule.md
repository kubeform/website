---
title: LbRule
menu:
  docs_v0.1.0:
    identifier: lbrule-azurerm.kubeform.com
    name: LbRule
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## LbRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LbRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbRuleSpec](#lbrulespec)***||
| `status` | ***[LbRuleStatus](#lbrulestatus)***||
## LbRuleSpec

Appears on:[LbRule](#lbrule), [LbRuleStatus](#lbrulestatus)

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

Appears on:[LbRule](#lbrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbRuleSpec](#lbrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LbRuleStatus](#lbrulestatus)

---
