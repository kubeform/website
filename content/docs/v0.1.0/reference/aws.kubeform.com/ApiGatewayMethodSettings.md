---
title: ApiGatewayMethodSettings
menu:
  docs_v0.1.0:
    identifier: apigatewaymethodsettings-aws.kubeform.com
    name: ApiGatewayMethodSettings
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ApiGatewayMethodSettings
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiGatewayMethodSettings` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiGatewayMethodSettingsSpec](#apigatewaymethodsettingsspec)***||
| `status` | ***[ApiGatewayMethodSettingsStatus](#apigatewaymethodsettingsstatus)***||
## ApiGatewayMethodSettingsSpec

Appears on:[ApiGatewayMethodSettings](#apigatewaymethodsettings), [ApiGatewayMethodSettingsStatus](#apigatewaymethodsettingsstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `methodPath` | ***string***||
| `restAPIID` | ***string***||
| `settings` | ***[[]ApiGatewayMethodSettingsSpecSettings](#apigatewaymethodsettingsspecsettings)***||
| `stageName` | ***string***||
## ApiGatewayMethodSettingsSpecSettings

Appears on:[ApiGatewayMethodSettingsSpec](#apigatewaymethodsettingsspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cacheDataEncrypted` | ***bool***| ***(Optional)*** |
| `cacheTtlInSeconds` | ***int***| ***(Optional)*** |
| `cachingEnabled` | ***bool***| ***(Optional)*** |
| `dataTraceEnabled` | ***bool***| ***(Optional)*** |
| `loggingLevel` | ***string***| ***(Optional)*** |
| `metricsEnabled` | ***bool***| ***(Optional)*** |
| `requireAuthorizationForCacheControl` | ***bool***| ***(Optional)*** |
| `throttlingBurstLimit` | ***int***| ***(Optional)*** |
| `throttlingRateLimit` | ***encoding/json.Number***| ***(Optional)*** |
| `unauthorizedCacheControlHeaderStrategy` | ***string***| ***(Optional)*** |
## ApiGatewayMethodSettingsStatus

Appears on:[ApiGatewayMethodSettings](#apigatewaymethodsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiGatewayMethodSettingsSpec](#apigatewaymethodsettingsspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiGatewayMethodSettingsStatus](#apigatewaymethodsettingsstatus)

---
