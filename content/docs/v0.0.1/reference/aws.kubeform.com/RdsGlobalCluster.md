---
title: RdsGlobalCluster
menu:
  docs_v0.0.1:
    identifier: rdsglobalcluster-aws.kubeform.com
    name: RdsGlobalCluster
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## RdsGlobalCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RdsGlobalCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RdsGlobalClusterSpec](#RdsGlobalClusterSpec)***||
| `status` | ***[RdsGlobalClusterStatus](#RdsGlobalClusterStatus)***||
## RdsGlobalClusterSpec
##### (Appears on:[RdsGlobalCluster](#RdsGlobalCluster), [RdsGlobalClusterStatus](#RdsGlobalClusterStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `databaseName` | ***string***| ***(Optional)*** |
| `deletionProtection` | ***bool***| ***(Optional)*** |
| `engine` | ***string***| ***(Optional)*** |
| `engineVersion` | ***string***| ***(Optional)*** |
| `globalClusterIdentifier` | ***string***||
| `globalClusterResourceID` | ***string***| ***(Optional)*** |
| `storageEncrypted` | ***bool***| ***(Optional)*** |
## RdsGlobalClusterStatus
##### (Appears on:[RdsGlobalCluster](#RdsGlobalCluster))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RdsGlobalClusterSpec](#RdsGlobalClusterSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
