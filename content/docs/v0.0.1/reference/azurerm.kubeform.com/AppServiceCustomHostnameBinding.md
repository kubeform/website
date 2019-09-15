---
title: AppServiceCustomHostnameBinding
menu:
  docs_v0.0.1:
    identifier: appservicecustomhostnamebinding-azurerm.kubeform.com
    name: AppServiceCustomHostnameBinding
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## AppServiceCustomHostnameBinding
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AppServiceCustomHostnameBinding` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppServiceCustomHostnameBindingSpec](#AppServiceCustomHostnameBindingSpec)***||
| `status` | ***[AppServiceCustomHostnameBindingStatus](#AppServiceCustomHostnameBindingStatus)***||
## AppServiceCustomHostnameBindingSpec
##### (Appears on:[AppServiceCustomHostnameBinding](#AppServiceCustomHostnameBinding), [AppServiceCustomHostnameBindingStatus](#AppServiceCustomHostnameBindingStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `appServiceName` | ***string***||
| `hostname` | ***string***||
| `resourceGroupName` | ***string***||
## AppServiceCustomHostnameBindingStatus
##### (Appears on:[AppServiceCustomHostnameBinding](#AppServiceCustomHostnameBinding))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppServiceCustomHostnameBindingSpec](#AppServiceCustomHostnameBindingSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
