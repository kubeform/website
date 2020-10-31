---
title: DnsCaaRecord
menu:
  docs_v2020.10.30:
    identifier: dnscaarecord-azurerm.kubeform.com
    name: DnsCaaRecord
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## DnsCaaRecord
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DnsCaaRecord` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DnsCaaRecordSpec](#dnscaarecordspec)***||
| `status` | ***[DnsCaaRecordStatus](#dnscaarecordstatus)***||
## DnsCaaRecordSpec

Appears on:[DnsCaaRecord](#dnscaarecord), [DnsCaaRecordStatus](#dnscaarecordstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `fqdn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `record` | ***[[]DnsCaaRecordSpecRecord](#dnscaarecordspecrecord)***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `ttl` | ***int64***||
| `zoneName` | ***string***||
## DnsCaaRecordSpecRecord

Appears on:[DnsCaaRecordSpec](#dnscaarecordspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `flags` | ***int64***||
| `tag` | ***string***||
| `value` | ***string***||
## DnsCaaRecordStatus

Appears on:[DnsCaaRecord](#dnscaarecord)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DnsCaaRecordSpec](#dnscaarecordspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DnsCaaRecordStatus](#dnscaarecordstatus)

---
