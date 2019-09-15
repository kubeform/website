---
title: MysqlVirtualNetworkRule
menu:
  docs_v0.0.1:
    identifier: mysqlvirtualnetworkrule-azurerm.kubeform.com
    name: MysqlVirtualNetworkRule
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## MysqlVirtualNetworkRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MysqlVirtualNetworkRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MysqlVirtualNetworkRuleSpec](#MysqlVirtualNetworkRuleSpec)***||
| `status` | ***[MysqlVirtualNetworkRuleStatus](#MysqlVirtualNetworkRuleStatus)***||
## MysqlVirtualNetworkRuleSpec
##### (Appears on:[MysqlVirtualNetworkRule](#MysqlVirtualNetworkRule), [MysqlVirtualNetworkRuleStatus](#MysqlVirtualNetworkRuleStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `serverName` | ***string***||
| `subnetID` | ***string***||
## MysqlVirtualNetworkRuleStatus
##### (Appears on:[MysqlVirtualNetworkRule](#MysqlVirtualNetworkRule))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MysqlVirtualNetworkRuleSpec](#MysqlVirtualNetworkRuleSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
