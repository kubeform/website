---
title: AzureadApplication
menu:
  docs_v2020.10.13:
    identifier: azureadapplication-azurerm.kubeform.com
    name: AzureadApplication
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## AzureadApplication
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AzureadApplication` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AzureadApplicationSpec](#azureadapplicationspec)***||
| `status` | ***[AzureadApplicationStatus](#azureadapplicationstatus)***||
## AzureadApplicationSpec

Appears on:[AzureadApplication](#azureadapplication), [AzureadApplicationStatus](#azureadapplicationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `applicationID` | ***string***| ***(Optional)*** |
| `availableToOtherTenants` | ***bool***| ***(Optional)*** |
| `homepage` | ***string***| ***(Optional)*** |
| `identifierUris` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `oauth2AllowImplicitFlow` | ***bool***| ***(Optional)*** |
| `replyUrls` | ***[]string***| ***(Optional)*** |
## AzureadApplicationStatus

Appears on:[AzureadApplication](#azureadapplication)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AzureadApplicationSpec](#azureadapplicationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AzureadApplicationStatus](#azureadapplicationstatus)

---
