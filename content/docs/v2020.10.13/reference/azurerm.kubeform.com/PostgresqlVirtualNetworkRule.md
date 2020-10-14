---
title: PostgresqlVirtualNetworkRule
menu:
  docs_v2020.10.13:
    identifier: postgresqlvirtualnetworkrule-azurerm.kubeform.com
    name: PostgresqlVirtualNetworkRule
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## PostgresqlVirtualNetworkRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PostgresqlVirtualNetworkRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PostgresqlVirtualNetworkRuleSpec](#postgresqlvirtualnetworkrulespec)***||
| `status` | ***[PostgresqlVirtualNetworkRuleStatus](#postgresqlvirtualnetworkrulestatus)***||
## Phase(`string` alias)

Appears on:[PostgresqlVirtualNetworkRuleStatus](#postgresqlvirtualnetworkrulestatus)

## PostgresqlVirtualNetworkRuleSpec

Appears on:[PostgresqlVirtualNetworkRule](#postgresqlvirtualnetworkrule), [PostgresqlVirtualNetworkRuleStatus](#postgresqlvirtualnetworkrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ignoreMissingVnetServiceEndpoint` | ***bool***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `serverName` | ***string***||
| `subnetID` | ***string***||
## PostgresqlVirtualNetworkRuleStatus

Appears on:[PostgresqlVirtualNetworkRule](#postgresqlvirtualnetworkrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PostgresqlVirtualNetworkRuleSpec](#postgresqlvirtualnetworkrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
