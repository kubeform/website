---
title: ApiGatewayUsagePlan
menu:
  docs_v2020.10.30:
    identifier: apigatewayusageplan-aws.kubeform.com
    name: ApiGatewayUsagePlan
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ApiGatewayUsagePlan
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayUsagePlan` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayUsagePlanSpec](#apigatewayusageplanspec)***||
| `status` | ***[ApiGatewayUsagePlanStatus](#apigatewayusageplanstatus)***||
## ApiGatewayUsagePlanSpec

Appears on:[ApiGatewayUsagePlan](#apigatewayusageplan), [ApiGatewayUsagePlanStatus](#apigatewayusageplanstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `apiStages` | ***[[]ApiGatewayUsagePlanSpecApiStages](#apigatewayusageplanspecapistages)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `productCode` | ***string***| ***(Optional)*** |
| `quotaSettings` | ***[[]ApiGatewayUsagePlanSpecQuotaSettings](#apigatewayusageplanspecquotasettings)***| ***(Optional)*** |
| `throttleSettings` | ***[[]ApiGatewayUsagePlanSpecThrottleSettings](#apigatewayusageplanspecthrottlesettings)***| ***(Optional)*** |
## ApiGatewayUsagePlanSpecApiStages

Appears on:[ApiGatewayUsagePlanSpec](#apigatewayusageplanspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiID` | ***string***||
| `stage` | ***string***||
## ApiGatewayUsagePlanSpecQuotaSettings

Appears on:[ApiGatewayUsagePlanSpec](#apigatewayusageplanspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `limit` | ***int64***||
| `offset` | ***int64***| ***(Optional)*** |
| `period` | ***string***||
## ApiGatewayUsagePlanSpecThrottleSettings

Appears on:[ApiGatewayUsagePlanSpec](#apigatewayusageplanspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `burstLimit` | ***int64***| ***(Optional)*** |
| `rateLimit` | ***float64***| ***(Optional)*** |
## ApiGatewayUsagePlanStatus

Appears on:[ApiGatewayUsagePlan](#apigatewayusageplan)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayUsagePlanSpec](#apigatewayusageplanspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayUsagePlanStatus](#apigatewayusageplanstatus)

---
