---
title: BatchJobDefinition
menu:
  docs_v0.0.1:
    identifier: batchjobdefinition-aws.kubeform.com
    name: BatchJobDefinition
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## BatchJobDefinition
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `BatchJobDefinition` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BatchJobDefinitionSpec](#batchjobdefinitionspec)***||
| `status` | ***[BatchJobDefinitionStatus](#batchjobdefinitionstatus)***||
## BatchJobDefinitionSpec

Appears on:[BatchJobDefinition](#batchjobdefinition), [BatchJobDefinitionStatus](#batchjobdefinitionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `containerProperties` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `retryStrategy` | ***[[]BatchJobDefinitionSpecRetryStrategy](#batchjobdefinitionspecretrystrategy)***| ***(Optional)*** |
| `revision` | ***int***| ***(Optional)*** |
| `timeout` | ***[[]BatchJobDefinitionSpecTimeout](#batchjobdefinitionspectimeout)***| ***(Optional)*** |
| `type` | ***string***||
## BatchJobDefinitionSpecRetryStrategy

Appears on:[BatchJobDefinitionSpec](#batchjobdefinitionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `attempts` | ***int***| ***(Optional)*** |
## BatchJobDefinitionSpecTimeout

Appears on:[BatchJobDefinitionSpec](#batchjobdefinitionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `attemptDurationSeconds` | ***int***| ***(Optional)*** |
## BatchJobDefinitionStatus

Appears on:[BatchJobDefinition](#batchjobdefinition)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BatchJobDefinitionSpec](#batchjobdefinitionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
