---
title: PinpointSmsChannel
menu:
  docs_v0.0.1:
    identifier: pinpointsmschannel-aws.kubeform.com
    name: PinpointSmsChannel
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## PinpointSmsChannel
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `PinpointSmsChannel` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PinpointSmsChannelSpec](#PinpointSmsChannelSpec)***||
| `status` | ***[PinpointSmsChannelStatus](#PinpointSmsChannelStatus)***||
## PinpointSmsChannelSpec
##### (Appears on:[PinpointSmsChannel](#PinpointSmsChannel), [PinpointSmsChannelStatus](#PinpointSmsChannelStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `applicationID` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `promotionalMessagesPerSecond` | ***int***| ***(Optional)*** |
| `senderID` | ***string***| ***(Optional)*** |
| `shortCode` | ***string***| ***(Optional)*** |
| `transactionalMessagesPerSecond` | ***int***| ***(Optional)*** |
## PinpointSmsChannelStatus
##### (Appears on:[PinpointSmsChannel](#PinpointSmsChannel))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PinpointSmsChannelSpec](#PinpointSmsChannelSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---