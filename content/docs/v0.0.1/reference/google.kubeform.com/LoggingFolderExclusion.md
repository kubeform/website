---
title: LoggingFolderExclusion
menu:
  docs_v0.0.1:
    identifier: loggingfolderexclusion-google.kubeform.com
    name: LoggingFolderExclusion
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## LoggingFolderExclusion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `LoggingFolderExclusion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LoggingFolderExclusionSpec](#loggingfolderexclusionspec)***||
| `status` | ***[LoggingFolderExclusionStatus](#loggingfolderexclusionstatus)***||
## LoggingFolderExclusionSpec

Appears on:[LoggingFolderExclusion](#loggingfolderexclusion), [LoggingFolderExclusionStatus](#loggingfolderexclusionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `disabled` | ***bool***| ***(Optional)*** |
| `filter` | ***string***||
| `folder` | ***string***||
| `name` | ***string***||
## LoggingFolderExclusionStatus

Appears on:[LoggingFolderExclusion](#loggingfolderexclusion)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LoggingFolderExclusionSpec](#loggingfolderexclusionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---