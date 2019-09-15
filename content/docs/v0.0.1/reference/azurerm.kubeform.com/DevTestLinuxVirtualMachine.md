---
title: DevTestLinuxVirtualMachine
menu:
  docs_v0.0.1:
    identifier: devtestlinuxvirtualmachine-azurerm.kubeform.com
    name: DevTestLinuxVirtualMachine
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DevTestLinuxVirtualMachine
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DevTestLinuxVirtualMachine` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DevTestLinuxVirtualMachineSpec](#DevTestLinuxVirtualMachineSpec)***||
| `status` | ***[DevTestLinuxVirtualMachineStatus](#DevTestLinuxVirtualMachineStatus)***||
## DevTestLinuxVirtualMachineSpec
##### (Appears on:[DevTestLinuxVirtualMachine](#DevTestLinuxVirtualMachine), [DevTestLinuxVirtualMachineStatus](#DevTestLinuxVirtualMachineStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `allowClaim` | ***bool***| ***(Optional)*** |
| `disallowPublicIPAddress` | ***bool***| ***(Optional)*** |
| `fqdn` | ***string***| ***(Optional)*** |
| `galleryImageReference` | ***[[]DevTestLinuxVirtualMachineSpecGalleryImageReference](#DevTestLinuxVirtualMachineSpecGalleryImageReference)***||
| `inboundNATRule` | ***[[]DevTestLinuxVirtualMachineSpecInboundNATRule](#DevTestLinuxVirtualMachineSpecInboundNATRule)***| ***(Optional)*** |
| `labName` | ***string***||
| `labSubnetName` | ***string***||
| `labVirtualNetworkID` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `notes` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `size` | ***string***||
| `sshKey` | ***string***| ***(Optional)*** |
| `storageType` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `uniqueIdentifier` | ***string***| ***(Optional)*** |
| `username` | ***string***||
## DevTestLinuxVirtualMachineSpecGalleryImageReference
##### (Appears on:[DevTestLinuxVirtualMachineSpec](#DevTestLinuxVirtualMachineSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `offer` | ***string***||
| `publisher` | ***string***||
| `sku` | ***string***||
| `version` | ***string***||
## DevTestLinuxVirtualMachineSpecInboundNATRule
##### (Appears on:[DevTestLinuxVirtualMachineSpec](#DevTestLinuxVirtualMachineSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `backendPort` | ***int***||
| `frontendPort` | ***int***| ***(Optional)*** |
| `protocol` | ***string***||
## DevTestLinuxVirtualMachineStatus
##### (Appears on:[DevTestLinuxVirtualMachine](#DevTestLinuxVirtualMachine))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DevTestLinuxVirtualMachineSpec](#DevTestLinuxVirtualMachineSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `password` | ***string*** ||
