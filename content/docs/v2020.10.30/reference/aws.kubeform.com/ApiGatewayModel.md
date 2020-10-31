---
title: ApiGatewayModel
menu:
  docs_v2020.10.30:
    identifier: apigatewaymodel-aws.kubeform.com
    name: ApiGatewayModel
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ApiGatewayModel
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayModel` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayModelSpec](#apigatewaymodelspec)***||
| `status` | ***[ApiGatewayModelStatus](#apigatewaymodelstatus)***||
## ApiGatewayModelSpec

Appears on:[ApiGatewayModel](#apigatewaymodel), [ApiGatewayModelStatus](#apigatewaymodelstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `contentType` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `restAPIID` | ***string***||
| `schema` | ***string***| ***(Optional)*** |
## ApiGatewayModelStatus

Appears on:[ApiGatewayModel](#apigatewaymodel)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayModelSpec](#apigatewaymodelspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayModelStatus](#apigatewaymodelstatus)

---
