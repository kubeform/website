---
title: SsmMaintenanceWindow
menu:
  docs_v0.0.1:
    identifier: ssmmaintenancewindow-aws.kubeform.com
    name: SsmMaintenanceWindow
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## SsmMaintenanceWindow
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmMaintenanceWindow` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmMaintenanceWindowSpec](#SsmMaintenanceWindowSpec)***||
| `status` | ***[SsmMaintenanceWindowStatus](#SsmMaintenanceWindowStatus)***||
## SsmMaintenanceWindowSpec
##### (Appears on:[SsmMaintenanceWindow](#SsmMaintenanceWindow), [SsmMaintenanceWindowStatus](#SsmMaintenanceWindowStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allowUnassociatedTargets` | ***bool***| ***(Optional)*** |
| `cutoff` | ***int***||
| `duration` | ***int***||
| `enabled` | ***bool***| ***(Optional)*** |
| `endDate` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `schedule` | ***string***||
| `scheduleTimezone` | ***string***| ***(Optional)*** |
| `startDate` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SsmMaintenanceWindowStatus
##### (Appears on:[SsmMaintenanceWindow](#SsmMaintenanceWindow))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmMaintenanceWindowSpec](#SsmMaintenanceWindowSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
