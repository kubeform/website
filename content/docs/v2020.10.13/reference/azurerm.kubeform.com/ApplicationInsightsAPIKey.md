---
title: ApplicationInsightsAPIKey
menu:
  docs_v2020.10.13:
    identifier: applicationinsightsapikey-azurerm.kubeform.com
    name: ApplicationInsightsAPIKey
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## ApplicationInsightsAPIKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApplicationInsightsAPIKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApplicationInsightsAPIKeySpec](#applicationinsightsapikeyspec)***||
| `status` | ***[ApplicationInsightsAPIKeyStatus](#applicationinsightsapikeystatus)***||
## ApplicationInsightsAPIKeySpec

Appears on:[ApplicationInsightsAPIKey](#applicationinsightsapikey), [ApplicationInsightsAPIKeyStatus](#applicationinsightsapikeystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `applicationInsightsID` | ***string***||
| `name` | ***string***||
| `readPermissions` | ***[]string***| ***(Optional)*** |
| `writePermissions` | ***[]string***| ***(Optional)*** |
## ApplicationInsightsAPIKeyStatus

Appears on:[ApplicationInsightsAPIKey](#applicationinsightsapikey)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApplicationInsightsAPIKeySpec](#applicationinsightsapikeyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApplicationInsightsAPIKeyStatus](#applicationinsightsapikeystatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `api_key` | ***string*** ||
