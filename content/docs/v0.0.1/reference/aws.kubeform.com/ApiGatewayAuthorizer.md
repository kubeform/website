---
title: ApiGatewayAuthorizer
menu:
  docs_v0.0.1:
    identifier: apigatewayauthorizer-aws.kubeform.com
    name: ApiGatewayAuthorizer
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ApiGatewayAuthorizer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayAuthorizer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayAuthorizerSpec](#apigatewayauthorizerspec)***||
| `status` | ***[ApiGatewayAuthorizerStatus](#apigatewayauthorizerstatus)***||
## ApiGatewayAuthorizerSpec

Appears on:[ApiGatewayAuthorizer](#apigatewayauthorizer), [ApiGatewayAuthorizerStatus](#apigatewayauthorizerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `authorizerCredentials` | ***string***| ***(Optional)*** |
| `authorizerResultTtlInSeconds` | ***int***| ***(Optional)*** |
| `authorizerURI` | ***string***| ***(Optional)*** |
| `identitySource` | ***string***| ***(Optional)*** |
| `identityValidationExpression` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `providerArns` | ***[]string***| ***(Optional)*** |
| `restAPIID` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## ApiGatewayAuthorizerStatus

Appears on:[ApiGatewayAuthorizer](#apigatewayauthorizer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayAuthorizerSpec](#apigatewayauthorizerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
