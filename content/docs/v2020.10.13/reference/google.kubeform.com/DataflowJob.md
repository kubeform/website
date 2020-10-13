---
title: DataflowJob
menu:
  docs_v2020.10.13:
    identifier: dataflowjob-google.kubeform.com
    name: DataflowJob
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## DataflowJob
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `DataflowJob` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataflowJobSpec](#dataflowjobspec)***||
| `status` | ***[DataflowJobStatus](#dataflowjobstatus)***||
## DataflowJobSpec

Appears on:[DataflowJob](#dataflowjob), [DataflowJobStatus](#dataflowjobstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `maxWorkers` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `onDelete` | ***string***| ***(Optional)*** |
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
| `tempGcsLocation` | ***string***||
| `templateGcsPath` | ***string***||
| `zone` | ***string***| ***(Optional)*** |
## DataflowJobStatus

Appears on:[DataflowJob](#dataflowjob)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataflowJobSpec](#dataflowjobspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DataflowJobStatus](#dataflowjobstatus)

---
