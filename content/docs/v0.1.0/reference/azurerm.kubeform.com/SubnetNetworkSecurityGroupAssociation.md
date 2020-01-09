---
title: SubnetNetworkSecurityGroupAssociation
menu:
  docs_v0.1.0:
    identifier: subnetnetworksecuritygroupassociation-azurerm.kubeform.com
    name: SubnetNetworkSecurityGroupAssociation
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## SubnetNetworkSecurityGroupAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SubnetNetworkSecurityGroupAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SubnetNetworkSecurityGroupAssociationSpec](#subnetnetworksecuritygroupassociationspec)***||
| `status` | ***[SubnetNetworkSecurityGroupAssociationStatus](#subnetnetworksecuritygroupassociationstatus)***||
## Phase(`string` alias)

Appears on:[SubnetNetworkSecurityGroupAssociationStatus](#subnetnetworksecuritygroupassociationstatus)

## SubnetNetworkSecurityGroupAssociationSpec

Appears on:[SubnetNetworkSecurityGroupAssociation](#subnetnetworksecuritygroupassociation), [SubnetNetworkSecurityGroupAssociationStatus](#subnetnetworksecuritygroupassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `networkSecurityGroupID` | ***string***||
| `subnetID` | ***string***||
## SubnetNetworkSecurityGroupAssociationStatus

Appears on:[SubnetNetworkSecurityGroupAssociation](#subnetnetworksecuritygroupassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SubnetNetworkSecurityGroupAssociationSpec](#subnetnetworksecuritygroupassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---