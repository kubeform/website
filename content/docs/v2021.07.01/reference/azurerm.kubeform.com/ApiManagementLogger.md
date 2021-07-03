---
title: ApiManagementLogger
menu:
  docs_v2021.07.01:
    identifier: apimanagementlogger-azurerm.kubeform.com
    name: ApiManagementLogger
    parent: azurerm.kubeform.com-reference
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

## ApiManagementLogger
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementLogger` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementLoggerSpec](#apimanagementloggerspec)***||
| `status` | ***[ApiManagementLoggerStatus](#apimanagementloggerstatus)***||
## ApiManagementLoggerSpec

Appears on:[ApiManagementLogger](#apimanagementlogger), [ApiManagementLoggerStatus](#apimanagementloggerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `apiManagementName` | ***string***||
| `applicationInsights` | ***[[]ApiManagementLoggerSpecApplicationInsights](#apimanagementloggerspecapplicationinsights)***| ***(Optional)*** |
| `buffered` | ***bool***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `eventhub` | ***[[]ApiManagementLoggerSpecEventhub](#apimanagementloggerspeceventhub)***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***||
## ApiManagementLoggerSpecApplicationInsights

Appears on:[ApiManagementLoggerSpec](#apimanagementloggerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
## ApiManagementLoggerSpecEventhub

Appears on:[ApiManagementLoggerSpec](#apimanagementloggerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
## ApiManagementLoggerStatus

Appears on:[ApiManagementLogger](#apimanagementlogger)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementLoggerSpec](#apimanagementloggerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementLoggerStatus](#apimanagementloggerstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `application_insights.<index>.instrumentation_key` | ***string*** ||
| `eventhub.<index>.connection_string` | ***string*** ||
