---
title: CloudfrontOriginAccessIdentity
menu:
  docs_v0.0.1:
    identifier: cloudfrontoriginaccessidentity-aws.kubeform.com
    name: CloudfrontOriginAccessIdentity
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## CloudfrontOriginAccessIdentity
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudfrontOriginAccessIdentity` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudfrontOriginAccessIdentitySpec](#CloudfrontOriginAccessIdentitySpec)***||
| `status` | ***[CloudfrontOriginAccessIdentityStatus](#CloudfrontOriginAccessIdentityStatus)***||
## CloudfrontOriginAccessIdentitySpec
##### (Appears on:[CloudfrontOriginAccessIdentity](#CloudfrontOriginAccessIdentity), [CloudfrontOriginAccessIdentityStatus](#CloudfrontOriginAccessIdentityStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `callerReference` | ***string***| ***(Optional)*** |
| `cloudfrontAccessIdentityPath` | ***string***| ***(Optional)*** |
| `comment` | ***string***| ***(Optional)*** |
| `etag` | ***string***| ***(Optional)*** |
| `iamArn` | ***string***| ***(Optional)*** |
| `s3CanonicalUserID` | ***string***| ***(Optional)*** |
## CloudfrontOriginAccessIdentityStatus
##### (Appears on:[CloudfrontOriginAccessIdentity](#CloudfrontOriginAccessIdentity))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudfrontOriginAccessIdentitySpec](#CloudfrontOriginAccessIdentitySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
