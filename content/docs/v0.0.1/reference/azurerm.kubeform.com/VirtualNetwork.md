---
title: VirtualNetwork
menu:
  docs_v0.0.1:
    identifier: virtualnetwork-azurerm.kubeform.com
    name: VirtualNetwork
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## VirtualNetwork
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `VirtualNetwork` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VirtualNetworkSpec](#virtualnetworkspec)***||
| `status` | ***[VirtualNetworkStatus](#virtualnetworkstatus)***||
## VirtualNetworkSpec

Appears on:[VirtualNetwork](#virtualnetwork), [VirtualNetworkStatus](#virtualnetworkstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `addressSpace` | ***[]string***||
| `ddosProtectionPlan` | ***[[]VirtualNetworkSpecDdosProtectionPlan](#virtualnetworkspecddosprotectionplan)***| ***(Optional)*** |
| `dnsServers` | ***[]string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `subnet` | ***[[]VirtualNetworkSpecSubnet](#virtualnetworkspecsubnet)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## VirtualNetworkSpecDdosProtectionPlan

Appears on:[VirtualNetworkSpec](#virtualnetworkspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enable` | ***bool***||
| `ID` | ***string***||
## VirtualNetworkSpecSubnet

Appears on:[VirtualNetworkSpec](#virtualnetworkspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `addressPrefix` | ***string***||
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `securityGroup` | ***string***| ***(Optional)*** |
## VirtualNetworkStatus

Appears on:[VirtualNetwork](#virtualnetwork)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VirtualNetworkSpec](#virtualnetworkspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
