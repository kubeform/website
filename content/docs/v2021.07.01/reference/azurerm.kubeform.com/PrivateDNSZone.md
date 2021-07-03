---
title: PrivateDNSZone
menu:
  docs_v2021.07.01:
    identifier: privatednszone-azurerm.kubeform.com
    name: PrivateDNSZone
    parent: azurerm.kubeform.com-reference
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

## PrivateDNSZone
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PrivateDNSZone` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PrivateDNSZoneSpec](#privatednszonespec)***||
| `status` | ***[PrivateDNSZoneStatus](#privatednszonestatus)***||
## Phase(`string` alias)

Appears on:[PrivateDNSZoneStatus](#privatednszonestatus)

## PrivateDNSZoneSpec

Appears on:[PrivateDNSZone](#privatednszone), [PrivateDNSZoneStatus](#privatednszonestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `maxNumberOfRecordSets` | ***int64***| ***(Optional)*** |
| `maxNumberOfVirtualNetworkLinks` | ***int64***| ***(Optional)*** |
| `maxNumberOfVirtualNetworkLinksWithRegistration` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `numberOfRecordSets` | ***int64***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## PrivateDNSZoneStatus

Appears on:[PrivateDNSZone](#privatednszone)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PrivateDNSZoneSpec](#privatednszonespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
