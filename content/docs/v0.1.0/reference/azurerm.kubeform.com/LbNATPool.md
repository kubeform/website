---
title: LbNATPool
menu:
  docs_v0.1.0:
    identifier: lbnatpool-azurerm.kubeform.com
    name: LbNATPool
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## LbNATPool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LbNATPool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbNATPoolSpec](#lbnatpoolspec)***||
| `status` | ***[LbNATPoolStatus](#lbnatpoolstatus)***||
## LbNATPoolSpec

Appears on:[LbNATPool](#lbnatpool), [LbNATPoolStatus](#lbnatpoolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backendPort` | ***int***||
| `frontendIPConfigurationID` | ***string***| ***(Optional)*** |
| `frontendIPConfigurationName` | ***string***||
| `frontendPortEnd` | ***int***||
| `frontendPortStart` | ***int***||
| `loadbalancerID` | ***string***||
| `location` | ***string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `protocol` | ***string***||
| `resourceGroupName` | ***string***||
## LbNATPoolStatus

Appears on:[LbNATPool](#lbnatpool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbNATPoolSpec](#lbnatpoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LbNATPoolStatus](#lbnatpoolstatus)

---
