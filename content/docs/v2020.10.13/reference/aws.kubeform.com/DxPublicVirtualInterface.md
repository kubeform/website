---
title: DxPublicVirtualInterface
menu:
  docs_v2020.10.13:
    identifier: dxpublicvirtualinterface-aws.kubeform.com
    name: DxPublicVirtualInterface
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## DxPublicVirtualInterface
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DxPublicVirtualInterface` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DxPublicVirtualInterfaceSpec](#dxpublicvirtualinterfacespec)***||
| `status` | ***[DxPublicVirtualInterfaceStatus](#dxpublicvirtualinterfacestatus)***||
## DxPublicVirtualInterfaceSpec

Appears on:[DxPublicVirtualInterface](#dxpublicvirtualinterface), [DxPublicVirtualInterfaceStatus](#dxpublicvirtualinterfacestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `addressFamily` | ***string***||
| `amazonAddress` | ***string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `awsDevice` | ***string***| ***(Optional)*** |
| `bgpAsn` | ***int64***||
| `bgpAuthKey` | ***string***| ***(Optional)*** |
| `connectionID` | ***string***||
| `customerAddress` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `routeFilterPrefixes` | ***[]string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vlan` | ***int64***||
## DxPublicVirtualInterfaceStatus

Appears on:[DxPublicVirtualInterface](#dxpublicvirtualinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DxPublicVirtualInterfaceSpec](#dxpublicvirtualinterfacespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DxPublicVirtualInterfaceStatus](#dxpublicvirtualinterfacestatus)

---
