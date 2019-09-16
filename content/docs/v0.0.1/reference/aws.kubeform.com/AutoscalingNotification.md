---
title: AutoscalingNotification
menu:
  docs_v0.0.1:
    identifier: autoscalingnotification-aws.kubeform.com
    name: AutoscalingNotification
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## AutoscalingNotification
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AutoscalingNotification` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AutoscalingNotificationSpec](#autoscalingnotificationspec)***||
| `status` | ***[AutoscalingNotificationStatus](#autoscalingnotificationstatus)***||
## AutoscalingNotificationSpec

Appears on:[AutoscalingNotification](#autoscalingnotification), [AutoscalingNotificationStatus](#autoscalingnotificationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `groupNames` | ***[]string***||
| `notifications` | ***[]string***||
| `topicArn` | ***string***||
## AutoscalingNotificationStatus

Appears on:[AutoscalingNotification](#autoscalingnotification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AutoscalingNotificationSpec](#autoscalingnotificationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
