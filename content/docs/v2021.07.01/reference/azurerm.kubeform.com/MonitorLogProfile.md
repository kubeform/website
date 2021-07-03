---
title: MonitorLogProfile
menu:
  docs_v2021.07.01:
    identifier: monitorlogprofile-azurerm.kubeform.com
    name: MonitorLogProfile
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## MonitorLogProfile
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MonitorLogProfile` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MonitorLogProfileSpec](#monitorlogprofilespec)***||
| `status` | ***[MonitorLogProfileStatus](#monitorlogprofilestatus)***||
## MonitorLogProfileSpec

Appears on:[MonitorLogProfile](#monitorlogprofile), [MonitorLogProfileStatus](#monitorlogprofilestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
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
