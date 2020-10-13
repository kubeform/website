---
title: ApiManagementAPIVersionSet
menu:
  docs_v2020.10.13:
    identifier: apimanagementapiversionset-azurerm.kubeform.com
    name: ApiManagementAPIVersionSet
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## ApiManagementAPIVersionSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementAPIVersionSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementAPIVersionSetSpec](#apimanagementapiversionsetspec)***||
| `status` | ***[ApiManagementAPIVersionSetStatus](#apimanagementapiversionsetstatus)***||
## ApiManagementAPIVersionSetSpec

Appears on:[ApiManagementAPIVersionSet](#apimanagementapiversionset), [ApiManagementAPIVersionSetStatus](#apimanagementapiversionsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `apiManagementName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `displayName` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `versionHeaderName` | ***string***| ***(Optional)*** |
| `versionQueryName` | ***string***| ***(Optional)*** |
| `versioningScheme` | ***string***||
## ApiManagementAPIVersionSetStatus

Appears on:[ApiManagementAPIVersionSet](#apimanagementapiversionset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementAPIVersionSetSpec](#apimanagementapiversionsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementAPIVersionSetStatus](#apimanagementapiversionsetstatus)

---
