---
title: BatchCertificate
menu:
  docs_v0.1.0:
    identifier: batchcertificate-azurerm.kubeform.com
    name: BatchCertificate
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## BatchCertificate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `BatchCertificate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BatchCertificateSpec](#batchcertificatespec)***||
| `status` | ***[BatchCertificateStatus](#batchcertificatestatus)***||
## BatchCertificateSpec

Appears on:[BatchCertificate](#batchcertificate), [BatchCertificateStatus](#batchcertificatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `accountName` | ***string***||
| `format` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `publicData` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `thumbprint` | ***string***||
| `thumbprintAlgorithm` | ***string***||
## BatchCertificateStatus

Appears on:[BatchCertificate](#batchcertificate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BatchCertificateSpec](#batchcertificatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[BatchCertificateStatus](#batchcertificatestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `certificate` | ***string*** ||
| `password` | ***string*** ||