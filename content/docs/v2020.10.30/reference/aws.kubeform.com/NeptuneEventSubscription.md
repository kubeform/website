---
title: NeptuneEventSubscription
menu:
  docs_v2020.10.30:
    identifier: neptuneeventsubscription-aws.kubeform.com
    name: NeptuneEventSubscription
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## NeptuneEventSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `NeptuneEventSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NeptuneEventSubscriptionSpec](#neptuneeventsubscriptionspec)***||
| `status` | ***[NeptuneEventSubscriptionStatus](#neptuneeventsubscriptionstatus)***||
## NeptuneEventSubscriptionSpec

Appears on:[NeptuneEventSubscription](#neptuneeventsubscription), [NeptuneEventSubscriptionStatus](#neptuneeventsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `customerAwsID` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `eventCategories` | ***[]string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `snsTopicArn` | ***string***||
| `sourceIDS` | ***[]string***| ***(Optional)*** |
| `sourceType` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## NeptuneEventSubscriptionStatus

Appears on:[NeptuneEventSubscription](#neptuneeventsubscription)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NeptuneEventSubscriptionSpec](#neptuneeventsubscriptionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NeptuneEventSubscriptionStatus](#neptuneeventsubscriptionstatus)

---
