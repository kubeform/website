---
title: Ec2TransitGatewayRouteTableAssociation
menu:
  docs_v2021.07.01:
    identifier: ec2transitgatewayroutetableassociation-aws.kubeform.com
    name: Ec2TransitGatewayRouteTableAssociation
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

## Ec2TransitGatewayRouteTableAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Ec2TransitGatewayRouteTableAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Ec2TransitGatewayRouteTableAssociationSpec](#ec2transitgatewayroutetableassociationspec)***||
| `status` | ***[Ec2TransitGatewayRouteTableAssociationStatus](#ec2transitgatewayroutetableassociationstatus)***||
## Ec2TransitGatewayRouteTableAssociationSpec

Appears on:[Ec2TransitGatewayRouteTableAssociation](#ec2transitgatewayroutetableassociation), [Ec2TransitGatewayRouteTableAssociationStatus](#ec2transitgatewayroutetableassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `resourceID` | ***string***| ***(Optional)*** |
| `resourceType` | ***string***| ***(Optional)*** |
| `transitGatewayAttachmentID` | ***string***||
| `transitGatewayRouteTableID` | ***string***||
## Ec2TransitGatewayRouteTableAssociationStatus

Appears on:[Ec2TransitGatewayRouteTableAssociation](#ec2transitgatewayroutetableassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Ec2TransitGatewayRouteTableAssociationSpec](#ec2transitgatewayroutetableassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[Ec2TransitGatewayRouteTableAssociationStatus](#ec2transitgatewayroutetableassociationstatus)

---
