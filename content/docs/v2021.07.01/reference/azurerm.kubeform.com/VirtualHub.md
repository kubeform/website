---
title: VirtualHub
menu:
  docs_v2021.07.01:
    identifier: virtualhub-azurerm.kubeform.com
    name: VirtualHub
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

## VirtualHub
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `VirtualHub` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VirtualHubSpec](#virtualhubspec)***||
| `status` | ***[VirtualHubStatus](#virtualhubstatus)***||
## Phase(`string` alias)

Appears on:[VirtualHubStatus](#virtualhubstatus)

## VirtualHubSpec

Appears on:[VirtualHub](#virtualhub), [VirtualHubStatus](#virtualhubstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `addressPrefix` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `route` | ***[[]VirtualHubSpecRoute](#virtualhubspecroute)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `virtualWANID` | ***string***||
## VirtualHubSpecRoute

Appears on:[VirtualHubSpec](#virtualhubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `addressPrefixes` | ***[]string***||
| `nextHopIPAddress` | ***string***||
## VirtualHubStatus

Appears on:[VirtualHub](#virtualhub)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VirtualHubSpec](#virtualhubspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
