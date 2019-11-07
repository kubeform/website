---
title: DnsManagedZone
menu:
  docs_v0.1.0:
    identifier: dnsmanagedzone-google.kubeform.com
    name: DnsManagedZone
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## DnsManagedZone
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `DnsManagedZone` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DnsManagedZoneSpec](#dnsmanagedzonespec)***||
| `status` | ***[DnsManagedZoneStatus](#dnsmanagedzonestatus)***||
## DnsManagedZoneSpec

Appears on:[DnsManagedZone](#dnsmanagedzone), [DnsManagedZoneStatus](#dnsmanagedzonestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `dnsName` | ***string***||
| `labels` | ***map[string]string***| ***(Optional)*** |
| `name` | ***string***||
| `nameServers` | ***[]string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
## DnsManagedZoneStatus

Appears on:[DnsManagedZone](#dnsmanagedzone)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DnsManagedZoneSpec](#dnsmanagedzonespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DnsManagedZoneStatus](#dnsmanagedzonestatus)

---
