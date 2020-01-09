---
title: StreamAnalyticsOutputServicebusQueue
menu:
  docs_v0.0.1:
    identifier: streamanalyticsoutputservicebusqueue-azurerm.kubeform.com
    name: StreamAnalyticsOutputServicebusQueue
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## StreamAnalyticsOutputServicebusQueue
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StreamAnalyticsOutputServicebusQueue` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StreamAnalyticsOutputServicebusQueueSpec](#streamanalyticsoutputservicebusqueuespec)***||
| `status` | ***[StreamAnalyticsOutputServicebusQueueStatus](#streamanalyticsoutputservicebusqueuestatus)***||
## StreamAnalyticsOutputServicebusQueueSpec

Appears on:[StreamAnalyticsOutputServicebusQueue](#streamanalyticsoutputservicebusqueue), [StreamAnalyticsOutputServicebusQueueStatus](#streamanalyticsoutputservicebusqueuestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `name` | ***string***||
| `queueName` | ***string***||
| `resourceGroupName` | ***string***||
| `serialization` | ***[[]StreamAnalyticsOutputServicebusQueueSpecSerialization](#streamanalyticsoutputservicebusqueuespecserialization)***||
| `servicebusNamespace` | ***string***||
| `sharedAccessPolicyName` | ***string***||
| `streamAnalyticsJobName` | ***string***||
## StreamAnalyticsOutputServicebusQueueSpecSerialization

Appears on:[StreamAnalyticsOutputServicebusQueueSpec](#streamanalyticsoutputservicebusqueuespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `encoding` | ***string***| ***(Optional)*** |
| `fieldDelimiter` | ***string***| ***(Optional)*** |
| `format` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## StreamAnalyticsOutputServicebusQueueStatus

Appears on:[StreamAnalyticsOutputServicebusQueue](#streamanalyticsoutputservicebusqueue)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StreamAnalyticsOutputServicebusQueueSpec](#streamanalyticsoutputservicebusqueuespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `shared_access_policy_key` | ***string*** ||