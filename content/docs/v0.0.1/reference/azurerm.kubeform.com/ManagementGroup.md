---
title: ManagementGroup
menu:
  docs_v0.0.1:
    identifier: managementgroup-azurerm.kubeform.com
    name: ManagementGroup
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ManagementGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ManagementGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ManagementGroupSpec](#ManagementGroupSpec)***||
| `status` | ***[ManagementGroupStatus](#ManagementGroupStatus)***||
## ManagementGroupSpec
##### (Appears on:[ManagementGroup](#ManagementGroup), [ManagementGroupStatus](#ManagementGroupStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `displayName` | ***string***| ***(Optional)*** |
| `groupID` | ***string***| ***(Optional)*** |
| `parentManagementGroupID` | ***string***| ***(Optional)*** |
| `subscriptionIDS` | ***[]string***| ***(Optional)*** |
## ManagementGroupStatus
##### (Appears on:[ManagementGroup](#ManagementGroup))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ManagementGroupSpec](#ManagementGroupSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
