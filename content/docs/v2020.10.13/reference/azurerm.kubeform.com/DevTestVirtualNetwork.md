---
title: DevTestVirtualNetwork
menu:
  docs_v2020.10.13:
    identifier: devtestvirtualnetwork-azurerm.kubeform.com
    name: DevTestVirtualNetwork
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## DevTestVirtualNetwork
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DevTestVirtualNetwork` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DevTestVirtualNetworkSpec](#devtestvirtualnetworkspec)***||
| `status` | ***[DevTestVirtualNetworkStatus](#devtestvirtualnetworkstatus)***||
## DevTestVirtualNetworkSpec

Appears on:[DevTestVirtualNetwork](#devtestvirtualnetwork), [DevTestVirtualNetworkStatus](#devtestvirtualnetworkstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `labName` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `subnet` | ***[[]DevTestVirtualNetworkSpecSubnet](#devtestvirtualnetworkspecsubnet)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `uniqueIdentifier` | ***string***| ***(Optional)*** |
## DevTestVirtualNetworkSpecSubnet

Appears on:[DevTestVirtualNetworkSpec](#devtestvirtualnetworkspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
| `useInVirtualMachineCreation` | ***string***| ***(Optional)*** |
| `usePublicIPAddress` | ***string***| ***(Optional)*** |
## DevTestVirtualNetworkStatus

Appears on:[DevTestVirtualNetwork](#devtestvirtualnetwork)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DevTestVirtualNetworkSpec](#devtestvirtualnetworkspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DevTestVirtualNetworkStatus](#devtestvirtualnetworkstatus)

---
