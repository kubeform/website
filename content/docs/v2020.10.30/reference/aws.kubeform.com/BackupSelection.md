---
title: BackupSelection
menu:
  docs_v2020.10.30:
    identifier: backupselection-aws.kubeform.com
    name: BackupSelection
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## BackupSelection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `BackupSelection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BackupSelectionSpec](#backupselectionspec)***||
| `status` | ***[BackupSelectionStatus](#backupselectionstatus)***||
## BackupSelectionSpec

Appears on:[BackupSelection](#backupselection), [BackupSelectionStatus](#backupselectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `iamRoleArn` | ***string***||
| `name` | ***string***||
| `planID` | ***string***||
| `resources` | ***[]string***| ***(Optional)*** |
| `selectionTag` | ***[[]BackupSelectionSpecSelectionTag](#backupselectionspecselectiontag)***| ***(Optional)*** |
## BackupSelectionSpecSelectionTag

Appears on:[BackupSelectionSpec](#backupselectionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `type` | ***string***||
| `value` | ***string***||
## BackupSelectionStatus

Appears on:[BackupSelection](#backupselection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BackupSelectionSpec](#backupselectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[BackupSelectionStatus](#backupselectionstatus)

---
