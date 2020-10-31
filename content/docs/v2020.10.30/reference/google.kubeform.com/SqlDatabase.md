---
title: SqlDatabase
menu:
  docs_v2020.10.30:
    identifier: sqldatabase-google.kubeform.com
    name: SqlDatabase
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## SqlDatabase
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `SqlDatabase` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqlDatabaseSpec](#sqldatabasespec)***||
| `status` | ***[SqlDatabaseStatus](#sqldatabasestatus)***||
## Phase(`string` alias)

Appears on:[SqlDatabaseStatus](#sqldatabasestatus)

## SqlDatabaseSpec

Appears on:[SqlDatabase](#sqldatabase), [SqlDatabaseStatus](#sqldatabasestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `charset` | ***string***| ***(Optional)*** |
| `collation` | ***string***| ***(Optional)*** |
| `instance` | ***string***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## SqlDatabaseStatus

Appears on:[SqlDatabase](#sqldatabase)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqlDatabaseSpec](#sqldatabasespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
