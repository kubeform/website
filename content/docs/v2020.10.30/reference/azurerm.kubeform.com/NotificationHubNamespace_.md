---
title: NotificationHubNamespace
menu:
  docs_v2020.10.30:
    identifier: notificationhubnamespace--azurerm.kubeform.com
    name: NotificationHubNamespace
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## NotificationHubNamespace_
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NotificationHubNamespace_` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NotificationHubNamespace_Spec](#notificationhubnamespace_spec)***||
| `status` | ***[NotificationHubNamespace_Status](#notificationhubnamespace_status)***||
## NotificationHubNamespace_Spec

Appears on:[NotificationHubNamespace_](#notificationhubnamespace_), [NotificationHubNamespace_Status](#notificationhubnamespace_status)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `namespaceType` | ***string***||
| `resourceGroupName` | ***string***||
| `servicebusEndpoint` | ***string***| ***(Optional)*** |
| `sku` | ***[[]NotificationHubNamespace_SpecSku](#notificationhubnamespace_specsku)***| ***(Optional)*** Deprecated|
| `skuName` | ***string***| ***(Optional)*** |
## NotificationHubNamespace_SpecSku

Appears on:[NotificationHubNamespace_Spec](#notificationhubnamespace_spec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
## NotificationHubNamespace_Status

Appears on:[NotificationHubNamespace_](#notificationhubnamespace_)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NotificationHubNamespace_Spec](#notificationhubnamespace_spec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NotificationHubNamespace_Status](#notificationhubnamespace_status)

---
