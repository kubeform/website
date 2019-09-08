---
title: NetworkProfile
menu:
  docs_v0.0.1:
    identifier: networkprofile-azurerm.kubeform.com
    name: NetworkProfile
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## NetworkProfile
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkProfile` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkProfileSpec](#NetworkProfileSpec)***||
| `status` | ***[NetworkProfileStatus](#NetworkProfileStatus)***||
## NetworkProfileSpec
##### (Appears on:[NetworkProfile](#NetworkProfile), [NetworkProfileStatus](#NetworkProfileStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `containerNetworkInterface` | ***[[]NetworkProfileSpecContainerNetworkInterface](#NetworkProfileSpecContainerNetworkInterface)***||
| `containerNetworkInterfaceIDS` | ***[]string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## NetworkProfileSpecContainerNetworkInterface
##### (Appears on:[NetworkProfileSpec](#NetworkProfileSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipConfiguration` | ***[[]NetworkProfileSpecContainerNetworkInterfaceIpConfiguration](#NetworkProfileSpecContainerNetworkInterfaceIpConfiguration)***||
| `name` | ***string***||
## NetworkProfileSpecContainerNetworkInterfaceIpConfiguration
##### (Appears on:[NetworkProfileSpecContainerNetworkInterface](#NetworkProfileSpecContainerNetworkInterface))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `subnetID` | ***string***||
## NetworkProfileStatus
##### (Appears on:[NetworkProfile](#NetworkProfile))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkProfileSpec](#NetworkProfileSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
