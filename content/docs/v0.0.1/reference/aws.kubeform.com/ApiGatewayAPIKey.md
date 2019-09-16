---
title: ApiGatewayAPIKey
menu:
  docs_v0.0.1:
    identifier: apigatewayapikey-aws.kubeform.com
    name: ApiGatewayAPIKey
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ApiGatewayAPIKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayAPIKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayAPIKeySpec](#apigatewayapikeyspec)***||
| `status` | ***[ApiGatewayAPIKeyStatus](#apigatewayapikeystatus)***||
## ApiGatewayAPIKeySpec

Appears on:[ApiGatewayAPIKey](#apigatewayapikey), [ApiGatewayAPIKeyStatus](#apigatewayapikeystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `createdDate` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `lastUpdatedDate` | ***string***| ***(Optional)*** |
| `name` | ***string***||
## ApiGatewayAPIKeyStatus

Appears on:[ApiGatewayAPIKey](#apigatewayapikey)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayAPIKeySpec](#apigatewayapikeyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `value` | ***string*** ||
