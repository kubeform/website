---
title: DocdbClusterSnapshot
menu:
  docs_v0.0.1:
    identifier: docdbclustersnapshot-aws.kubeform.com
    name: DocdbClusterSnapshot
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## DocdbClusterSnapshot
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DocdbClusterSnapshot` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DocdbClusterSnapshotSpec](#DocdbClusterSnapshotSpec)***||
| `status` | ***[DocdbClusterSnapshotStatus](#DocdbClusterSnapshotStatus)***||
## DocdbClusterSnapshotSpec
##### (Appears on:[DocdbClusterSnapshot](#DocdbClusterSnapshot), [DocdbClusterSnapshotStatus](#DocdbClusterSnapshotStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `availabilityZones` | ***[]string***| ***(Optional)*** |
| `dbClusterIdentifier` | ***string***||
| `dbClusterSnapshotArn` | ***string***| ***(Optional)*** |
| `dbClusterSnapshotIdentifier` | ***string***||
| `engine` | ***string***| ***(Optional)*** |
| `engineVersion` | ***string***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `snapshotType` | ***string***| ***(Optional)*** |
| `sourceDbClusterSnapshotArn` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `storageEncrypted` | ***bool***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## DocdbClusterSnapshotStatus
##### (Appears on:[DocdbClusterSnapshot](#DocdbClusterSnapshot))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DocdbClusterSnapshotSpec](#DocdbClusterSnapshotSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---