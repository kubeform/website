---
title: LbBackendAddressPool
menu:
  docs_v0.0.1:
    identifier: lbbackendaddresspool-azurerm.kubeform.com
    name: LbBackendAddressPool
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## LbBackendAddressPool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LbBackendAddressPool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbBackendAddressPoolSpec](#LbBackendAddressPoolSpec)***||
| `status` | ***[LbBackendAddressPoolStatus](#LbBackendAddressPoolStatus)***||
## LbBackendAddressPoolSpec
##### (Appears on:[LbBackendAddressPool](#LbBackendAddressPool), [LbBackendAddressPoolStatus](#LbBackendAddressPoolStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backendIPConfigurations` | ***[]string***| ***(Optional)*** |
| `loadBalancingRules` | ***[]string***| ***(Optional)*** |
| `loadbalancerID` | ***string***||
| `location` | ***string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `resourceGroupName` | ***string***||
## LbBackendAddressPoolStatus
##### (Appears on:[LbBackendAddressPool](#LbBackendAddressPool))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbBackendAddressPoolSpec](#LbBackendAddressPoolSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
