---
title: NetworkDdosProtectionPlan
menu:
  docs_v0.0.1:
    identifier: networkddosprotectionplan-azurerm.kubeform.com
    name: NetworkDdosProtectionPlan
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## NetworkDdosProtectionPlan
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkDdosProtectionPlan` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkDdosProtectionPlanSpec](#NetworkDdosProtectionPlanSpec)***||
| `status` | ***[NetworkDdosProtectionPlanStatus](#NetworkDdosProtectionPlanStatus)***||
## NetworkDdosProtectionPlanSpec
##### (Appears on:[NetworkDdosProtectionPlan](#NetworkDdosProtectionPlan), [NetworkDdosProtectionPlanStatus](#NetworkDdosProtectionPlanStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `virtualNetworkIDS` | ***[]string***| ***(Optional)*** |
## NetworkDdosProtectionPlanStatus
##### (Appears on:[NetworkDdosProtectionPlan](#NetworkDdosProtectionPlan))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkDdosProtectionPlanSpec](#NetworkDdosProtectionPlanSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
