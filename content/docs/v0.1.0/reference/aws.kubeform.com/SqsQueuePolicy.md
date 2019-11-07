---
title: SqsQueuePolicy
menu:
  docs_v0.1.0:
    identifier: sqsqueuepolicy-aws.kubeform.com
    name: SqsQueuePolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## SqsQueuePolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SqsQueuePolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqsQueuePolicySpec](#sqsqueuepolicyspec)***||
| `status` | ***[SqsQueuePolicyStatus](#sqsqueuepolicystatus)***||
## Phase(`string` alias)

Appears on:[SqsQueuePolicyStatus](#sqsqueuepolicystatus)

## SqsQueuePolicySpec

Appears on:[SqsQueuePolicy](#sqsqueuepolicy), [SqsQueuePolicyStatus](#sqsqueuepolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `policy` | ***string***||
| `queueURL` | ***string***||
## SqsQueuePolicyStatus

Appears on:[SqsQueuePolicy](#sqsqueuepolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqsQueuePolicySpec](#sqsqueuepolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
