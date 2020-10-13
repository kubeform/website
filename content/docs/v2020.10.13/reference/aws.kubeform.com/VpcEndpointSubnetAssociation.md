---
title: VpcEndpointSubnetAssociation
menu:
  docs_v2020.10.13:
    identifier: vpcendpointsubnetassociation-aws.kubeform.com
    name: VpcEndpointSubnetAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## VpcEndpointSubnetAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpcEndpointSubnetAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcEndpointSubnetAssociationSpec](#vpcendpointsubnetassociationspec)***||
| `status` | ***[VpcEndpointSubnetAssociationStatus](#vpcendpointsubnetassociationstatus)***||
## Phase(`string` alias)

Appears on:[VpcEndpointSubnetAssociationStatus](#vpcendpointsubnetassociationstatus)

## VpcEndpointSubnetAssociationSpec

Appears on:[VpcEndpointSubnetAssociation](#vpcendpointsubnetassociation), [VpcEndpointSubnetAssociationStatus](#vpcendpointsubnetassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `subnetID` | ***string***||
| `vpcEndpointID` | ***string***||
## VpcEndpointSubnetAssociationStatus

Appears on:[VpcEndpointSubnetAssociation](#vpcendpointsubnetassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcEndpointSubnetAssociationSpec](#vpcendpointsubnetassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
