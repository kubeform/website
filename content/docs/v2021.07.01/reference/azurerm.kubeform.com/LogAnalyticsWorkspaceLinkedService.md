---
title: LogAnalyticsWorkspaceLinkedService
menu:
  docs_v2021.07.01:
    identifier: loganalyticsworkspacelinkedservice-azurerm.kubeform.com
    name: LogAnalyticsWorkspaceLinkedService
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## LogAnalyticsWorkspaceLinkedService
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LogAnalyticsWorkspaceLinkedService` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LogAnalyticsWorkspaceLinkedServiceSpec](#loganalyticsworkspacelinkedservicespec)***||
| `status` | ***[LogAnalyticsWorkspaceLinkedServiceStatus](#loganalyticsworkspacelinkedservicestatus)***||
## LogAnalyticsWorkspaceLinkedServiceSpec

Appears on:[LogAnalyticsWorkspaceLinkedService](#loganalyticsworkspacelinkedservice), [LogAnalyticsWorkspaceLinkedServiceStatus](#loganalyticsworkspacelinkedservicestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `linkedServiceName` | ***string***| ***(Optional)*** |
| `linkedServiceProperties` | ***[[]LogAnalyticsWorkspaceLinkedServiceSpecLinkedServiceProperties](#loganalyticsworkspacelinkedservicespeclinkedserviceproperties)***| ***(Optional)*** Deprecated|
| `name` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `resourceID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `workspaceName` | ***string***||
## LogAnalyticsWorkspaceLinkedServiceSpecLinkedServiceProperties

Appears on:[LogAnalyticsWorkspaceLinkedServiceSpec](#loganalyticsworkspacelinkedservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceID` | ***string***||
## LogAnalyticsWorkspaceLinkedServiceStatus

Appears on:[LogAnalyticsWorkspaceLinkedService](#loganalyticsworkspacelinkedservice)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LogAnalyticsWorkspaceLinkedServiceSpec](#loganalyticsworkspacelinkedservicespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LogAnalyticsWorkspaceLinkedServiceStatus](#loganalyticsworkspacelinkedservicestatus)

---
