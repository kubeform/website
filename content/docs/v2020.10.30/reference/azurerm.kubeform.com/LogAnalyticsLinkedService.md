---
title: LogAnalyticsLinkedService
menu:
  docs_v2020.10.30:
    identifier: loganalyticslinkedservice-azurerm.kubeform.com
    name: LogAnalyticsLinkedService
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## LogAnalyticsLinkedService
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LogAnalyticsLinkedService` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LogAnalyticsLinkedServiceSpec](#loganalyticslinkedservicespec)***||
| `status` | ***[LogAnalyticsLinkedServiceStatus](#loganalyticslinkedservicestatus)***||
## LogAnalyticsLinkedServiceSpec

Appears on:[LogAnalyticsLinkedService](#loganalyticslinkedservice), [LogAnalyticsLinkedServiceStatus](#loganalyticslinkedservicestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `linkedServiceName` | ***string***| ***(Optional)*** |
| `linkedServiceProperties` | ***[[]LogAnalyticsLinkedServiceSpecLinkedServiceProperties](#loganalyticslinkedservicespeclinkedserviceproperties)***| ***(Optional)*** Deprecated|
| `name` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `resourceID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `workspaceName` | ***string***||
## LogAnalyticsLinkedServiceSpecLinkedServiceProperties

Appears on:[LogAnalyticsLinkedServiceSpec](#loganalyticslinkedservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `resourceID` | ***string***||
## LogAnalyticsLinkedServiceStatus

Appears on:[LogAnalyticsLinkedService](#loganalyticslinkedservice)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LogAnalyticsLinkedServiceSpec](#loganalyticslinkedservicespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LogAnalyticsLinkedServiceStatus](#loganalyticslinkedservicestatus)

---
