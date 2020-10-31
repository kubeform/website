---
title: ComputeBackendBucketSignedURLKey
menu:
  docs_v2020.10.30:
    identifier: computebackendbucketsignedurlkey-google.kubeform.com
    name: ComputeBackendBucketSignedURLKey
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ComputeBackendBucketSignedURLKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeBackendBucketSignedURLKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeBackendBucketSignedURLKeySpec](#computebackendbucketsignedurlkeyspec)***||
| `status` | ***[ComputeBackendBucketSignedURLKeyStatus](#computebackendbucketsignedurlkeystatus)***||
## ComputeBackendBucketSignedURLKeySpec

Appears on:[ComputeBackendBucketSignedURLKey](#computebackendbucketsignedurlkey), [ComputeBackendBucketSignedURLKeyStatus](#computebackendbucketsignedurlkeystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `backendBucket` | ***string***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
## ComputeBackendBucketSignedURLKeyStatus

Appears on:[ComputeBackendBucketSignedURLKey](#computebackendbucketsignedurlkey)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeBackendBucketSignedURLKeySpec](#computebackendbucketsignedurlkeyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeBackendBucketSignedURLKeyStatus](#computebackendbucketsignedurlkeystatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `key_value` | ***string*** ||
