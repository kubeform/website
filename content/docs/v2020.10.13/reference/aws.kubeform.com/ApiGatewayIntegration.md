---
title: ApiGatewayIntegration
menu:
  docs_v2020.10.13:
    identifier: apigatewayintegration-aws.kubeform.com
    name: ApiGatewayIntegration
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## ApiGatewayIntegration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayIntegration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayIntegrationSpec](#apigatewayintegrationspec)***||
| `status` | ***[ApiGatewayIntegrationStatus](#apigatewayintegrationstatus)***||
## ApiGatewayIntegrationSpec

Appears on:[ApiGatewayIntegration](#apigatewayintegration), [ApiGatewayIntegrationStatus](#apigatewayintegrationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `cacheKeyParameters` | ***[]string***| ***(Optional)*** |
| `cacheNamespace` | ***string***| ***(Optional)*** |
| `connectionID` | ***string***| ***(Optional)*** |
| `connectionType` | ***string***| ***(Optional)*** |
| `contentHandling` | ***string***| ***(Optional)*** |
| `credentials` | ***string***| ***(Optional)*** |
| `httpMethod` | ***string***||
| `integrationHTTPMethod` | ***string***| ***(Optional)*** |
| `passthroughBehavior` | ***string***| ***(Optional)*** |
| `requestParameters` | ***map[string]string***| ***(Optional)*** |
| `requestTemplates` | ***map[string]string***| ***(Optional)*** |
| `resourceID` | ***string***||
| `restAPIID` | ***string***||
| `timeoutMilliseconds` | ***int64***| ***(Optional)*** |
| `type` | ***string***||
| `uri` | ***string***| ***(Optional)*** |
## ApiGatewayIntegrationStatus

Appears on:[ApiGatewayIntegration](#apigatewayintegration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayIntegrationSpec](#apigatewayintegrationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayIntegrationStatus](#apigatewayintegrationstatus)

---
