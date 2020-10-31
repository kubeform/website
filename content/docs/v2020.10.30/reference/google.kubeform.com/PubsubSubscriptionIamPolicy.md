---
title: PubsubSubscriptionIamPolicy
menu:
  docs_v2020.10.30:
    identifier: pubsubsubscriptioniampolicy-google.kubeform.com
    name: PubsubSubscriptionIamPolicy
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## PubsubSubscriptionIamPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `PubsubSubscriptionIamPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PubsubSubscriptionIamPolicySpec](#pubsubsubscriptioniampolicyspec)***||
| `status` | ***[PubsubSubscriptionIamPolicyStatus](#pubsubsubscriptioniampolicystatus)***||
## Phase(`string` alias)

Appears on:[PubsubSubscriptionIamPolicyStatus](#pubsubsubscriptioniampolicystatus)

## PubsubSubscriptionIamPolicySpec

Appears on:[PubsubSubscriptionIamPolicy](#pubsubsubscriptioniampolicy), [PubsubSubscriptionIamPolicyStatus](#pubsubsubscriptioniampolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `policyData` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `subscription` | ***string***||
## PubsubSubscriptionIamPolicyStatus

Appears on:[PubsubSubscriptionIamPolicy](#pubsubsubscriptioniampolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PubsubSubscriptionIamPolicySpec](#pubsubsubscriptioniampolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
