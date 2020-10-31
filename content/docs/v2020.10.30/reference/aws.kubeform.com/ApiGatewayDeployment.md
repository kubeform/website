---
title: ApiGatewayDeployment
menu:
  docs_v2020.10.30:
    identifier: apigatewaydeployment-aws.kubeform.com
    name: ApiGatewayDeployment
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ApiGatewayDeployment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayDeployment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayDeploymentSpec](#apigatewaydeploymentspec)***||
| `status` | ***[ApiGatewayDeploymentStatus](#apigatewaydeploymentstatus)***||
## ApiGatewayDeploymentSpec

Appears on:[ApiGatewayDeployment](#apigatewaydeployment), [ApiGatewayDeploymentStatus](#apigatewaydeploymentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createdDate` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `executionArn` | ***string***| ***(Optional)*** |
| `invokeURL` | ***string***| ***(Optional)*** |
| `restAPIID` | ***string***||
| `stageDescription` | ***string***| ***(Optional)*** |
| `stageName` | ***string***| ***(Optional)*** |
| `variables` | ***map[string]string***| ***(Optional)*** |
## ApiGatewayDeploymentStatus

Appears on:[ApiGatewayDeployment](#apigatewaydeployment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayDeploymentSpec](#apigatewaydeploymentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayDeploymentStatus](#apigatewaydeploymentstatus)

---
