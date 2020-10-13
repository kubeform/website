---
title: SubnetRouteTableAssociation
menu:
  docs_v2020.10.13:
    identifier: subnetroutetableassociation-azurerm.kubeform.com
    name: SubnetRouteTableAssociation
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## SubnetRouteTableAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SubnetRouteTableAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SubnetRouteTableAssociationSpec](#subnetroutetableassociationspec)***||
| `status` | ***[SubnetRouteTableAssociationStatus](#subnetroutetableassociationstatus)***||
## Phase(`string` alias)

Appears on:[SubnetRouteTableAssociationStatus](#subnetroutetableassociationstatus)

## SubnetRouteTableAssociationSpec

Appears on:[SubnetRouteTableAssociation](#subnetroutetableassociation), [SubnetRouteTableAssociationStatus](#subnetroutetableassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `routeTableID` | ***string***||
| `subnetID` | ***string***||
## SubnetRouteTableAssociationStatus

Appears on:[SubnetRouteTableAssociation](#subnetroutetableassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SubnetRouteTableAssociationSpec](#subnetroutetableassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
