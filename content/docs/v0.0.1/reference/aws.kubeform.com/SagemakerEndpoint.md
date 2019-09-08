---
title: SagemakerEndpoint
menu:
  docs_v0.0.1:
    identifier: sagemakerendpoint-aws.kubeform.com
    name: SagemakerEndpoint
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## SagemakerEndpoint
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SagemakerEndpoint` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SagemakerEndpointSpec](#SagemakerEndpointSpec)***||
| `status` | ***[SagemakerEndpointStatus](#SagemakerEndpointStatus)***||
## SagemakerEndpointSpec
##### (Appears on:[SagemakerEndpoint](#SagemakerEndpoint), [SagemakerEndpointStatus](#SagemakerEndpointStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `endpointConfigName` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SagemakerEndpointStatus
##### (Appears on:[SagemakerEndpoint](#SagemakerEndpoint))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SagemakerEndpointSpec](#SagemakerEndpointSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
