---
title: PubsubSubscription
menu:
  docs_v0.1.0:
    identifier: pubsubsubscription-google.kubeform.com
    name: PubsubSubscription
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## PubsubSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `PubsubSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PubsubSubscriptionSpec](#pubsubsubscriptionspec)***||
| `status` | ***[PubsubSubscriptionStatus](#pubsubsubscriptionstatus)***||
## Phase(`string` alias)

Appears on:[PubsubSubscriptionStatus](#pubsubsubscriptionstatus)

## PubsubSubscriptionSpec

Appears on:[PubsubSubscription](#pubsubsubscription), [PubsubSubscriptionStatus](#pubsubsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ackDeadlineSeconds` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `path` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `pushConfig` | ***[[]PubsubSubscriptionSpecPushConfig](#pubsubsubscriptionspecpushconfig)***| ***(Optional)*** |
| `topic` | ***string***||
## PubsubSubscriptionSpecPushConfig

Appears on:[PubsubSubscriptionSpec](#pubsubsubscriptionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `attributes` | ***map[string]string***| ***(Optional)*** |
| `pushEndpoint` | ***string***||
## PubsubSubscriptionStatus

Appears on:[PubsubSubscription](#pubsubsubscription)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PubsubSubscriptionSpec](#pubsubsubscriptionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
