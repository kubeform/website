---
title: RedshiftEventSubscription
menu:
  docs_v2020.10.13:
    identifier: redshifteventsubscription-aws.kubeform.com
    name: RedshiftEventSubscription
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## RedshiftEventSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RedshiftEventSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RedshiftEventSubscriptionSpec](#redshifteventsubscriptionspec)***||
| `status` | ***[RedshiftEventSubscriptionStatus](#redshifteventsubscriptionstatus)***||
## Phase(`string` alias)

Appears on:[RedshiftEventSubscriptionStatus](#redshifteventsubscriptionstatus)

## RedshiftEventSubscriptionSpec

Appears on:[RedshiftEventSubscription](#redshifteventsubscription), [RedshiftEventSubscriptionStatus](#redshifteventsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `customerAwsID` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `eventCategories` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `severity` | ***string***| ***(Optional)*** |
| `snsTopicArn` | ***string***||
| `sourceIDS` | ***[]string***| ***(Optional)*** |
| `sourceType` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## RedshiftEventSubscriptionStatus

Appears on:[RedshiftEventSubscription](#redshifteventsubscription)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RedshiftEventSubscriptionSpec](#redshifteventsubscriptionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
