---
title: PrivateDNSZone
menu:
  docs_v0.1.0:
    identifier: privatednszone-azurerm.kubeform.com
    name: PrivateDNSZone
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## PrivateDNSZone
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PrivateDNSZone` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PrivateDNSZoneSpec](#privatednszonespec)***||
| `status` | ***[PrivateDNSZoneStatus](#privatednszonestatus)***||
## Phase(`string` alias)

Appears on:[PrivateDNSZoneStatus](#privatednszonestatus)

## PrivateDNSZoneSpec

Appears on:[PrivateDNSZone](#privatednszone), [PrivateDNSZoneStatus](#privatednszonestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `maxNumberOfRecordSets` | ***int***| ***(Optional)*** |
| `maxNumberOfVirtualNetworkLinks` | ***int***| ***(Optional)*** |
| `maxNumberOfVirtualNetworkLinksWithRegistration` | ***int***| ***(Optional)*** |
| `name` | ***string***||
| `numberOfRecordSets` | ***int***| ***(Optional)*** |
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
