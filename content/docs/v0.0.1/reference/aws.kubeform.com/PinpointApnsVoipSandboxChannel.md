---
title: PinpointApnsVoipSandboxChannel
menu:
  docs_v0.0.1:
    identifier: pinpointapnsvoipsandboxchannel-aws.kubeform.com
    name: PinpointApnsVoipSandboxChannel
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## PinpointApnsVoipSandboxChannel
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `PinpointApnsVoipSandboxChannel` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PinpointApnsVoipSandboxChannelSpec](#pinpointapnsvoipsandboxchannelspec)***||
| `status` | ***[PinpointApnsVoipSandboxChannelStatus](#pinpointapnsvoipsandboxchannelstatus)***||
## PinpointApnsVoipSandboxChannelSpec

Appears on:[PinpointApnsVoipSandboxChannel](#pinpointapnsvoipsandboxchannel), [PinpointApnsVoipSandboxChannelStatus](#pinpointapnsvoipsandboxchannelstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `applicationID` | ***string***||
| `defaultAuthenticationMethod` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
## PinpointApnsVoipSandboxChannelStatus

Appears on:[PinpointApnsVoipSandboxChannel](#pinpointapnsvoipsandboxchannel)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PinpointApnsVoipSandboxChannelSpec](#pinpointapnsvoipsandboxchannelspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `bundle_id` | ***string*** ||
| `certificate` | ***string*** ||
| `private_key` | ***string*** ||
| `team_id` | ***string*** ||
| `token_key` | ***string*** ||
| `token_key_id` | ***string*** ||
