---
title: PrivateDNSSrvRecord
menu:
  docs_v2020.10.30:
    identifier: privatednssrvrecord-azurerm.kubeform.com
    name: PrivateDNSSrvRecord
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## PrivateDNSSrvRecord
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PrivateDNSSrvRecord` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PrivateDNSSrvRecordSpec](#privatednssrvrecordspec)***||
| `status` | ***[PrivateDNSSrvRecordStatus](#privatednssrvrecordstatus)***||
## Phase(`string` alias)

Appears on:[PrivateDNSSrvRecordStatus](#privatednssrvrecordstatus)

## PrivateDNSSrvRecordSpec

Appears on:[PrivateDNSSrvRecord](#privatednssrvrecord), [PrivateDNSSrvRecordStatus](#privatednssrvrecordstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `record` | ***[[]PrivateDNSSrvRecordSpecRecord](#privatednssrvrecordspecrecord)***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `ttl` | ***int64***||
| `zoneName` | ***string***||
## PrivateDNSSrvRecordSpecRecord

Appears on:[PrivateDNSSrvRecordSpec](#privatednssrvrecordspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int64***||
| `priority` | ***int64***||
| `target` | ***string***||
| `weight` | ***int64***||
## PrivateDNSSrvRecordStatus

Appears on:[PrivateDNSSrvRecord](#privatednssrvrecord)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PrivateDNSSrvRecordSpec](#privatednssrvrecordspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
