---
title: Ec2TransitGatewayRouteTablePropagation
menu:
  docs_v0.0.1:
    identifier: ec2transitgatewayroutetablepropagation-aws.kubeform.com
    name: Ec2TransitGatewayRouteTablePropagation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## Ec2TransitGatewayRouteTablePropagation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Ec2TransitGatewayRouteTablePropagation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Ec2TransitGatewayRouteTablePropagationSpec](#Ec2TransitGatewayRouteTablePropagationSpec)***||
| `status` | ***[Ec2TransitGatewayRouteTablePropagationStatus](#Ec2TransitGatewayRouteTablePropagationStatus)***||
## Ec2TransitGatewayRouteTablePropagationSpec
##### (Appears on:[Ec2TransitGatewayRouteTablePropagation](#Ec2TransitGatewayRouteTablePropagation), [Ec2TransitGatewayRouteTablePropagationStatus](#Ec2TransitGatewayRouteTablePropagationStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `resourceID` | ***string***| ***(Optional)*** |
| `resourceType` | ***string***| ***(Optional)*** |
| `transitGatewayAttachmentID` | ***string***||
| `transitGatewayRouteTableID` | ***string***||
## Ec2TransitGatewayRouteTablePropagationStatus
##### (Appears on:[Ec2TransitGatewayRouteTablePropagation](#Ec2TransitGatewayRouteTablePropagation))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Ec2TransitGatewayRouteTablePropagationSpec](#Ec2TransitGatewayRouteTablePropagationSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---