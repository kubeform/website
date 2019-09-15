---
title: VpnConnection
menu:
  docs_v0.0.1:
    identifier: vpnconnection-aws.kubeform.com
    name: VpnConnection
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## VpnConnection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpnConnection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpnConnectionSpec](#VpnConnectionSpec)***||
| `status` | ***[VpnConnectionStatus](#VpnConnectionStatus)***||
## VpnConnectionSpec
##### (Appears on:[VpnConnection](#VpnConnection), [VpnConnectionStatus](#VpnConnectionStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `customerGatewayConfiguration` | ***string***| ***(Optional)*** |
| `customerGatewayID` | ***string***||
| `routes` | ***[[]VpnConnectionSpecRoutes](#VpnConnectionSpecRoutes)***| ***(Optional)*** |
| `staticRoutesOnly` | ***bool***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `transitGatewayAttachmentID` | ***string***| ***(Optional)*** |
| `transitGatewayID` | ***string***| ***(Optional)*** |
| `tunnel1Address` | ***string***| ***(Optional)*** |
| `tunnel1BGPAsn` | ***string***| ***(Optional)*** |
| `tunnel1BGPHoldtime` | ***int***| ***(Optional)*** |
| `tunnel1CgwInsideAddress` | ***string***| ***(Optional)*** |
| `tunnel1InsideCIDR` | ***string***| ***(Optional)*** |
| `tunnel1VgwInsideAddress` | ***string***| ***(Optional)*** |
| `tunnel2Address` | ***string***| ***(Optional)*** |
| `tunnel2BGPAsn` | ***string***| ***(Optional)*** |
| `tunnel2BGPHoldtime` | ***int***| ***(Optional)*** |
| `tunnel2CgwInsideAddress` | ***string***| ***(Optional)*** |
| `tunnel2InsideCIDR` | ***string***| ***(Optional)*** |
| `tunnel2VgwInsideAddress` | ***string***| ***(Optional)*** |
| `type` | ***string***||
| `vgwTelemetry` | ***[[]VpnConnectionSpecVgwTelemetry](#VpnConnectionSpecVgwTelemetry)***| ***(Optional)*** |
| `vpnGatewayID` | ***string***| ***(Optional)*** |
## VpnConnectionSpecRoutes
##### (Appears on:[VpnConnectionSpec](#VpnConnectionSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `destinationCIDRBlock` | ***string***| ***(Optional)*** |
| `source` | ***string***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
## VpnConnectionSpecVgwTelemetry
##### (Appears on:[VpnConnectionSpec](#VpnConnectionSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `acceptedRouteCount` | ***int***| ***(Optional)*** |
| `lastStatusChange` | ***string***| ***(Optional)*** |
| `outsideIPAddress` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `statusMessage` | ***string***| ***(Optional)*** |
## VpnConnectionStatus
##### (Appears on:[VpnConnection](#VpnConnection))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpnConnectionSpec](#VpnConnectionSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `tunnel1_preshared_key` | ***string*** ||
| `tunnel2_preshared_key` | ***string*** ||
