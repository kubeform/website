---
title: DbClusterSnapshot
menu:
  docs_v0.1.0:
    identifier: dbclustersnapshot-aws.kubeform.com
    name: DbClusterSnapshot
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## DbClusterSnapshot
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DbClusterSnapshot` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DbClusterSnapshotSpec](#dbclustersnapshotspec)***||
| `status` | ***[DbClusterSnapshotStatus](#dbclustersnapshotstatus)***||
## DbClusterSnapshotSpec

Appears on:[DbClusterSnapshot](#dbclustersnapshot), [DbClusterSnapshotStatus](#dbclustersnapshotstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allocatedStorage` | ***int***| ***(Optional)*** |
| `availabilityZones` | ***[]string***| ***(Optional)*** |
| `dbClusterIdentifier` | ***string***||
| `dbClusterSnapshotArn` | ***string***| ***(Optional)*** |
| `dbClusterSnapshotIdentifier` | ***string***||
| `engine` | ***string***| ***(Optional)*** |
| `engineVersion` | ***string***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `licenseModel` | ***string***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `snapshotType` | ***string***| ***(Optional)*** |
| `sourceDbClusterSnapshotArn` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `storageEncrypted` | ***bool***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## DbClusterSnapshotStatus

Appears on:[DbClusterSnapshot](#dbclustersnapshot)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DbClusterSnapshotSpec](#dbclustersnapshotspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DbClusterSnapshotStatus](#dbclustersnapshotstatus)

---
