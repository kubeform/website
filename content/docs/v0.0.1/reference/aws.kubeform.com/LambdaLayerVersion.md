---
title: LambdaLayerVersion
menu:
  docs_v0.0.1:
    identifier: lambdalayerversion-aws.kubeform.com
    name: LambdaLayerVersion
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## LambdaLayerVersion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LambdaLayerVersion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LambdaLayerVersionSpec](#LambdaLayerVersionSpec)***||
| `status` | ***[LambdaLayerVersionStatus](#LambdaLayerVersionStatus)***||
## LambdaLayerVersionSpec
##### (Appears on:[LambdaLayerVersion](#LambdaLayerVersion), [LambdaLayerVersionStatus](#LambdaLayerVersionStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `compatibleRuntimes` | ***[]string***| ***(Optional)*** |
| `createdDate` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `filename` | ***string***| ***(Optional)*** |
| `layerArn` | ***string***| ***(Optional)*** |
| `layerName` | ***string***||
| `licenseInfo` | ***string***| ***(Optional)*** |
| `s3Bucket` | ***string***| ***(Optional)*** |
| `s3Key` | ***string***| ***(Optional)*** |
| `s3ObjectVersion` | ***string***| ***(Optional)*** |
| `sourceCodeHash` | ***string***| ***(Optional)*** |
| `sourceCodeSize` | ***int***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## LambdaLayerVersionStatus
##### (Appears on:[LambdaLayerVersion](#LambdaLayerVersion))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LambdaLayerVersionSpec](#LambdaLayerVersionSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
