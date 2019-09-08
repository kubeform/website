---
title: PubsubSubscription
menu:
  docs_v0.0.1:
    identifier: pubsubsubscription-google.kubeform.com
    name: PubsubSubscription
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## PubsubSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `PubsubSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PubsubSubscriptionSpec](#PubsubSubscriptionSpec)***||
| `status` | ***[PubsubSubscriptionStatus](#PubsubSubscriptionStatus)***||
## PubsubSubscriptionSpec
##### (Appears on:[PubsubSubscription](#PubsubSubscription), [PubsubSubscriptionStatus](#PubsubSubscriptionStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ackDeadlineSeconds` | ***int***| ***(Optional)*** |
| `name` | ***string***||
| `path` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `pushConfig` | ***[[]PubsubSubscriptionSpecPushConfig](#PubsubSubscriptionSpecPushConfig)***| ***(Optional)*** |
| `topic` | ***string***||
## PubsubSubscriptionSpecPushConfig
##### (Appears on:[PubsubSubscriptionSpec](#PubsubSubscriptionSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `attributes` | ***map[string]string***| ***(Optional)*** |
| `pushEndpoint` | ***string***||
## PubsubSubscriptionStatus
##### (Appears on:[PubsubSubscription](#PubsubSubscription))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PubsubSubscriptionSpec](#PubsubSubscriptionSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
