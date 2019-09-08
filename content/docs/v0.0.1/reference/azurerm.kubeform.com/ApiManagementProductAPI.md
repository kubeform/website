---
title: ApiManagementProductAPI
menu:
  docs_v0.0.1:
    identifier: apimanagementproductapi-azurerm.kubeform.com
    name: ApiManagementProductAPI
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## ApiManagementProductAPI
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementProductAPI` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementProductAPISpec](#ApiManagementProductAPISpec)***||
| `status` | ***[ApiManagementProductAPIStatus](#ApiManagementProductAPIStatus)***||
## ApiManagementProductAPISpec
##### (Appears on:[ApiManagementProductAPI](#ApiManagementProductAPI), [ApiManagementProductAPIStatus](#ApiManagementProductAPIStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `apiManagementName` | ***string***||
| `apiName` | ***string***||
| `productID` | ***string***||
| `resourceGroupName` | ***string***||
## ApiManagementProductAPIStatus
##### (Appears on:[ApiManagementProductAPI](#ApiManagementProductAPI))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementProductAPISpec](#ApiManagementProductAPISpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
