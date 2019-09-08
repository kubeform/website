---
title: LocalNetworkGateway
menu:
  docs_v0.0.1:
    identifier: localnetworkgateway-azurerm.kubeform.com
    name: LocalNetworkGateway
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## LocalNetworkGateway
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LocalNetworkGateway` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LocalNetworkGatewaySpec](#LocalNetworkGatewaySpec)***||
| `status` | ***[LocalNetworkGatewayStatus](#LocalNetworkGatewayStatus)***||
## LocalNetworkGatewaySpec
##### (Appears on:[LocalNetworkGateway](#LocalNetworkGateway), [LocalNetworkGatewayStatus](#LocalNetworkGatewayStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `addressSpace` | ***[]string***||
| `bgpSettings` | ***[[]LocalNetworkGatewaySpecBgpSettings](#LocalNetworkGatewaySpecBgpSettings)***| ***(Optional)*** |
| `gatewayAddress` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## LocalNetworkGatewaySpecBgpSettings
##### (Appears on:[LocalNetworkGatewaySpec](#LocalNetworkGatewaySpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `asn` | ***int***||
| `bgpPeeringAddress` | ***string***||
| `peerWeight` | ***int***| ***(Optional)*** |
## LocalNetworkGatewayStatus
##### (Appears on:[LocalNetworkGateway](#LocalNetworkGateway))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LocalNetworkGatewaySpec](#LocalNetworkGatewaySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
