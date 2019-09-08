---
title: EcrLifecyclePolicy
menu:
  docs_v0.0.1:
    identifier: ecrlifecyclepolicy-aws.kubeform.com
    name: EcrLifecyclePolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## EcrLifecyclePolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EcrLifecyclePolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EcrLifecyclePolicySpec](#EcrLifecyclePolicySpec)***||
| `status` | ***[EcrLifecyclePolicyStatus](#EcrLifecyclePolicyStatus)***||
## EcrLifecyclePolicySpec
##### (Appears on:[EcrLifecyclePolicy](#EcrLifecyclePolicy), [EcrLifecyclePolicyStatus](#EcrLifecyclePolicyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `policy` | ***string***||
| `registryID` | ***string***| ***(Optional)*** |
| `repository` | ***string***||
## EcrLifecyclePolicyStatus
##### (Appears on:[EcrLifecyclePolicy](#EcrLifecyclePolicy))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EcrLifecyclePolicySpec](#EcrLifecyclePolicySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
