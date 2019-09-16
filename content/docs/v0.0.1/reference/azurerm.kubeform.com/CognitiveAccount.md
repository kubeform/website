---
title: CognitiveAccount
menu:
  docs_v0.0.1:
    identifier: cognitiveaccount-azurerm.kubeform.com
    name: CognitiveAccount
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## CognitiveAccount
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `CognitiveAccount` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CognitiveAccountSpec](#cognitiveaccountspec)***||
| `status` | ***[CognitiveAccountStatus](#cognitiveaccountstatus)***||
## CognitiveAccountSpec

Appears on:[CognitiveAccount](#cognitiveaccount), [CognitiveAccountStatus](#cognitiveaccountstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `endpoint` | ***string***| ***(Optional)*** |
| `kind` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `sku` | ***[[]CognitiveAccountSpecSku](#cognitiveaccountspecsku)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## CognitiveAccountSpecSku

Appears on:[CognitiveAccountSpec](#cognitiveaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `tier` | ***string***||
## CognitiveAccountStatus

Appears on:[CognitiveAccount](#cognitiveaccount)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CognitiveAccountSpec](#cognitiveaccountspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `primary_access_key` | ***string*** ||
| `secondary_access_key` | ***string*** ||
