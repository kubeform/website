---
title: ApiGatewayResource
menu:
  docs_v2020.10.13:
    identifier: apigatewayresource-aws.kubeform.com
    name: ApiGatewayResource
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## ApiGatewayResource
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayResource` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayResourceSpec](#apigatewayresourcespec)***||
| `status` | ***[ApiGatewayResourceStatus](#apigatewayresourcestatus)***||
## ApiGatewayResourceSpec

Appears on:[ApiGatewayResource](#apigatewayresource), [ApiGatewayResourceStatus](#apigatewayresourcestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `parentID` | ***string***||
| `path` | ***string***| ***(Optional)*** |
| `pathPart` | ***string***||
| `restAPIID` | ***string***||
## ApiGatewayResourceStatus

Appears on:[ApiGatewayResource](#apigatewayresource)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayResourceSpec](#apigatewayresourcespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayResourceStatus](#apigatewayresourcestatus)

---
