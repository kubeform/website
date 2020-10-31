---
title: SecurityhubProductSubscription
menu:
  docs_v2020.10.30:
    identifier: securityhubproductsubscription-aws.kubeform.com
    name: SecurityhubProductSubscription
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## SecurityhubProductSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SecurityhubProductSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SecurityhubProductSubscriptionSpec](#securityhubproductsubscriptionspec)***||
| `status` | ***[SecurityhubProductSubscriptionStatus](#securityhubproductsubscriptionstatus)***||
## Phase(`string` alias)

Appears on:[SecurityhubProductSubscriptionStatus](#securityhubproductsubscriptionstatus)

## SecurityhubProductSubscriptionSpec

Appears on:[SecurityhubProductSubscription](#securityhubproductsubscription), [SecurityhubProductSubscriptionStatus](#securityhubproductsubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
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
