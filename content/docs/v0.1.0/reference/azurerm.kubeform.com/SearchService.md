---
title: SearchService
menu:
  docs_v0.1.0:
    identifier: searchservice-azurerm.kubeform.com
    name: SearchService
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## SearchService
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `SearchService` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SearchServiceSpec](#searchservicespec)***||
| `status` | ***[SearchServiceStatus](#searchservicestatus)***||
## Phase(`string` alias)

Appears on:[SearchServiceStatus](#searchservicestatus)

## SearchServiceSpec

Appears on:[SearchService](#searchservice), [SearchServiceStatus](#searchservicestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `partitionCount` | ***int***| ***(Optional)*** |
| `primaryKey` | ***string***| ***(Optional)*** |
| `replicaCount` | ***int***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `secondaryKey` | ***string***| ***(Optional)*** |
| `sku` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## SearchServiceStatus

Appears on:[SearchService](#searchservice)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SearchServiceSpec](#searchservicespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
