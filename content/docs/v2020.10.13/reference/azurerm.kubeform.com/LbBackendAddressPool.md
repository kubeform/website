---
title: LbBackendAddressPool
menu:
  docs_v2020.10.13:
    identifier: lbbackendaddresspool-azurerm.kubeform.com
    name: LbBackendAddressPool
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## LbBackendAddressPool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LbBackendAddressPool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbBackendAddressPoolSpec](#lbbackendaddresspoolspec)***||
| `status` | ***[LbBackendAddressPoolStatus](#lbbackendaddresspoolstatus)***||
## LbBackendAddressPoolSpec

Appears on:[LbBackendAddressPool](#lbbackendaddresspool), [LbBackendAddressPoolStatus](#lbbackendaddresspoolstatus)

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

Appears on:[LbBackendAddressPool](#lbbackendaddresspool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbBackendAddressPoolSpec](#lbbackendaddresspoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LbBackendAddressPoolStatus](#lbbackendaddresspoolstatus)

---
