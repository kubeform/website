---
title: IothubFallbackRoute
menu:
  docs_v2021.07.01:
    identifier: iothubfallbackroute-azurerm.kubeform.com
    name: IothubFallbackRoute
    parent: azurerm.kubeform.com-reference
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

## IothubFallbackRoute
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `IothubFallbackRoute` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IothubFallbackRouteSpec](#iothubfallbackroutespec)***||
| `status` | ***[IothubFallbackRouteStatus](#iothubfallbackroutestatus)***||
## IothubFallbackRouteSpec

Appears on:[IothubFallbackRoute](#iothubfallbackroute), [IothubFallbackRouteStatus](#iothubfallbackroutestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `condition` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***||
| `endpointNames` | ***[]string***||
| `iothubName` | ***string***||
| `resourceGroupName` | ***string***||
## IothubFallbackRouteStatus

Appears on:[IothubFallbackRoute](#iothubfallbackroute)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IothubFallbackRouteSpec](#iothubfallbackroutespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IothubFallbackRouteStatus](#iothubfallbackroutestatus)

---
