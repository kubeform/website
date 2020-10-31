---
title: ApiGatewayMethod
menu:
  docs_v2020.10.30:
    identifier: apigatewaymethod-aws.kubeform.com
    name: ApiGatewayMethod
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ApiGatewayMethod
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayMethod` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayMethodSpec](#apigatewaymethodspec)***||
| `status` | ***[ApiGatewayMethodStatus](#apigatewaymethodstatus)***||
## ApiGatewayMethodSpec

Appears on:[ApiGatewayMethod](#apigatewaymethod), [ApiGatewayMethodStatus](#apigatewaymethodstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `apiKeyRequired` | ***bool***| ***(Optional)*** |
| `authorization` | ***string***||
| `authorizationScopes` | ***[]string***| ***(Optional)*** |
| `authorizerID` | ***string***| ***(Optional)*** |
| `httpMethod` | ***string***||
| `requestModels` | ***map[string]string***| ***(Optional)*** |
| `requestParameters` | ***map[string]bool***| ***(Optional)*** |
| `requestValidatorID` | ***string***| ***(Optional)*** |
| `resourceID` | ***string***||
| `restAPIID` | ***string***||
## ApiGatewayMethodStatus

Appears on:[ApiGatewayMethod](#apigatewaymethod)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayMethodSpec](#apigatewaymethodspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayMethodStatus](#apigatewaymethodstatus)

---
