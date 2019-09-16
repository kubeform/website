---
title: AppautoscalingTarget
menu:
  docs_v0.0.1:
    identifier: appautoscalingtarget-aws.kubeform.com
    name: AppautoscalingTarget
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## AppautoscalingTarget
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppautoscalingTarget` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppautoscalingTargetSpec](#appautoscalingtargetspec)***||
| `status` | ***[AppautoscalingTargetStatus](#appautoscalingtargetstatus)***||
## AppautoscalingTargetSpec

Appears on:[AppautoscalingTarget](#appautoscalingtarget), [AppautoscalingTargetStatus](#appautoscalingtargetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `maxCapacity` | ***int***||
| `minCapacity` | ***int***||
| `resourceID` | ***string***||
| `roleArn` | ***string***| ***(Optional)*** |
| `scalableDimension` | ***string***||
| `serviceNamespace` | ***string***||
## AppautoscalingTargetStatus

Appears on:[AppautoscalingTarget](#appautoscalingtarget)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppautoscalingTargetSpec](#appautoscalingtargetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
