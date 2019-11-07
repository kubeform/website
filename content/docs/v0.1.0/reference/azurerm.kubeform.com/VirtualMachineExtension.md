---
title: VirtualMachineExtension
menu:
  docs_v0.1.0:
    identifier: virtualmachineextension-azurerm.kubeform.com
    name: VirtualMachineExtension
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## VirtualMachineExtension
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `VirtualMachineExtension` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VirtualMachineExtensionSpec](#virtualmachineextensionspec)***||
| `status` | ***[VirtualMachineExtensionStatus](#virtualmachineextensionstatus)***||
## Phase(`string` alias)

Appears on:[VirtualMachineExtensionStatus](#virtualmachineextensionstatus)

## VirtualMachineExtensionSpec

Appears on:[VirtualMachineExtension](#virtualmachineextension), [VirtualMachineExtensionStatus](#virtualmachineextensionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `autoUpgradeMinorVersion` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `publisher` | ***string***||
| `resourceGroupName` | ***string***||
| `settings` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `type` | ***string***||
| `typeHandlerVersion` | ***string***||
| `virtualMachineName` | ***string***||
## VirtualMachineExtensionStatus

Appears on:[VirtualMachineExtension](#virtualmachineextension)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VirtualMachineExtensionSpec](#virtualmachineextensionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `protected_settings` | ***string*** ||
