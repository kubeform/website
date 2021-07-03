---
title: SsmMaintenanceWindow
menu:
  docs_v2021.07.01:
    identifier: ssmmaintenancewindow-aws.kubeform.com
    name: SsmMaintenanceWindow
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## SsmMaintenanceWindow
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmMaintenanceWindow` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmMaintenanceWindowSpec](#ssmmaintenancewindowspec)***||
| `status` | ***[SsmMaintenanceWindowStatus](#ssmmaintenancewindowstatus)***||
## Phase(`string` alias)

Appears on:[SsmMaintenanceWindowStatus](#ssmmaintenancewindowstatus)

## SsmMaintenanceWindowSpec

Appears on:[SsmMaintenanceWindow](#ssmmaintenancewindow), [SsmMaintenanceWindowStatus](#ssmmaintenancewindowstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allowUnassociatedTargets` | ***bool***| ***(Optional)*** |
| `cutoff` | ***int64***||
| `duration` | ***int64***||
| `enabled` | ***bool***| ***(Optional)*** |
| `endDate` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `schedule` | ***string***||
| `scheduleTimezone` | ***string***| ***(Optional)*** |
| `startDate` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SsmMaintenanceWindowStatus

Appears on:[SsmMaintenanceWindow](#ssmmaintenancewindow)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmMaintenanceWindowSpec](#ssmmaintenancewindowspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
