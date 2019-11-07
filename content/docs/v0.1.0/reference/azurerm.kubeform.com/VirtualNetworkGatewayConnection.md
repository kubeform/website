---
title: VirtualNetworkGatewayConnection
menu:
  docs_v0.1.0:
    identifier: virtualnetworkgatewayconnection-azurerm.kubeform.com
    name: VirtualNetworkGatewayConnection
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## VirtualNetworkGatewayConnection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `VirtualNetworkGatewayConnection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VirtualNetworkGatewayConnectionSpec](#virtualnetworkgatewayconnectionspec)***||
| `status` | ***[VirtualNetworkGatewayConnectionStatus](#virtualnetworkgatewayconnectionstatus)***||
## Phase(`string` alias)

Appears on:[VirtualNetworkGatewayConnectionStatus](#virtualnetworkgatewayconnectionstatus)

## VirtualNetworkGatewayConnectionSpec

Appears on:[VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection), [VirtualNetworkGatewayConnectionStatus](#virtualnetworkgatewayconnectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `enableBGP` | ***bool***| ***(Optional)*** |
| `expressRouteCircuitID` | ***string***| ***(Optional)*** |
| `expressRouteGatewayBypass` | ***bool***| ***(Optional)*** |
| `ipsecPolicy` | ***[[]VirtualNetworkGatewayConnectionSpecIpsecPolicy](#virtualnetworkgatewayconnectionspecipsecpolicy)***| ***(Optional)*** |
| `localNetworkGatewayID` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `peerVirtualNetworkGatewayID` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `routingWeight` | ***int***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `type` | ***string***||
| `usePolicyBasedTrafficSelectors` | ***bool***| ***(Optional)*** |
| `virtualNetworkGatewayID` | ***string***||
## VirtualNetworkGatewayConnectionSpecIpsecPolicy

Appears on:[VirtualNetworkGatewayConnectionSpec](#virtualnetworkgatewayconnectionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dhGroup` | ***string***||
| `ikeEncryption` | ***string***||
| `ikeIntegrity` | ***string***||
| `ipsecEncryption` | ***string***||
| `ipsecIntegrity` | ***string***||
| `pfsGroup` | ***string***||
| `saDatasize` | ***int***| ***(Optional)*** |
| `saLifetime` | ***int***| ***(Optional)*** |
## VirtualNetworkGatewayConnectionStatus

Appears on:[VirtualNetworkGatewayConnection](#virtualnetworkgatewayconnection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VirtualNetworkGatewayConnectionSpec](#virtualnetworkgatewayconnectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `authorization_key` | ***string*** ||
| `shared_key` | ***string*** ||
