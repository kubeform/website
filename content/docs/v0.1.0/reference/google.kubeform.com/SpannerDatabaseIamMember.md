---
title: SpannerDatabaseIamMember
menu:
  docs_v0.1.0:
    identifier: spannerdatabaseiammember-google.kubeform.com
    name: SpannerDatabaseIamMember
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## SpannerDatabaseIamMember
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `SpannerDatabaseIamMember` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SpannerDatabaseIamMemberSpec](#spannerdatabaseiammemberspec)***||
| `status` | ***[SpannerDatabaseIamMemberStatus](#spannerdatabaseiammemberstatus)***||
## Phase(`string` alias)

Appears on:[SpannerDatabaseIamMemberStatus](#spannerdatabaseiammemberstatus)

## SpannerDatabaseIamMemberSpec

Appears on:[SpannerDatabaseIamMember](#spannerdatabaseiammember), [SpannerDatabaseIamMemberStatus](#spannerdatabaseiammemberstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `database` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `instance` | ***string***||
| `member` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `role` | ***string***||
## SpannerDatabaseIamMemberStatus

Appears on:[SpannerDatabaseIamMember](#spannerdatabaseiammember)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SpannerDatabaseIamMemberSpec](#spannerdatabaseiammemberspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
