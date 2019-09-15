---
title: EcrRepositoryPolicy
menu:
  docs_v0.0.1:
    identifier: ecrrepositorypolicy-aws.kubeform.com
    name: EcrRepositoryPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## EcrRepositoryPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EcrRepositoryPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EcrRepositoryPolicySpec](#EcrRepositoryPolicySpec)***||
| `status` | ***[EcrRepositoryPolicyStatus](#EcrRepositoryPolicyStatus)***||
## EcrRepositoryPolicySpec
##### (Appears on:[EcrRepositoryPolicy](#EcrRepositoryPolicy), [EcrRepositoryPolicyStatus](#EcrRepositoryPolicyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `policy` | ***string***||
| `registryID` | ***string***| ***(Optional)*** |
| `repository` | ***string***||
## EcrRepositoryPolicyStatus
##### (Appears on:[EcrRepositoryPolicy](#EcrRepositoryPolicy))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EcrRepositoryPolicySpec](#EcrRepositoryPolicySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
