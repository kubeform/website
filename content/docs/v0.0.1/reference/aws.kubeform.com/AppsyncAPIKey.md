---
title: AppsyncAPIKey
menu:
  docs_v0.0.1:
    identifier: appsyncapikey-aws.kubeform.com
    name: AppsyncAPIKey
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## AppsyncAPIKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppsyncAPIKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppsyncAPIKeySpec](#AppsyncAPIKeySpec)***||
| `status` | ***[AppsyncAPIKeyStatus](#AppsyncAPIKeyStatus)***||
## AppsyncAPIKeySpec
##### (Appears on:[AppsyncAPIKey](#AppsyncAPIKey), [AppsyncAPIKeyStatus](#AppsyncAPIKeyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `apiID` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `expires` | ***string***| ***(Optional)*** |
## AppsyncAPIKeyStatus
##### (Appears on:[AppsyncAPIKey](#AppsyncAPIKey))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppsyncAPIKeySpec](#AppsyncAPIKeySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `key` | ***string*** ||