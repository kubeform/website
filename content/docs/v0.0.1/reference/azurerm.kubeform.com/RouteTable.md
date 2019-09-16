---
title: RouteTable
menu:
  docs_v0.0.1:
    identifier: routetable-azurerm.kubeform.com
    name: RouteTable
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## RouteTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `RouteTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RouteTableSpec](#routetablespec)***||
| `status` | ***[RouteTableStatus](#routetablestatus)***||
## RouteTableSpec

Appears on:[RouteTable](#routetable), [RouteTableStatus](#routetablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `disableBGPRoutePropagation` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `route` | ***[[]RouteTableSpecRoute](#routetablespecroute)***| ***(Optional)*** |
| `subnets` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## RouteTableSpecRoute

Appears on:[RouteTableSpec](#routetablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `addressPrefix` | ***string***||
| `name` | ***string***||
| `nextHopInIPAddress` | ***string***| ***(Optional)*** |
| `nextHopType` | ***string***||
## RouteTableStatus

Appears on:[RouteTable](#routetable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RouteTableSpec](#routetablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
