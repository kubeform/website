---
title: ApiGatewayRequestValidator
menu:
  docs_v2020.10.30:
    identifier: apigatewayrequestvalidator-aws.kubeform.com
    name: ApiGatewayRequestValidator
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ApiGatewayRequestValidator
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayRequestValidator` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayRequestValidatorSpec](#apigatewayrequestvalidatorspec)***||
| `status` | ***[ApiGatewayRequestValidatorStatus](#apigatewayrequestvalidatorstatus)***||
## ApiGatewayRequestValidatorSpec

Appears on:[ApiGatewayRequestValidator](#apigatewayrequestvalidator), [ApiGatewayRequestValidatorStatus](#apigatewayrequestvalidatorstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `restAPIID` | ***string***||
| `validateRequestBody` | ***bool***| ***(Optional)*** |
| `validateRequestParameters` | ***bool***| ***(Optional)*** |
## ApiGatewayRequestValidatorStatus

Appears on:[ApiGatewayRequestValidator](#apigatewayrequestvalidator)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayRequestValidatorSpec](#apigatewayrequestvalidatorspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayRequestValidatorStatus](#apigatewayrequestvalidatorstatus)

---
