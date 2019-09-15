---
title: ApiGatewayResource
menu:
  docs_v0.0.1:
    identifier: apigatewayresource-aws.kubeform.com
    name: ApiGatewayResource
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ApiGatewayResource
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayResource` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayResourceSpec](#ApiGatewayResourceSpec)***||
| `status` | ***[ApiGatewayResourceStatus](#ApiGatewayResourceStatus)***||
## ApiGatewayResourceSpec
##### (Appears on:[ApiGatewayResource](#ApiGatewayResource), [ApiGatewayResourceStatus](#ApiGatewayResourceStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `parentID` | ***string***||
| `path` | ***string***| ***(Optional)*** |
| `pathPart` | ***string***||
| `restAPIID` | ***string***||
## ApiGatewayResourceStatus
##### (Appears on:[ApiGatewayResource](#ApiGatewayResource))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayResourceSpec](#ApiGatewayResourceSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
