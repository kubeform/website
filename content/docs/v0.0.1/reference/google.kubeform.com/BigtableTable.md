---
title: BigtableTable
menu:
  docs_v0.0.1:
    identifier: bigtabletable-google.kubeform.com
    name: BigtableTable
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## BigtableTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `BigtableTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BigtableTableSpec](#bigtabletablespec)***||
| `status` | ***[BigtableTableStatus](#bigtabletablestatus)***||
## BigtableTableSpec

Appears on:[BigtableTable](#bigtabletable), [BigtableTableStatus](#bigtabletablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `instanceName` | ***string***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `splitKeys` | ***[]string***| ***(Optional)*** |
## BigtableTableStatus

Appears on:[BigtableTable](#bigtabletable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BigtableTableSpec](#bigtabletablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---