---
title: ApiGatewayGatewayResponse
menu:
  docs_v2021.07.01:
    identifier: apigatewaygatewayresponse-aws.kubeform.com
    name: ApiGatewayGatewayResponse
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

## ApiGatewayGatewayResponse
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayGatewayResponse` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayGatewayResponseSpec](#apigatewaygatewayresponsespec)***||
| `status` | ***[ApiGatewayGatewayResponseStatus](#apigatewaygatewayresponsestatus)***||
## ApiGatewayGatewayResponseSpec

Appears on:[ApiGatewayGatewayResponse](#apigatewaygatewayresponse), [ApiGatewayGatewayResponseStatus](#apigatewaygatewayresponsestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `responseParameters` | ***map[string]string***| ***(Optional)*** |
| `responseTemplates` | ***map[string]string***| ***(Optional)*** |
| `responseType` | ***string***||
| `restAPIID` | ***string***||
| `statusCode` | ***string***| ***(Optional)*** |
## ApiGatewayGatewayResponseStatus

Appears on:[ApiGatewayGatewayResponse](#apigatewaygatewayresponse)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayGatewayResponseSpec](#apigatewaygatewayresponsespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayGatewayResponseStatus](#apigatewaygatewayresponsestatus)

---
