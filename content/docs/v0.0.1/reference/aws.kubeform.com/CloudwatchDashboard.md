---
title: CloudwatchDashboard
menu:
  docs_v0.0.1:
    identifier: cloudwatchdashboard-aws.kubeform.com
    name: CloudwatchDashboard
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## CloudwatchDashboard
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudwatchDashboard` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudwatchDashboardSpec](#CloudwatchDashboardSpec)***||
| `status` | ***[CloudwatchDashboardStatus](#CloudwatchDashboardStatus)***||
## CloudwatchDashboardSpec
##### (Appears on:[CloudwatchDashboard](#CloudwatchDashboard), [CloudwatchDashboardStatus](#CloudwatchDashboardStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `dashboardArn` | ***string***| ***(Optional)*** |
| `dashboardBody` | ***string***||
| `dashboardName` | ***string***||
## CloudwatchDashboardStatus
##### (Appears on:[CloudwatchDashboard](#CloudwatchDashboard))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudwatchDashboardSpec](#CloudwatchDashboardSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---