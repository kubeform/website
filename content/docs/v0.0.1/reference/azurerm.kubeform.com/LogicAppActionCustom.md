---
title: LogicAppActionCustom
menu:
  docs_v0.0.1:
    identifier: logicappactioncustom-azurerm.kubeform.com
    name: LogicAppActionCustom
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## LogicAppActionCustom
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LogicAppActionCustom` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LogicAppActionCustomSpec](#LogicAppActionCustomSpec)***||
| `status` | ***[LogicAppActionCustomStatus](#LogicAppActionCustomStatus)***||
## LogicAppActionCustomSpec
##### (Appears on:[LogicAppActionCustom](#LogicAppActionCustom), [LogicAppActionCustomStatus](#LogicAppActionCustomStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `body` | ***string***||
| `logicAppID` | ***string***||
| `name` | ***string***||
## LogicAppActionCustomStatus
##### (Appears on:[LogicAppActionCustom](#LogicAppActionCustom))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LogicAppActionCustomSpec](#LogicAppActionCustomSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
