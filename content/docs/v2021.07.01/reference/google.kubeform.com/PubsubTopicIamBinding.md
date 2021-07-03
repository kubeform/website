---
title: PubsubTopicIamBinding
menu:
  docs_v2021.07.01:
    identifier: pubsubtopiciambinding-google.kubeform.com
    name: PubsubTopicIamBinding
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## PubsubTopicIamBinding
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `PubsubTopicIamBinding` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PubsubTopicIamBindingSpec](#pubsubtopiciambindingspec)***||
| `status` | ***[PubsubTopicIamBindingStatus](#pubsubtopiciambindingstatus)***||
## Phase(`string` alias)

Appears on:[PubsubTopicIamBindingStatus](#pubsubtopiciambindingstatus)

## PubsubTopicIamBindingSpec

Appears on:[PubsubTopicIamBinding](#pubsubtopiciambinding), [PubsubTopicIamBindingStatus](#pubsubtopiciambindingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `members` | ***[]string***||
| `project` | ***string***| ***(Optional)*** |
| `role` | ***string***||
| `topic` | ***string***||
## PubsubTopicIamBindingStatus

Appears on:[PubsubTopicIamBinding](#pubsubtopiciambinding)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PubsubTopicIamBindingSpec](#pubsubtopiciambindingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
