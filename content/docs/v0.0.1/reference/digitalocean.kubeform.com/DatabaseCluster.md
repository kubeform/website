---
title: DatabaseCluster
menu:
  docs_v0.0.1:
    identifier: databasecluster-digitalocean.kubeform.com
    name: DatabaseCluster
    parent: digitalocean.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DatabaseCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `DatabaseCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DatabaseClusterSpec](#DatabaseClusterSpec)***||
| `status` | ***[DatabaseClusterStatus](#DatabaseClusterStatus)***||
## DatabaseClusterSpec
##### (Appears on:[DatabaseCluster](#DatabaseCluster), [DatabaseClusterStatus](#DatabaseClusterStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `database` | ***string***| ***(Optional)*** |
| `engine` | ***string***||
| `host` | ***string***| ***(Optional)*** |
| `maintenanceWindow` | ***[[]DatabaseClusterSpecMaintenanceWindow](#DatabaseClusterSpecMaintenanceWindow)***| ***(Optional)*** |
| `name` | ***string***||
| `nodeCount` | ***int***||
| `password` | ***string***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `region` | ***string***||
| `size` | ***string***||
| `uri` | ***string***| ***(Optional)*** |
| `user` | ***string***| ***(Optional)*** |
| `version` | ***string***||
## DatabaseClusterSpecMaintenanceWindow
##### (Appears on:[DatabaseClusterSpec](#DatabaseClusterSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `day` | ***string***||
| `hour` | ***string***||
## DatabaseClusterStatus
##### (Appears on:[DatabaseCluster](#DatabaseCluster))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DatabaseClusterSpec](#DatabaseClusterSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
