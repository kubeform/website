---
title: Ec2TransitGatewayRouteTable
menu:
  docs_v0.0.1:
    identifier: ec2transitgatewayroutetable-aws.kubeform.com
    name: Ec2TransitGatewayRouteTable
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## Ec2TransitGatewayRouteTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Ec2TransitGatewayRouteTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Ec2TransitGatewayRouteTableSpec](#Ec2TransitGatewayRouteTableSpec)***||
| `status` | ***[Ec2TransitGatewayRouteTableStatus](#Ec2TransitGatewayRouteTableStatus)***||
## Ec2TransitGatewayRouteTableSpec
##### (Appears on:[Ec2TransitGatewayRouteTable](#Ec2TransitGatewayRouteTable), [Ec2TransitGatewayRouteTableStatus](#Ec2TransitGatewayRouteTableStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `defaultAssociationRouteTable` | ***bool***| ***(Optional)*** |
| `defaultPropagationRouteTable` | ***bool***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `transitGatewayID` | ***string***||
## Ec2TransitGatewayRouteTableStatus
##### (Appears on:[Ec2TransitGatewayRouteTable](#Ec2TransitGatewayRouteTable))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Ec2TransitGatewayRouteTableSpec](#Ec2TransitGatewayRouteTableSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
