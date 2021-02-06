---
title: SqlActiveDirectoryAdministrator
menu:
  docs_v2020.10.30:
    identifier: sqlactivedirectoryadministrator-azurerm.kubeform.com
    name: SqlActiveDirectoryAdministrator
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## SqlActiveDirectoryAdministrator
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SqlActiveDirectoryAdministrator` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqlActiveDirectoryAdministratorSpec](#sqlactivedirectoryadministratorspec)***||
| `status` | ***[SqlActiveDirectoryAdministratorStatus](#sqlactivedirectoryadministratorstatus)***||
## Phase(`string` alias)

Appears on:[SqlActiveDirectoryAdministratorStatus](#sqlactivedirectoryadministratorstatus)

## SqlActiveDirectoryAdministratorSpec

Appears on:[SqlActiveDirectoryAdministrator](#sqlactivedirectoryadministrator), [SqlActiveDirectoryAdministratorStatus](#sqlactivedirectoryadministratorstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `login` | ***string***||
| `objectID` | ***string***||
| `resourceGroupName` | ***string***||
| `serverName` | ***string***||
| `tenantID` | ***string***||
## SqlActiveDirectoryAdministratorStatus

Appears on:[SqlActiveDirectoryAdministrator](#sqlactivedirectoryadministrator)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqlActiveDirectoryAdministratorSpec](#sqlactivedirectoryadministratorspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---