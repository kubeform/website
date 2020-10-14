---
title: DnsRecordSet
menu:
  docs_v2020.10.13:
    identifier: dnsrecordset-google.kubeform.com
    name: DnsRecordSet
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## DnsRecordSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `DnsRecordSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DnsRecordSetSpec](#dnsrecordsetspec)***||
| `status` | ***[DnsRecordSetStatus](#dnsrecordsetstatus)***||
## DnsRecordSetSpec

Appears on:[DnsRecordSet](#dnsrecordset), [DnsRecordSetStatus](#dnsrecordsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `managedZone` | ***string***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `rrdatas` | ***[]string***||
| `ttl` | ***int64***||
| `type` | ***string***||
## DnsRecordSetStatus

Appears on:[DnsRecordSet](#dnsrecordset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DnsRecordSetSpec](#dnsrecordsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DnsRecordSetStatus](#dnsrecordsetstatus)

---
