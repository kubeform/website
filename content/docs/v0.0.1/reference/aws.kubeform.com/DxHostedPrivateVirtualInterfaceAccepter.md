---
title: DxHostedPrivateVirtualInterfaceAccepter
menu:
  docs_v0.0.1:
    identifier: dxhostedprivatevirtualinterfaceaccepter-aws.kubeform.com
    name: DxHostedPrivateVirtualInterfaceAccepter
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DxHostedPrivateVirtualInterfaceAccepter
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DxHostedPrivateVirtualInterfaceAccepter` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DxHostedPrivateVirtualInterfaceAccepterSpec](#dxhostedprivatevirtualinterfaceaccepterspec)***||
| `status` | ***[DxHostedPrivateVirtualInterfaceAccepterStatus](#dxhostedprivatevirtualinterfaceaccepterstatus)***||
## DxHostedPrivateVirtualInterfaceAccepterSpec

Appears on:[DxHostedPrivateVirtualInterfaceAccepter](#dxhostedprivatevirtualinterfaceaccepter), [DxHostedPrivateVirtualInterfaceAccepterStatus](#dxhostedprivatevirtualinterfaceaccepterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `dxGatewayID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `virtualInterfaceID` | ***string***||
| `vpnGatewayID` | ***string***| ***(Optional)*** |
## DxHostedPrivateVirtualInterfaceAccepterStatus

Appears on:[DxHostedPrivateVirtualInterfaceAccepter](#dxhostedprivatevirtualinterfaceaccepter)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DxHostedPrivateVirtualInterfaceAccepterSpec](#dxhostedprivatevirtualinterfaceaccepterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
