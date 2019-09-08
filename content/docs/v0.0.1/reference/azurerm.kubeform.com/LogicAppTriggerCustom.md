---
title: LogicAppTriggerCustom
menu:
  docs_v0.0.1:
    identifier: logicapptriggercustom-azurerm.kubeform.com
    name: LogicAppTriggerCustom
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## LogicAppTriggerCustom
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LogicAppTriggerCustom` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LogicAppTriggerCustomSpec](#LogicAppTriggerCustomSpec)***||
| `status` | ***[LogicAppTriggerCustomStatus](#LogicAppTriggerCustomStatus)***||
## LogicAppTriggerCustomSpec
##### (Appears on:[LogicAppTriggerCustom](#LogicAppTriggerCustom), [LogicAppTriggerCustomStatus](#LogicAppTriggerCustomStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `body` | ***string***||
| `logicAppID` | ***string***||
| `name` | ***string***||
## LogicAppTriggerCustomStatus
##### (Appears on:[LogicAppTriggerCustom](#LogicAppTriggerCustom))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LogicAppTriggerCustomSpec](#LogicAppTriggerCustomSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
