---
title: DnsNsRecord
menu:
  docs_v0.0.1:
    identifier: dnsnsrecord-azurerm.kubeform.com
    name: DnsNsRecord
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DnsNsRecord
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DnsNsRecord` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DnsNsRecordSpec](#dnsnsrecordspec)***||
| `status` | ***[DnsNsRecordStatus](#dnsnsrecordstatus)***||
## DnsNsRecordSpec

Appears on:[DnsNsRecord](#dnsnsrecord), [DnsNsRecordStatus](#dnsnsrecordstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `record` | ***[[]DnsNsRecordSpecRecord](#dnsnsrecordspecrecord)***| ***(Optional)*** Deprecated|
| `records` | ***[]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `ttl` | ***int***||
| `zoneName` | ***string***||
## DnsNsRecordSpecRecord

Appears on:[DnsNsRecordSpec](#dnsnsrecordspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `nsdname` | ***string***||
## DnsNsRecordStatus

Appears on:[DnsNsRecord](#dnsnsrecord)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DnsNsRecordSpec](#dnsnsrecordspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
