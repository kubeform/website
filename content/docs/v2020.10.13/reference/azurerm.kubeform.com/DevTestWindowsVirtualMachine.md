---
title: DevTestWindowsVirtualMachine
menu:
  docs_v2020.10.13:
    identifier: devtestwindowsvirtualmachine-azurerm.kubeform.com
    name: DevTestWindowsVirtualMachine
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## DevTestWindowsVirtualMachine
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DevTestWindowsVirtualMachine` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DevTestWindowsVirtualMachineSpec](#devtestwindowsvirtualmachinespec)***||
| `status` | ***[DevTestWindowsVirtualMachineStatus](#devtestwindowsvirtualmachinestatus)***||
## DevTestWindowsVirtualMachineSpec

Appears on:[DevTestWindowsVirtualMachine](#devtestwindowsvirtualmachine), [DevTestWindowsVirtualMachineStatus](#devtestwindowsvirtualmachinestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allowClaim` | ***bool***| ***(Optional)*** |
| `disallowPublicIPAddress` | ***bool***| ***(Optional)*** |
| `fqdn` | ***string***| ***(Optional)*** |
| `galleryImageReference` | ***[[]DevTestWindowsVirtualMachineSpecGalleryImageReference](#devtestwindowsvirtualmachinespecgalleryimagereference)***||
| `inboundNATRule` | ***[[]DevTestWindowsVirtualMachineSpecInboundNATRule](#devtestwindowsvirtualmachinespecinboundnatrule)***| ***(Optional)*** |
| `labName` | ***string***||
| `labSubnetName` | ***string***||
| `labVirtualNetworkID` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `notes` | ***string***| ***(Optional)*** |
| `password` | ***string***||
| `resourceGroupName` | ***string***||
| `size` | ***string***||
| `storageType` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `uniqueIdentifier` | ***string***| ***(Optional)*** |
| `username` | ***string***||
## DevTestWindowsVirtualMachineSpecGalleryImageReference

Appears on:[DevTestWindowsVirtualMachineSpec](#devtestwindowsvirtualmachinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `offer` | ***string***||
| `publisher` | ***string***||
| `sku` | ***string***||
| `version` | ***string***||
## DevTestWindowsVirtualMachineSpecInboundNATRule

Appears on:[DevTestWindowsVirtualMachineSpec](#devtestwindowsvirtualmachinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `backendPort` | ***int64***||
| `frontendPort` | ***int64***| ***(Optional)*** |
| `protocol` | ***string***||
## DevTestWindowsVirtualMachineStatus

Appears on:[DevTestWindowsVirtualMachine](#devtestwindowsvirtualmachine)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DevTestWindowsVirtualMachineSpec](#devtestwindowsvirtualmachinespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DevTestWindowsVirtualMachineStatus](#devtestwindowsvirtualmachinestatus)

---
