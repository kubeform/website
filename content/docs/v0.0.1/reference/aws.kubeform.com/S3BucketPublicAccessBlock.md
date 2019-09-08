---
title: S3BucketPublicAccessBlock
menu:
  docs_v0.0.1:
    identifier: s3bucketpublicaccessblock-aws.kubeform.com
    name: S3BucketPublicAccessBlock
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## S3BucketPublicAccessBlock
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `S3BucketPublicAccessBlock` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[S3BucketPublicAccessBlockSpec](#S3BucketPublicAccessBlockSpec)***||
| `status` | ***[S3BucketPublicAccessBlockStatus](#S3BucketPublicAccessBlockStatus)***||
## S3BucketPublicAccessBlockSpec
##### (Appears on:[S3BucketPublicAccessBlock](#S3BucketPublicAccessBlock), [S3BucketPublicAccessBlockStatus](#S3BucketPublicAccessBlockStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `blockPublicAcls` | ***bool***| ***(Optional)*** |
| `blockPublicPolicy` | ***bool***| ***(Optional)*** |
| `bucket` | ***string***||
| `ignorePublicAcls` | ***bool***| ***(Optional)*** |
| `restrictPublicBuckets` | ***bool***| ***(Optional)*** |
## S3BucketPublicAccessBlockStatus
##### (Appears on:[S3BucketPublicAccessBlock](#S3BucketPublicAccessBlock))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[S3BucketPublicAccessBlockSpec](#S3BucketPublicAccessBlockSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---