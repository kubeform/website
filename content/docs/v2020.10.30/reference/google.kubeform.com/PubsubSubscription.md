---
title: PubsubSubscription
menu:
  docs_v2020.10.30:
    identifier: pubsubsubscription-google.kubeform.com
    name: PubsubSubscription
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## PubsubSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `PubsubSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PubsubSubscriptionSpec](#pubsubsubscriptionspec)***||
| `status` | ***[PubsubSubscriptionStatus](#pubsubsubscriptionstatus)***||
## Phase(`string` alias)

Appears on:[PubsubSubscriptionStatus](#pubsubsubscriptionstatus)

## PubsubSubscriptionSpec

Appears on:[PubsubSubscription](#pubsubsubscription), [PubsubSubscriptionStatus](#pubsubsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ackDeadlineSeconds` | ***int64***| ***(Optional)*** |
| `expirationPolicy` | ***[[]PubsubSubscriptionSpecExpirationPolicy](#pubsubsubscriptionspecexpirationpolicy)***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `messageRetentionDuration` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `path` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `pushConfig` | ***[[]PubsubSubscriptionSpecPushConfig](#pubsubsubscriptionspecpushconfig)***| ***(Optional)*** |
| `retainAckedMessages` | ***bool***| ***(Optional)*** |
| `topic` | ***string***||
## PubsubSubscriptionSpecExpirationPolicy

Appears on:[PubsubSubscriptionSpec](#pubsubsubscriptionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ttl` | ***string***| ***(Optional)*** |
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
