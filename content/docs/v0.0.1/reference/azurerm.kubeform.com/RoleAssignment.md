---
title: RoleAssignment
menu:
  docs_v0.0.1:
    identifier: roleassignment-azurerm.kubeform.com
    name: RoleAssignment
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## RoleAssignment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `RoleAssignment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RoleAssignmentSpec](#RoleAssignmentSpec)***||
| `status` | ***[RoleAssignmentStatus](#RoleAssignmentStatus)***||
## RoleAssignmentSpec
##### (Appears on:[RoleAssignment](#RoleAssignment), [RoleAssignmentStatus](#RoleAssignmentStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `principalID` | ***string***||
| `roleDefinitionID` | ***string***| ***(Optional)*** |
| `roleDefinitionName` | ***string***| ***(Optional)*** |
| `scope` | ***string***||
## RoleAssignmentStatus
##### (Appears on:[RoleAssignment](#RoleAssignment))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RoleAssignmentSpec](#RoleAssignmentSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---