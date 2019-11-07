---
title: KeyVaultSecret
menu:
  docs_v0.1.0:
    identifier: keyvaultsecret-azurerm.kubeform.com
    name: KeyVaultSecret
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## KeyVaultSecret
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `KeyVaultSecret` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[KeyVaultSecretSpec](#keyvaultsecretspec)***||
| `status` | ***[KeyVaultSecretStatus](#keyvaultsecretstatus)***||
## KeyVaultSecretSpec

Appears on:[KeyVaultSecret](#keyvaultsecret), [KeyVaultSecretStatus](#keyvaultsecretstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `contentType` | ***string***| ***(Optional)*** |
| `keyVaultID` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vaultURI` | ***string***| ***(Optional)*** Deprecated|
| `version` | ***string***| ***(Optional)*** |
## KeyVaultSecretStatus

Appears on:[KeyVaultSecret](#keyvaultsecret)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[KeyVaultSecretSpec](#keyvaultsecretspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[KeyVaultSecretStatus](#keyvaultsecretstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `value` | ***string*** ||
