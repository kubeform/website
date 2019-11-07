---
title: PubsubTopicIamPolicy
menu:
  docs_v0.1.0:
    identifier: pubsubtopiciampolicy-google.kubeform.com
    name: PubsubTopicIamPolicy
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## PubsubTopicIamPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `PubsubTopicIamPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PubsubTopicIamPolicySpec](#pubsubtopiciampolicyspec)***||
| `status` | ***[PubsubTopicIamPolicyStatus](#pubsubtopiciampolicystatus)***||
## Phase(`string` alias)

Appears on:[PubsubTopicIamPolicyStatus](#pubsubtopiciampolicystatus)

## PubsubTopicIamPolicySpec

Appears on:[PubsubTopicIamPolicy](#pubsubtopiciampolicy), [PubsubTopicIamPolicyStatus](#pubsubtopiciampolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `policyData` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `topic` | ***string***||
## PubsubTopicIamPolicyStatus

Appears on:[PubsubTopicIamPolicy](#pubsubtopiciampolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PubsubTopicIamPolicySpec](#pubsubtopiciampolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
