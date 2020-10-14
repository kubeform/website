---
title: RedshiftSnapshotCopyGrant
menu:
  docs_v2020.10.13:
    identifier: redshiftsnapshotcopygrant-aws.kubeform.com
    name: RedshiftSnapshotCopyGrant
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## RedshiftSnapshotCopyGrant
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RedshiftSnapshotCopyGrant` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RedshiftSnapshotCopyGrantSpec](#redshiftsnapshotcopygrantspec)***||
| `status` | ***[RedshiftSnapshotCopyGrantStatus](#redshiftsnapshotcopygrantstatus)***||
## Phase(`string` alias)

Appears on:[RedshiftSnapshotCopyGrantStatus](#redshiftsnapshotcopygrantstatus)

## RedshiftSnapshotCopyGrantSpec

Appears on:[RedshiftSnapshotCopyGrant](#redshiftsnapshotcopygrant), [RedshiftSnapshotCopyGrantStatus](#redshiftsnapshotcopygrantstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `snapshotCopyGrantName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## RedshiftSnapshotCopyGrantStatus

Appears on:[RedshiftSnapshotCopyGrant](#redshiftsnapshotcopygrant)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RedshiftSnapshotCopyGrantSpec](#redshiftsnapshotcopygrantspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
