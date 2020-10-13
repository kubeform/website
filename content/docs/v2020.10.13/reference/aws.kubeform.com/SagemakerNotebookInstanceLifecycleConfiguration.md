---
title: SagemakerNotebookInstanceLifecycleConfiguration
menu:
  docs_v2020.10.13:
    identifier: sagemakernotebookinstancelifecycleconfiguration-aws.kubeform.com
    name: SagemakerNotebookInstanceLifecycleConfiguration
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## SagemakerNotebookInstanceLifecycleConfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SagemakerNotebookInstanceLifecycleConfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SagemakerNotebookInstanceLifecycleConfigurationSpec](#sagemakernotebookinstancelifecycleconfigurationspec)***||
| `status` | ***[SagemakerNotebookInstanceLifecycleConfigurationStatus](#sagemakernotebookinstancelifecycleconfigurationstatus)***||
## Phase(`string` alias)

Appears on:[SagemakerNotebookInstanceLifecycleConfigurationStatus](#sagemakernotebookinstancelifecycleconfigurationstatus)

## SagemakerNotebookInstanceLifecycleConfigurationSpec

Appears on:[SagemakerNotebookInstanceLifecycleConfiguration](#sagemakernotebookinstancelifecycleconfiguration), [SagemakerNotebookInstanceLifecycleConfigurationStatus](#sagemakernotebookinstancelifecycleconfigurationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `onCreate` | ***string***| ***(Optional)*** |
| `onStart` | ***string***| ***(Optional)*** |
## SagemakerNotebookInstanceLifecycleConfigurationStatus

Appears on:[SagemakerNotebookInstanceLifecycleConfiguration](#sagemakernotebookinstancelifecycleconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SagemakerNotebookInstanceLifecycleConfigurationSpec](#sagemakernotebookinstancelifecycleconfigurationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
