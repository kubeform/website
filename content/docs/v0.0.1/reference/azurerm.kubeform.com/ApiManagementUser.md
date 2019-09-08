---
title: ApiManagementUser
menu:
  docs_v0.0.1:
    identifier: apimanagementuser-azurerm.kubeform.com
    name: ApiManagementUser
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## ApiManagementUser
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementUser` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementUserSpec](#ApiManagementUserSpec)***||
| `status` | ***[ApiManagementUserStatus](#ApiManagementUserStatus)***||
## ApiManagementUserSpec
##### (Appears on:[ApiManagementUser](#ApiManagementUser), [ApiManagementUserStatus](#ApiManagementUserStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `apiManagementName` | ***string***||
| `confirmation` | ***string***| ***(Optional)*** |
| `email` | ***string***||
| `firstName` | ***string***||
| `lastName` | ***string***||
| `note` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `state` | ***string***| ***(Optional)*** |
| `userID` | ***string***||
## ApiManagementUserStatus
##### (Appears on:[ApiManagementUser](#ApiManagementUser))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementUserSpec](#ApiManagementUserSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `password` | ***string*** ||
