---
title: ApiManagementGroup
menu:
  docs_v0.1.0:
    identifier: apimanagementgroup-azurerm.kubeform.com
    name: ApiManagementGroup
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ApiManagementGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementGroupSpec](#apimanagementgroupspec)***||
| `status` | ***[ApiManagementGroupStatus](#apimanagementgroupstatus)***||
## ApiManagementGroupSpec

Appears on:[ApiManagementGroup](#apimanagementgroup), [ApiManagementGroupStatus](#apimanagementgroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `apiManagementName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `displayName` | ***string***||
| `externalID` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## ApiManagementGroupStatus

Appears on:[ApiManagementGroup](#apimanagementgroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementGroupSpec](#apimanagementgroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementGroupStatus](#apimanagementgroupstatus)

---
