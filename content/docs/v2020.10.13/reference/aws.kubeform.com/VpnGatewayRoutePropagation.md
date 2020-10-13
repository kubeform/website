---
title: VpnGatewayRoutePropagation
menu:
  docs_v2020.10.13:
    identifier: vpngatewayroutepropagation-aws.kubeform.com
    name: VpnGatewayRoutePropagation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## VpnGatewayRoutePropagation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpnGatewayRoutePropagation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpnGatewayRoutePropagationSpec](#vpngatewayroutepropagationspec)***||
| `status` | ***[VpnGatewayRoutePropagationStatus](#vpngatewayroutepropagationstatus)***||
## Phase(`string` alias)

Appears on:[VpnGatewayRoutePropagationStatus](#vpngatewayroutepropagationstatus)

## VpnGatewayRoutePropagationSpec

Appears on:[VpnGatewayRoutePropagation](#vpngatewayroutepropagation), [VpnGatewayRoutePropagationStatus](#vpngatewayroutepropagationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `routeTableID` | ***string***||
| `vpnGatewayID` | ***string***||
## VpnGatewayRoutePropagationStatus

Appears on:[VpnGatewayRoutePropagation](#vpngatewayroutepropagation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpnGatewayRoutePropagationSpec](#vpngatewayroutepropagationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
