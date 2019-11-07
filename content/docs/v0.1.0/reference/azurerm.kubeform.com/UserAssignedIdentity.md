---
title: UserAssignedIdentity
menu:
  docs_v0.1.0:
    identifier: userassignedidentity-azurerm.kubeform.com
    name: UserAssignedIdentity
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## UserAssignedIdentity
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `UserAssignedIdentity` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[UserAssignedIdentitySpec](#userassignedidentityspec)***||
| `status` | ***[UserAssignedIdentityStatus](#userassignedidentitystatus)***||
## Phase(`string` alias)

Appears on:[UserAssignedIdentityStatus](#userassignedidentitystatus)

## UserAssignedIdentitySpec

Appears on:[UserAssignedIdentity](#userassignedidentity), [UserAssignedIdentityStatus](#userassignedidentitystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `clientID` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `principalID` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## UserAssignedIdentityStatus

Appears on:[UserAssignedIdentity](#userassignedidentity)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[UserAssignedIdentitySpec](#userassignedidentityspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
