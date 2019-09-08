---
title: DxHostedPrivateVirtualInterface
menu:
  docs_v0.0.1:
    identifier: dxhostedprivatevirtualinterface-aws.kubeform.com
    name: DxHostedPrivateVirtualInterface
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## DxHostedPrivateVirtualInterface
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DxHostedPrivateVirtualInterface` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DxHostedPrivateVirtualInterfaceSpec](#DxHostedPrivateVirtualInterfaceSpec)***||
| `status` | ***[DxHostedPrivateVirtualInterfaceStatus](#DxHostedPrivateVirtualInterfaceStatus)***||
## DxHostedPrivateVirtualInterfaceSpec
##### (Appears on:[DxHostedPrivateVirtualInterface](#DxHostedPrivateVirtualInterface), [DxHostedPrivateVirtualInterfaceStatus](#DxHostedPrivateVirtualInterfaceStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `addressFamily` | ***string***||
| `amazonAddress` | ***string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `awsDevice` | ***string***| ***(Optional)*** |
| `bgpAsn` | ***int***||
| `bgpAuthKey` | ***string***| ***(Optional)*** |
| `connectionID` | ***string***||
| `customerAddress` | ***string***| ***(Optional)*** |
| `jumboFrameCapable` | ***bool***| ***(Optional)*** |
| `mtu` | ***int***| ***(Optional)*** |
| `name` | ***string***||
| `ownerAccountID` | ***string***||
| `vlan` | ***int***||
## DxHostedPrivateVirtualInterfaceStatus
##### (Appears on:[DxHostedPrivateVirtualInterface](#DxHostedPrivateVirtualInterface))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DxHostedPrivateVirtualInterfaceSpec](#DxHostedPrivateVirtualInterfaceSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---