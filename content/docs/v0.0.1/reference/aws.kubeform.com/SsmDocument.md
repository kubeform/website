---
title: SsmDocument
menu:
  docs_v0.0.1:
    identifier: ssmdocument-aws.kubeform.com
    name: SsmDocument
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SsmDocument
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmDocument` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmDocumentSpec](#ssmdocumentspec)***||
| `status` | ***[SsmDocumentStatus](#ssmdocumentstatus)***||
## SsmDocumentSpec

Appears on:[SsmDocument](#ssmdocument), [SsmDocumentStatus](#ssmdocumentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `content` | ***string***||
| `createdDate` | ***string***| ***(Optional)*** |
| `defaultVersion` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `documentFormat` | ***string***| ***(Optional)*** |
| `documentType` | ***string***||
| `hash` | ***string***| ***(Optional)*** |
| `hashType` | ***string***| ***(Optional)*** |
| `latestVersion` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `owner` | ***string***| ***(Optional)*** |
| `parameter` | ***[[]SsmDocumentSpecParameter](#ssmdocumentspecparameter)***| ***(Optional)*** |
| `permissions` | ***map[string]kubeform.dev/kubeform/apis/aws/v1alpha1.SsmDocumentSpecPermissions***| ***(Optional)*** |
| `platformTypes` | ***[]string***| ***(Optional)*** |
| `schemaVersion` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SsmDocumentSpecParameter

Appears on:[SsmDocumentSpec](#ssmdocumentspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultValue` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## SsmDocumentStatus

Appears on:[SsmDocument](#ssmdocument)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmDocumentSpec](#ssmdocumentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
