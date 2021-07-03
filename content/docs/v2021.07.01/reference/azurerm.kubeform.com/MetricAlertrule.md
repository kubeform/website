---
title: MetricAlertrule
menu:
  docs_v2021.07.01:
    identifier: metricalertrule-azurerm.kubeform.com
    name: MetricAlertrule
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

## MetricAlertrule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MetricAlertrule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MetricAlertruleSpec](#metricalertrulespec)***||
| `status` | ***[MetricAlertruleStatus](#metricalertrulestatus)***||
## MetricAlertruleSpec

Appears on:[MetricAlertrule](#metricalertrule), [MetricAlertruleStatus](#metricalertrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `aggregation` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `emailAction` | ***[[]MetricAlertruleSpecEmailAction](#metricalertrulespecemailaction)***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `location` | ***string***||
| `metricName` | ***string***||
| `name` | ***string***||
| `operator` | ***string***||
| `period` | ***string***||
| `resourceGroupName` | ***string***||
| `resourceID` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `threshold` | ***float64***||
| `webhookAction` | ***[[]MetricAlertruleSpecWebhookAction](#metricalertrulespecwebhookaction)***| ***(Optional)*** |
## MetricAlertruleSpecEmailAction

Appears on:[MetricAlertruleSpec](#metricalertrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `customEmails` | ***[]string***| ***(Optional)*** |
| `sendToServiceOwners` | ***bool***| ***(Optional)*** |
## MetricAlertruleSpecWebhookAction

Appears on:[MetricAlertruleSpec](#metricalertrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `properties` | ***map[string]string***| ***(Optional)*** |
| `serviceURI` | ***string***||
## MetricAlertruleStatus

Appears on:[MetricAlertrule](#metricalertrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MetricAlertruleSpec](#metricalertrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MetricAlertruleStatus](#metricalertrulestatus)

---
