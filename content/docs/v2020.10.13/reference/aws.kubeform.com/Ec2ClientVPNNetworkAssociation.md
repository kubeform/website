---
title: Ec2ClientVPNNetworkAssociation
menu:
  docs_v2020.10.13:
    identifier: ec2clientvpnnetworkassociation-aws.kubeform.com
    name: Ec2ClientVPNNetworkAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## Ec2ClientVPNNetworkAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Ec2ClientVPNNetworkAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Ec2ClientVPNNetworkAssociationSpec](#ec2clientvpnnetworkassociationspec)***||
| `status` | ***[Ec2ClientVPNNetworkAssociationStatus](#ec2clientvpnnetworkassociationstatus)***||
## Ec2ClientVPNNetworkAssociationSpec

Appears on:[Ec2ClientVPNNetworkAssociation](#ec2clientvpnnetworkassociation), [Ec2ClientVPNNetworkAssociationStatus](#ec2clientvpnnetworkassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `clientVPNEndpointID` | ***string***||
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `subnetID` | ***string***||
| `vpcID` | ***string***| ***(Optional)*** |
## Ec2ClientVPNNetworkAssociationStatus

Appears on:[Ec2ClientVPNNetworkAssociation](#ec2clientvpnnetworkassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Ec2ClientVPNNetworkAssociationSpec](#ec2clientvpnnetworkassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[Ec2ClientVPNNetworkAssociationStatus](#ec2clientvpnnetworkassociationstatus)

---
