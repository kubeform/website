---
title: SecurityhubProductSubscription
menu:
  docs_v0.0.1:
    identifier: securityhubproductsubscription-aws.kubeform.com
    name: SecurityhubProductSubscription
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## SecurityhubProductSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SecurityhubProductSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SecurityhubProductSubscriptionSpec](#SecurityhubProductSubscriptionSpec)***||
| `status` | ***[SecurityhubProductSubscriptionStatus](#SecurityhubProductSubscriptionStatus)***||
## SecurityhubProductSubscriptionSpec
##### (Appears on:[SecurityhubProductSubscription](#SecurityhubProductSubscription), [SecurityhubProductSubscriptionStatus](#SecurityhubProductSubscriptionStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `productArn` | ***string***||
## SecurityhubProductSubscriptionStatus
##### (Appears on:[SecurityhubProductSubscription](#SecurityhubProductSubscription))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SecurityhubProductSubscriptionSpec](#SecurityhubProductSubscriptionSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
