---
title: ServicebusTopic
menu:
  docs_v0.0.1:
    identifier: servicebustopic-azurerm.kubeform.com
    name: ServicebusTopic
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ServicebusTopic
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ServicebusTopic` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServicebusTopicSpec](#servicebustopicspec)***||
| `status` | ***[ServicebusTopicStatus](#servicebustopicstatus)***||
## ServicebusTopicSpec

Appears on:[ServicebusTopic](#servicebustopic), [ServicebusTopicStatus](#servicebustopicstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoDeleteOnIdle` | ***string***| ***(Optional)*** |
| `defaultMessageTtl` | ***string***| ***(Optional)*** |
| `duplicateDetectionHistoryTimeWindow` | ***string***| ***(Optional)*** |
| `enableBatchedOperations` | ***bool***| ***(Optional)*** |
| `enableExpress` | ***bool***| ***(Optional)*** |
| `enableFilteringMessagesBeforePublishing` | ***bool***| ***(Optional)*** Deprecated|
| `enablePartitioning` | ***bool***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** Deprecated|
| `maxSizeInMegabytes` | ***int***| ***(Optional)*** |
| `name` | ***string***||
| `namespaceName` | ***string***||
| `requiresDuplicateDetection` | ***bool***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `status` | ***string***| ***(Optional)*** |
| `supportOrdering` | ***bool***| ***(Optional)*** |
## ServicebusTopicStatus

Appears on:[ServicebusTopic](#servicebustopic)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServicebusTopicSpec](#servicebustopicspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
