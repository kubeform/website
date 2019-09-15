---
title: Record
menu:
  docs_v0.0.1:
    identifier: record-digitalocean.kubeform.com
    name: Record
    parent: digitalocean.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## Record
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Record` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RecordSpec](#RecordSpec)***||
| `status` | ***[RecordStatus](#RecordStatus)***||
## RecordSpec
##### (Appears on:[Record](#Record), [RecordStatus](#RecordStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `domain` | ***string***||
| `flags` | ***int***| ***(Optional)*** |
| `fqdn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `port` | ***int***| ***(Optional)*** |
| `priority` | ***int***| ***(Optional)*** |
| `tag` | ***string***| ***(Optional)*** |
| `ttl` | ***int***| ***(Optional)*** |
| `type` | ***string***||
| `value` | ***string***||
| `weight` | ***int***| ***(Optional)*** |
## RecordStatus
##### (Appears on:[Record](#Record))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RecordSpec](#RecordSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
