---
title: MonitorDiagnosticSetting
menu:
  docs_v0.1.0:
    identifier: monitordiagnosticsetting-azurerm.kubeform.com
    name: MonitorDiagnosticSetting
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## MonitorDiagnosticSetting
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MonitorDiagnosticSetting` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MonitorDiagnosticSettingSpec](#monitordiagnosticsettingspec)***||
| `status` | ***[MonitorDiagnosticSettingStatus](#monitordiagnosticsettingstatus)***||
## MonitorDiagnosticSettingSpec

Appears on:[MonitorDiagnosticSetting](#monitordiagnosticsetting), [MonitorDiagnosticSettingStatus](#monitordiagnosticsettingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `eventhubAuthorizationRuleID` | ***string***| ***(Optional)*** |
| `eventhubName` | ***string***| ***(Optional)*** |
| `log` | ***[[]MonitorDiagnosticSettingSpecLog](#monitordiagnosticsettingspeclog)***| ***(Optional)*** |
| `logAnalyticsWorkspaceID` | ***string***| ***(Optional)*** |
| `metric` | ***[[]MonitorDiagnosticSettingSpecMetric](#monitordiagnosticsettingspecmetric)***| ***(Optional)*** |
| `name` | ***string***||
| `storageAccountID` | ***string***| ***(Optional)*** |
| `targetResourceID` | ***string***||
## MonitorDiagnosticSettingSpecLog

Appears on:[MonitorDiagnosticSettingSpec](#monitordiagnosticsettingspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `category` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `retentionPolicy` | ***[[]MonitorDiagnosticSettingSpecLogRetentionPolicy](#monitordiagnosticsettingspeclogretentionpolicy)***||
## MonitorDiagnosticSettingSpecLogRetentionPolicy

Appears on:[MonitorDiagnosticSettingSpecLog](#monitordiagnosticsettingspeclog)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `days` | ***int64***| ***(Optional)*** |
| `enabled` | ***bool***||
## MonitorDiagnosticSettingSpecMetric

Appears on:[MonitorDiagnosticSettingSpec](#monitordiagnosticsettingspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `category` | ***string***||
| `enabled` | ***bool***| ***(Optional)*** |
| `retentionPolicy` | ***[[]MonitorDiagnosticSettingSpecMetricRetentionPolicy](#monitordiagnosticsettingspecmetricretentionpolicy)***||
## MonitorDiagnosticSettingSpecMetricRetentionPolicy

Appears on:[MonitorDiagnosticSettingSpecMetric](#monitordiagnosticsettingspecmetric)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `days` | ***int64***| ***(Optional)*** |
| `enabled` | ***bool***||
## MonitorDiagnosticSettingStatus

Appears on:[MonitorDiagnosticSetting](#monitordiagnosticsetting)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MonitorDiagnosticSettingSpec](#monitordiagnosticsettingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MonitorDiagnosticSettingStatus](#monitordiagnosticsettingstatus)

---
