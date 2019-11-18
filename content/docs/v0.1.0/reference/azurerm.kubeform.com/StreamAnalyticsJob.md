---
title: StreamAnalyticsJob
menu:
  docs_v0.1.0:
    identifier: streamanalyticsjob-azurerm.kubeform.com
    name: StreamAnalyticsJob
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## StreamAnalyticsJob
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StreamAnalyticsJob` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StreamAnalyticsJobSpec](#streamanalyticsjobspec)***||
| `status` | ***[StreamAnalyticsJobStatus](#streamanalyticsjobstatus)***||
## Phase(`string` alias)

Appears on:[StreamAnalyticsJobStatus](#streamanalyticsjobstatus)

## StreamAnalyticsJobSpec

Appears on:[StreamAnalyticsJob](#streamanalyticsjob), [StreamAnalyticsJobStatus](#streamanalyticsjobstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `compatibilityLevel` | ***string***||
| `dataLocale` | ***string***||
| `eventsLateArrivalMaxDelayInSeconds` | ***int64***||
| `eventsOutOfOrderMaxDelayInSeconds` | ***int64***||
| `eventsOutOfOrderPolicy` | ***string***||
| `jobID` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `outputErrorPolicy` | ***string***||
| `resourceGroupName` | ***string***||
| `streamingUnits` | ***int64***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `transformationQuery` | ***string***||
## StreamAnalyticsJobStatus

Appears on:[StreamAnalyticsJob](#streamanalyticsjob)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StreamAnalyticsJobSpec](#streamanalyticsjobspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
