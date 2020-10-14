---
title: SesIdentityNotificationTopic
menu:
  docs_v2020.10.13:
    identifier: sesidentitynotificationtopic-aws.kubeform.com
    name: SesIdentityNotificationTopic
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## SesIdentityNotificationTopic
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SesIdentityNotificationTopic` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SesIdentityNotificationTopicSpec](#sesidentitynotificationtopicspec)***||
| `status` | ***[SesIdentityNotificationTopicStatus](#sesidentitynotificationtopicstatus)***||
## Phase(`string` alias)

Appears on:[SesIdentityNotificationTopicStatus](#sesidentitynotificationtopicstatus)

## SesIdentityNotificationTopicSpec

Appears on:[SesIdentityNotificationTopic](#sesidentitynotificationtopic), [SesIdentityNotificationTopicStatus](#sesidentitynotificationtopicstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `identity` | ***string***||
| `notificationType` | ***string***||
| `topicArn` | ***string***| ***(Optional)*** |
## SesIdentityNotificationTopicStatus

Appears on:[SesIdentityNotificationTopic](#sesidentitynotificationtopic)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SesIdentityNotificationTopicSpec](#sesidentitynotificationtopicspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
