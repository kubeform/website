---
title: StorageBucket
menu:
  docs_v2020.10.30:
    identifier: storagebucket-google.kubeform.com
    name: StorageBucket
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## StorageBucket
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageBucket` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageBucketSpec](#storagebucketspec)***||
| `status` | ***[StorageBucketStatus](#storagebucketstatus)***||
## Phase(`string` alias)

Appears on:[StorageBucketStatus](#storagebucketstatus)

## StorageBucketSpec

Appears on:[StorageBucket](#storagebucket), [StorageBucketStatus](#storagebucketstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucketPolicyOnly` | ***bool***| ***(Optional)*** |
| `cors` | ***[[]StorageBucketSpecCors](#storagebucketspeccors)***| ***(Optional)*** |
| `encryption` | ***[[]StorageBucketSpecEncryption](#storagebucketspecencryption)***| ***(Optional)*** |
| `forceDestroy` | ***bool***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `lifecycleRule` | ***[[]StorageBucketSpecLifecycleRule](#storagebucketspeclifecyclerule)***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `logging` | ***[[]StorageBucketSpecLogging](#storagebucketspeclogging)***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `requesterPays` | ***bool***| ***(Optional)*** |
| `retentionPolicy` | ***[[]StorageBucketSpecRetentionPolicy](#storagebucketspecretentionpolicy)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `storageClass` | ***string***| ***(Optional)*** |
| `url` | ***string***| ***(Optional)*** |
| `versioning` | ***[[]StorageBucketSpecVersioning](#storagebucketspecversioning)***| ***(Optional)*** |
| `website` | ***[[]StorageBucketSpecWebsite](#storagebucketspecwebsite)***| ***(Optional)*** |
## StorageBucketSpecCors

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxAgeSeconds` | ***int64***| ***(Optional)*** |
| `method` | ***[]string***| ***(Optional)*** |
| `origin` | ***[]string***| ***(Optional)*** |
| `responseHeader` | ***[]string***| ***(Optional)*** |
## StorageBucketSpecEncryption

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultKmsKeyName` | ***string***||
## StorageBucketSpecLifecycleRule

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***[[]StorageBucketSpecLifecycleRuleAction](#storagebucketspeclifecycleruleaction)***||
| `condition` | ***[[]StorageBucketSpecLifecycleRuleCondition](#storagebucketspeclifecyclerulecondition)***||
## StorageBucketSpecLifecycleRuleAction

Appears on:[StorageBucketSpecLifecycleRule](#storagebucketspeclifecyclerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `storageClass` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## StorageBucketSpecLifecycleRuleCondition

Appears on:[StorageBucketSpecLifecycleRule](#storagebucketspeclifecyclerule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `age` | ***int64***| ***(Optional)*** |
| `createdBefore` | ***string***| ***(Optional)*** |
| `isLive` | ***bool***| ***(Optional)*** Deprecated|
| `matchesStorageClass` | ***[]string***| ***(Optional)*** |
| `numNewerVersions` | ***int64***| ***(Optional)*** |
| `withState` | ***string***| ***(Optional)*** |
## StorageBucketSpecLogging

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `logBucket` | ***string***||
| `logObjectPrefix` | ***string***| ***(Optional)*** |
## StorageBucketSpecRetentionPolicy

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isLocked` | ***bool***| ***(Optional)*** |
| `retentionPeriod` | ***int64***||
## StorageBucketSpecVersioning

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***| ***(Optional)*** |
## StorageBucketSpecWebsite

Appears on:[StorageBucketSpec](#storagebucketspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mainPageSuffix` | ***string***| ***(Optional)*** |
| `notFoundPage` | ***string***| ***(Optional)*** |
## StorageBucketStatus

Appears on:[StorageBucket](#storagebucket)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageBucketSpec](#storagebucketspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
