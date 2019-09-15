---
title: SpannerDatabase
menu:
  docs_v0.0.1:
    identifier: spannerdatabase-google.kubeform.com
    name: SpannerDatabase
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SpannerDatabase
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `SpannerDatabase` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SpannerDatabaseSpec](#SpannerDatabaseSpec)***||
| `status` | ***[SpannerDatabaseStatus](#SpannerDatabaseStatus)***||
## SpannerDatabaseSpec
##### (Appears on:[SpannerDatabase](#SpannerDatabase), [SpannerDatabaseStatus](#SpannerDatabaseStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ddl` | ***[]string***| ***(Optional)*** |
| `instance` | ***string***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
## SpannerDatabaseStatus
##### (Appears on:[SpannerDatabase](#SpannerDatabase))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SpannerDatabaseSpec](#SpannerDatabaseSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
