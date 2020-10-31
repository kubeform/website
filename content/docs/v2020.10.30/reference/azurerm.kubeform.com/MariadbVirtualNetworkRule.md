---
title: MariadbVirtualNetworkRule
menu:
  docs_v2020.10.30:
    identifier: mariadbvirtualnetworkrule-azurerm.kubeform.com
    name: MariadbVirtualNetworkRule
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## MariadbVirtualNetworkRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MariadbVirtualNetworkRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MariadbVirtualNetworkRuleSpec](#mariadbvirtualnetworkrulespec)***||
| `status` | ***[MariadbVirtualNetworkRuleStatus](#mariadbvirtualnetworkrulestatus)***||
## MariadbVirtualNetworkRuleSpec

Appears on:[MariadbVirtualNetworkRule](#mariadbvirtualnetworkrule), [MariadbVirtualNetworkRuleStatus](#mariadbvirtualnetworkrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `serverName` | ***string***||
| `subnetID` | ***string***||
## MariadbVirtualNetworkRuleStatus

Appears on:[MariadbVirtualNetworkRule](#mariadbvirtualnetworkrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MariadbVirtualNetworkRuleSpec](#mariadbvirtualnetworkrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MariadbVirtualNetworkRuleStatus](#mariadbvirtualnetworkrulestatus)

---
