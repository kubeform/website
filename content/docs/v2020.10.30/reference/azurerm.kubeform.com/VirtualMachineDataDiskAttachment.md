---
title: VirtualMachineDataDiskAttachment
menu:
  docs_v2020.10.30:
    identifier: virtualmachinedatadiskattachment-azurerm.kubeform.com
    name: VirtualMachineDataDiskAttachment
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## VirtualMachineDataDiskAttachment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `VirtualMachineDataDiskAttachment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VirtualMachineDataDiskAttachmentSpec](#virtualmachinedatadiskattachmentspec)***||
| `status` | ***[VirtualMachineDataDiskAttachmentStatus](#virtualmachinedatadiskattachmentstatus)***||
## Phase(`string` alias)

Appears on:[VirtualMachineDataDiskAttachmentStatus](#virtualmachinedatadiskattachmentstatus)

## VirtualMachineDataDiskAttachmentSpec

Appears on:[VirtualMachineDataDiskAttachment](#virtualmachinedatadiskattachment), [VirtualMachineDataDiskAttachmentStatus](#virtualmachinedatadiskattachmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `caching` | ***string***||
| `createOption` | ***string***| ***(Optional)*** |
| `lun` | ***int64***||
| `managedDiskID` | ***string***||
| `virtualMachineID` | ***string***||
| `writeAcceleratorEnabled` | ***bool***| ***(Optional)*** |
## VirtualMachineDataDiskAttachmentStatus

Appears on:[VirtualMachineDataDiskAttachment](#virtualmachinedatadiskattachment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VirtualMachineDataDiskAttachmentSpec](#virtualmachinedatadiskattachmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
