---
title: DnsMxRecord
menu:
  docs_v0.0.1:
    identifier: dnsmxrecord-azurerm.kubeform.com
    name: DnsMxRecord
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DnsMxRecord
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DnsMxRecord` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DnsMxRecordSpec](#DnsMxRecordSpec)***||
| `status` | ***[DnsMxRecordStatus](#DnsMxRecordStatus)***||
## DnsMxRecordSpec
##### (Appears on:[DnsMxRecord](#DnsMxRecord), [DnsMxRecordStatus](#DnsMxRecordStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `record` | ***[[]DnsMxRecordSpecRecord](#DnsMxRecordSpecRecord)***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `ttl` | ***int***||
| `zoneName` | ***string***||
## DnsMxRecordSpecRecord
##### (Appears on:[DnsMxRecordSpec](#DnsMxRecordSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `exchange` | ***string***||
| `preference` | ***string***||
## DnsMxRecordStatus
##### (Appears on:[DnsMxRecord](#DnsMxRecord))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DnsMxRecordSpec](#DnsMxRecordSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
