---
title: AppautoscalingScheduledAction
menu:
  docs_v2020.10.13:
    identifier: appautoscalingscheduledaction-aws.kubeform.com
    name: AppautoscalingScheduledAction
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## AppautoscalingScheduledAction
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppautoscalingScheduledAction` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppautoscalingScheduledActionSpec](#appautoscalingscheduledactionspec)***||
| `status` | ***[AppautoscalingScheduledActionStatus](#appautoscalingscheduledactionstatus)***||
## AppautoscalingScheduledActionSpec

Appears on:[AppautoscalingScheduledAction](#appautoscalingscheduledaction), [AppautoscalingScheduledActionStatus](#appautoscalingscheduledactionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `endTime` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `resourceID` | ***string***||
| `scalableDimension` | ***string***| ***(Optional)*** |
| `scalableTargetAction` | ***[[]AppautoscalingScheduledActionSpecScalableTargetAction](#appautoscalingscheduledactionspecscalabletargetaction)***| ***(Optional)*** |
| `schedule` | ***string***| ***(Optional)*** |
| `serviceNamespace` | ***string***||
| `startTime` | ***string***| ***(Optional)*** |
## AppautoscalingScheduledActionSpecScalableTargetAction

Appears on:[AppautoscalingScheduledActionSpec](#appautoscalingscheduledactionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxCapacity` | ***int64***| ***(Optional)*** |
| `minCapacity` | ***int64***| ***(Optional)*** |
## AppautoscalingScheduledActionStatus

Appears on:[AppautoscalingScheduledAction](#appautoscalingscheduledaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppautoscalingScheduledActionSpec](#appautoscalingscheduledactionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppautoscalingScheduledActionStatus](#appautoscalingscheduledactionstatus)

---
