---
title: RouteTable
menu:
  docs_v2021.07.01:
    identifier: routetable-aws.kubeform.com
    name: RouteTable
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## RouteTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RouteTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RouteTableSpec](#routetablespec)***||
| `status` | ***[RouteTableStatus](#routetablestatus)***||
## Phase(`string` alias)

Appears on:[RouteTableStatus](#routetablestatus)

## RouteTableSpec

Appears on:[RouteTable](#routetable), [RouteTableStatus](#routetablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ownerID` | ***string***| ***(Optional)*** |
| `propagatingVgws` | ***[]string***| ***(Optional)*** |
| `route` | ***[[]RouteTableSpecRoute](#routetablespecroute)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcID` | ***string***||
## RouteTableSpecRoute

Appears on:[RouteTableSpec](#routetablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cidrBlock` | ***string***| ***(Optional)*** |
| `egressOnlyGatewayID` | ***string***| ***(Optional)*** |
| `gatewayID` | ***string***| ***(Optional)*** |
| `instanceID` | ***string***| ***(Optional)*** |
| `ipv6CIDRBlock` | ***string***| ***(Optional)*** |
| `natGatewayID` | ***string***| ***(Optional)*** |
| `networkInterfaceID` | ***string***| ***(Optional)*** |
| `transitGatewayID` | ***string***| ***(Optional)*** |
| `vpcPeeringConnectionID` | ***string***| ***(Optional)*** |
## RouteTableStatus

Appears on:[RouteTable](#routetable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RouteTableSpec](#routetablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
