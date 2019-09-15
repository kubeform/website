---
title: DxPublicVirtualInterface
menu:
  docs_v0.0.1:
    identifier: dxpublicvirtualinterface-aws.kubeform.com
    name: DxPublicVirtualInterface
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DxPublicVirtualInterface
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DxPublicVirtualInterface` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DxPublicVirtualInterfaceSpec](#DxPublicVirtualInterfaceSpec)***||
| `status` | ***[DxPublicVirtualInterfaceStatus](#DxPublicVirtualInterfaceStatus)***||
## DxPublicVirtualInterfaceSpec
##### (Appears on:[DxPublicVirtualInterface](#DxPublicVirtualInterface), [DxPublicVirtualInterfaceStatus](#DxPublicVirtualInterfaceStatus))
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
| `name` | ***string***||
| `routeFilterPrefixes` | ***[]string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vlan` | ***int***||
## DxPublicVirtualInterfaceStatus
##### (Appears on:[DxPublicVirtualInterface](#DxPublicVirtualInterface))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DxPublicVirtualInterfaceSpec](#DxPublicVirtualInterfaceSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
