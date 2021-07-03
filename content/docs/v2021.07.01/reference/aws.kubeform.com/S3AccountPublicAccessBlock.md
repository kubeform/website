---
title: S3AccountPublicAccessBlock
menu:
  docs_v2021.07.01:
    identifier: s3accountpublicaccessblock-aws.kubeform.com
    name: S3AccountPublicAccessBlock
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## S3AccountPublicAccessBlock
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `S3AccountPublicAccessBlock` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[S3AccountPublicAccessBlockSpec](#s3accountpublicaccessblockspec)***||
| `status` | ***[S3AccountPublicAccessBlockStatus](#s3accountpublicaccessblockstatus)***||
## Phase(`string` alias)

Appears on:[S3AccountPublicAccessBlockStatus](#s3accountpublicaccessblockstatus)

## S3AccountPublicAccessBlockSpec

Appears on:[S3AccountPublicAccessBlock](#s3accountpublicaccessblock), [S3AccountPublicAccessBlockStatus](#s3accountpublicaccessblockstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountID` | ***string***| ***(Optional)*** |
| `blockPublicAcls` | ***bool***| ***(Optional)*** |
| `blockPublicPolicy` | ***bool***| ***(Optional)*** |
| `ignorePublicAcls` | ***bool***| ***(Optional)*** |
| `restrictPublicBuckets` | ***bool***| ***(Optional)*** |
## S3AccountPublicAccessBlockStatus

Appears on:[S3AccountPublicAccessBlock](#s3accountpublicaccessblock)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[S3AccountPublicAccessBlockSpec](#s3accountpublicaccessblockspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
