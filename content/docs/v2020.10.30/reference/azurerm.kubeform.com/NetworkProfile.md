---
title: NetworkProfile
menu:
  docs_v2020.10.30:
    identifier: networkprofile-azurerm.kubeform.com
    name: NetworkProfile
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## NetworkProfile
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkProfile` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkProfileSpec](#networkprofilespec)***||
| `status` | ***[NetworkProfileStatus](#networkprofilestatus)***||
## NetworkProfileSpec

Appears on:[NetworkProfile](#networkprofile), [NetworkProfileStatus](#networkprofilestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `containerNetworkInterface` | ***[[]NetworkProfileSpecContainerNetworkInterface](#networkprofilespeccontainernetworkinterface)***||
| `containerNetworkInterfaceIDS` | ***[]string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## NetworkProfileSpecContainerNetworkInterface

Appears on:[NetworkProfileSpec](#networkprofilespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipConfiguration` | ***[[]NetworkProfileSpecContainerNetworkInterfaceIpConfiguration](#networkprofilespeccontainernetworkinterfaceipconfiguration)***||
| `name` | ***string***||
## NetworkProfileSpecContainerNetworkInterfaceIpConfiguration

Appears on:[NetworkProfileSpecContainerNetworkInterface](#networkprofilespeccontainernetworkinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `subnetID` | ***string***||
## NetworkProfileStatus

Appears on:[NetworkProfile](#networkprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkProfileSpec](#networkprofilespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NetworkProfileStatus](#networkprofilestatus)

---
