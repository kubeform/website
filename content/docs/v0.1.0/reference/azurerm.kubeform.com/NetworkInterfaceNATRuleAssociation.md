---
title: NetworkInterfaceNATRuleAssociation
menu:
  docs_v0.1.0:
    identifier: networkinterfacenatruleassociation-azurerm.kubeform.com
    name: NetworkInterfaceNATRuleAssociation
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## NetworkInterfaceNATRuleAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkInterfaceNATRuleAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkInterfaceNATRuleAssociationSpec](#networkinterfacenatruleassociationspec)***||
| `status` | ***[NetworkInterfaceNATRuleAssociationStatus](#networkinterfacenatruleassociationstatus)***||
## NetworkInterfaceNATRuleAssociationSpec

Appears on:[NetworkInterfaceNATRuleAssociation](#networkinterfacenatruleassociation), [NetworkInterfaceNATRuleAssociationStatus](#networkinterfacenatruleassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ipConfigurationName` | ***string***||
| `natRuleID` | ***string***||
| `networkInterfaceID` | ***string***||
## NetworkInterfaceNATRuleAssociationStatus

Appears on:[NetworkInterfaceNATRuleAssociation](#networkinterfacenatruleassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkInterfaceNATRuleAssociationSpec](#networkinterfacenatruleassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NetworkInterfaceNATRuleAssociationStatus](#networkinterfacenatruleassociationstatus)

---
