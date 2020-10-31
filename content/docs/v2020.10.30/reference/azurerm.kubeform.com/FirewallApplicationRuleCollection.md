---
title: FirewallApplicationRuleCollection
menu:
  docs_v2020.10.30:
    identifier: firewallapplicationrulecollection-azurerm.kubeform.com
    name: FirewallApplicationRuleCollection
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## FirewallApplicationRuleCollection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `FirewallApplicationRuleCollection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FirewallApplicationRuleCollectionSpec](#firewallapplicationrulecollectionspec)***||
| `status` | ***[FirewallApplicationRuleCollectionStatus](#firewallapplicationrulecollectionstatus)***||
## FirewallApplicationRuleCollectionSpec

Appears on:[FirewallApplicationRuleCollection](#firewallapplicationrulecollection), [FirewallApplicationRuleCollectionStatus](#firewallapplicationrulecollectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `action` | ***string***||
| `azureFirewallName` | ***string***||
| `name` | ***string***||
| `priority` | ***int64***||
| `resourceGroupName` | ***string***||
| `rule` | ***[[]FirewallApplicationRuleCollectionSpecRule](#firewallapplicationrulecollectionspecrule)***||
## FirewallApplicationRuleCollectionSpecRule

Appears on:[FirewallApplicationRuleCollectionSpec](#firewallapplicationrulecollectionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `description` | ***string***| ***(Optional)*** |
| `fqdnTags` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `protocol` | ***[[]FirewallApplicationRuleCollectionSpecRuleProtocol](#firewallapplicationrulecollectionspecruleprotocol)***| ***(Optional)*** |
| `sourceAddresses` | ***[]string***||
| `targetFqdns` | ***[]string***| ***(Optional)*** |
## FirewallApplicationRuleCollectionSpecRuleProtocol

Appears on:[FirewallApplicationRuleCollectionSpecRule](#firewallapplicationrulecollectionspecrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int64***| ***(Optional)*** |
| `type` | ***string***||
## FirewallApplicationRuleCollectionStatus

Appears on:[FirewallApplicationRuleCollection](#firewallapplicationrulecollection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FirewallApplicationRuleCollectionSpec](#firewallapplicationrulecollectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FirewallApplicationRuleCollectionStatus](#firewallapplicationrulecollectionstatus)

---
