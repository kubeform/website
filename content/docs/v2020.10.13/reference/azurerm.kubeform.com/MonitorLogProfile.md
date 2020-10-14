---
title: MonitorLogProfile
menu:
  docs_v2020.10.13:
    identifier: monitorlogprofile-azurerm.kubeform.com
    name: MonitorLogProfile
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## MonitorLogProfile
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MonitorLogProfile` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MonitorLogProfileSpec](#monitorlogprofilespec)***||
| `status` | ***[MonitorLogProfileStatus](#monitorlogprofilestatus)***||
## MonitorLogProfileSpec

Appears on:[MonitorLogProfile](#monitorlogprofile), [MonitorLogProfileStatus](#monitorlogprofilestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `categories` | ***[]string***||
| `locations` | ***[]string***||
| `name` | ***string***||
| `retentionPolicy` | ***[[]MonitorLogProfileSpecRetentionPolicy](#monitorlogprofilespecretentionpolicy)***||
| `servicebusRuleID` | ***string***| ***(Optional)*** |
| `storageAccountID` | ***string***| ***(Optional)*** |
## MonitorLogProfileSpecRetentionPolicy

Appears on:[MonitorLogProfileSpec](#monitorlogprofilespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `days` | ***int64***| ***(Optional)*** |
| `enabled` | ***bool***||
## MonitorLogProfileStatus

Appears on:[MonitorLogProfile](#monitorlogprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MonitorLogProfileSpec](#monitorlogprofilespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MonitorLogProfileStatus](#monitorlogprofilestatus)

---
