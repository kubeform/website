---
title: EventhubConsumerGroup
menu:
  docs_v0.0.1:
    identifier: eventhubconsumergroup-azurerm.kubeform.com
    name: EventhubConsumerGroup
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## EventhubConsumerGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `EventhubConsumerGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EventhubConsumerGroupSpec](#eventhubconsumergroupspec)***||
| `status` | ***[EventhubConsumerGroupStatus](#eventhubconsumergroupstatus)***||
## EventhubConsumerGroupSpec

Appears on:[EventhubConsumerGroup](#eventhubconsumergroup), [EventhubConsumerGroupStatus](#eventhubconsumergroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `eventhubName` | ***string***||
| `location` | ***string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `namespaceName` | ***string***||
| `resourceGroupName` | ***string***||
| `userMetadata` | ***string***| ***(Optional)*** |
## EventhubConsumerGroupStatus

Appears on:[EventhubConsumerGroup](#eventhubconsumergroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EventhubConsumerGroupSpec](#eventhubconsumergroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
