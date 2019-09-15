---
title: MonitoringNotificationChannel
menu:
  docs_v0.0.1:
    identifier: monitoringnotificationchannel-google.kubeform.com
    name: MonitoringNotificationChannel
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## MonitoringNotificationChannel
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `MonitoringNotificationChannel` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MonitoringNotificationChannelSpec](#MonitoringNotificationChannelSpec)***||
| `status` | ***[MonitoringNotificationChannelStatus](#MonitoringNotificationChannelStatus)***||
## MonitoringNotificationChannelSpec
##### (Appears on:[MonitoringNotificationChannel](#MonitoringNotificationChannel), [MonitoringNotificationChannelStatus](#MonitoringNotificationChannelStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `displayName` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `type` | ***string***||
| `userLabels` | ***map[string]string***| ***(Optional)*** |
| `verificationStatus` | ***string***| ***(Optional)*** |
## MonitoringNotificationChannelStatus
##### (Appears on:[MonitoringNotificationChannel](#MonitoringNotificationChannel))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MonitoringNotificationChannelSpec](#MonitoringNotificationChannelSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
