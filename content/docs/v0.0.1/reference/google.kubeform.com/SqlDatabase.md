---
title: SqlDatabase
menu:
  docs_v0.0.1:
    identifier: sqldatabase-google.kubeform.com
    name: SqlDatabase
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SqlDatabase
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `SqlDatabase` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SqlDatabaseSpec](#SqlDatabaseSpec)***||
| `status` | ***[SqlDatabaseStatus](#SqlDatabaseStatus)***||
## SqlDatabaseSpec
##### (Appears on:[SqlDatabase](#SqlDatabase), [SqlDatabaseStatus](#SqlDatabaseStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `charset` | ***string***| ***(Optional)*** |
| `collation` | ***string***| ***(Optional)*** |
| `instance` | ***string***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## SqlDatabaseStatus
##### (Appears on:[SqlDatabase](#SqlDatabase))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SqlDatabaseSpec](#SqlDatabaseSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
