---
title: SpannerInstanceIamMember
menu:
  docs_v2020.10.13:
    identifier: spannerinstanceiammember-google.kubeform.com
    name: SpannerInstanceIamMember
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## SpannerInstanceIamMember
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `SpannerInstanceIamMember` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SpannerInstanceIamMemberSpec](#spannerinstanceiammemberspec)***||
| `status` | ***[SpannerInstanceIamMemberStatus](#spannerinstanceiammemberstatus)***||
## Phase(`string` alias)

Appears on:[SpannerInstanceIamMemberStatus](#spannerinstanceiammemberstatus)

## SpannerInstanceIamMemberSpec

Appears on:[SpannerInstanceIamMember](#spannerinstanceiammember), [SpannerInstanceIamMemberStatus](#spannerinstanceiammemberstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `instance` | ***string***||
| `member` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `role` | ***string***||
## SpannerInstanceIamMemberStatus

Appears on:[SpannerInstanceIamMember](#spannerinstanceiammember)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SpannerInstanceIamMemberSpec](#spannerinstanceiammemberspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
