---
title: DnsSrvRecord
menu:
  docs_v0.1.0:
    identifier: dnssrvrecord-azurerm.kubeform.com
    name: DnsSrvRecord
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## DnsSrvRecord
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DnsSrvRecord` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DnsSrvRecordSpec](#dnssrvrecordspec)***||
| `status` | ***[DnsSrvRecordStatus](#dnssrvrecordstatus)***||
## DnsSrvRecordSpec

Appears on:[DnsSrvRecord](#dnssrvrecord), [DnsSrvRecordStatus](#dnssrvrecordstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `record` | ***[[]DnsSrvRecordSpecRecord](#dnssrvrecordspecrecord)***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `ttl` | ***int64***||
| `zoneName` | ***string***||
## DnsSrvRecordSpecRecord

Appears on:[DnsSrvRecordSpec](#dnssrvrecordspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int64***||
| `priority` | ***int64***||
| `target` | ***string***||
| `weight` | ***int64***||
## DnsSrvRecordStatus

Appears on:[DnsSrvRecord](#dnssrvrecord)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DnsSrvRecordSpec](#dnssrvrecordspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DnsSrvRecordStatus](#dnssrvrecordstatus)

---
