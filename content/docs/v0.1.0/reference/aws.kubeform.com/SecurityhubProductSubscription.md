---
title: SecurityhubProductSubscription
menu:
  docs_v0.1.0:
    identifier: securityhubproductsubscription-aws.kubeform.com
    name: SecurityhubProductSubscription
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## SecurityhubProductSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SecurityhubProductSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SecurityhubProductSubscriptionSpec](#securityhubproductsubscriptionspec)***||
| `status` | ***[SecurityhubProductSubscriptionStatus](#securityhubproductsubscriptionstatus)***||
## Phase(`string` alias)

Appears on:[SecurityhubProductSubscriptionStatus](#securityhubproductsubscriptionstatus)

## SecurityhubProductSubscriptionSpec

Appears on:[SecurityhubProductSubscription](#securityhubproductsubscription), [SecurityhubProductSubscriptionStatus](#securityhubproductsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `productArn` | ***string***||
## SecurityhubProductSubscriptionStatus

Appears on:[SecurityhubProductSubscription](#securityhubproductsubscription)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SecurityhubProductSubscriptionSpec](#securityhubproductsubscriptionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
