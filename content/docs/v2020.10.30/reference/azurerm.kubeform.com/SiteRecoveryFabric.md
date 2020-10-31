---
title: SiteRecoveryFabric
menu:
  docs_v2020.10.30:
    identifier: siterecoveryfabric-azurerm.kubeform.com
    name: SiteRecoveryFabric
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## SiteRecoveryFabric
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SiteRecoveryFabric` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SiteRecoveryFabricSpec](#siterecoveryfabricspec)***||
| `status` | ***[SiteRecoveryFabricStatus](#siterecoveryfabricstatus)***||
## Phase(`string` alias)

Appears on:[SiteRecoveryFabricStatus](#siterecoveryfabricstatus)

## SiteRecoveryFabricSpec

Appears on:[SiteRecoveryFabric](#siterecoveryfabric), [SiteRecoveryFabricStatus](#siterecoveryfabricstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `recoveryVaultName` | ***string***||
| `resourceGroupName` | ***string***||
## SiteRecoveryFabricStatus

Appears on:[SiteRecoveryFabric](#siterecoveryfabric)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SiteRecoveryFabricSpec](#siterecoveryfabricspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
