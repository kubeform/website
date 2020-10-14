---
title: SpannerDatabaseIamBinding
menu:
  docs_v2020.10.13:
    identifier: spannerdatabaseiambinding-google.kubeform.com
    name: SpannerDatabaseIamBinding
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## SpannerDatabaseIamBinding
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `SpannerDatabaseIamBinding` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SpannerDatabaseIamBindingSpec](#spannerdatabaseiambindingspec)***||
| `status` | ***[SpannerDatabaseIamBindingStatus](#spannerdatabaseiambindingstatus)***||
## Phase(`string` alias)

Appears on:[SpannerDatabaseIamBindingStatus](#spannerdatabaseiambindingstatus)

## SpannerDatabaseIamBindingSpec

Appears on:[SpannerDatabaseIamBinding](#spannerdatabaseiambinding), [SpannerDatabaseIamBindingStatus](#spannerdatabaseiambindingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `database` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `instance` | ***string***||
| `members` | ***[]string***||
| `project` | ***string***| ***(Optional)*** |
| `role` | ***string***||
## SpannerDatabaseIamBindingStatus

Appears on:[SpannerDatabaseIamBinding](#spannerdatabaseiambinding)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SpannerDatabaseIamBindingSpec](#spannerdatabaseiambindingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
