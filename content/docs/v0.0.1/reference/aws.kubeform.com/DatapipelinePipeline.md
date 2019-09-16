---
title: DatapipelinePipeline
menu:
  docs_v0.0.1:
    identifier: datapipelinepipeline-aws.kubeform.com
    name: DatapipelinePipeline
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DatapipelinePipeline
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DatapipelinePipeline` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DatapipelinePipelineSpec](#datapipelinepipelinespec)***||
| `status` | ***[DatapipelinePipelineStatus](#datapipelinepipelinestatus)***||
## DatapipelinePipelineSpec

Appears on:[DatapipelinePipeline](#datapipelinepipeline), [DatapipelinePipelineStatus](#datapipelinepipelinestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## DatapipelinePipelineStatus

Appears on:[DatapipelinePipeline](#datapipelinepipeline)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DatapipelinePipelineSpec](#datapipelinepipelinespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
