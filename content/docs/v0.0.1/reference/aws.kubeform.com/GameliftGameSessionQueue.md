---
title: GameliftGameSessionQueue
menu:
  docs_v0.0.1:
    identifier: gameliftgamesessionqueue-aws.kubeform.com
    name: GameliftGameSessionQueue
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## GameliftGameSessionQueue
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GameliftGameSessionQueue` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GameliftGameSessionQueueSpec](#GameliftGameSessionQueueSpec)***||
| `status` | ***[GameliftGameSessionQueueStatus](#GameliftGameSessionQueueStatus)***||
## GameliftGameSessionQueueSpec
##### (Appears on:[GameliftGameSessionQueue](#GameliftGameSessionQueue), [GameliftGameSessionQueueStatus](#GameliftGameSessionQueueStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `destinations` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `playerLatencyPolicy` | ***[[]GameliftGameSessionQueueSpecPlayerLatencyPolicy](#GameliftGameSessionQueueSpecPlayerLatencyPolicy)***| ***(Optional)*** |
| `timeoutInSeconds` | ***int***| ***(Optional)*** |
## GameliftGameSessionQueueSpecPlayerLatencyPolicy
##### (Appears on:[GameliftGameSessionQueueSpec](#GameliftGameSessionQueueSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `maximumIndividualPlayerLatencyMilliseconds` | ***int***||
| `policyDurationSeconds` | ***int***| ***(Optional)*** |
## GameliftGameSessionQueueStatus
##### (Appears on:[GameliftGameSessionQueue](#GameliftGameSessionQueue))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GameliftGameSessionQueueSpec](#GameliftGameSessionQueueSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
