---
title: StreamAnalyticsJob
menu:
  docs_v2021.07.01:
    identifier: streamanalyticsjob-azurerm.kubeform.com
    name: StreamAnalyticsJob
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

## StreamAnalyticsJob
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StreamAnalyticsJob` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StreamAnalyticsJobSpec](#streamanalyticsjobspec)***||
| `status` | ***[StreamAnalyticsJobStatus](#streamanalyticsjobstatus)***||
## Phase(`string` alias)

Appears on:[StreamAnalyticsJobStatus](#streamanalyticsjobstatus)

## StreamAnalyticsJobSpec

Appears on:[StreamAnalyticsJob](#streamanalyticsjob), [StreamAnalyticsJobStatus](#streamanalyticsjobstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `compatibilityLevel` | ***string***| ***(Optional)*** |
| `dataLocale` | ***string***| ***(Optional)*** |
| `eventsLateArrivalMaxDelayInSeconds` | ***int64***| ***(Optional)*** |
| `eventsOutOfOrderMaxDelayInSeconds` | ***int64***| ***(Optional)*** |
| `eventsOutOfOrderPolicy` | ***string***| ***(Optional)*** |
| `jobID` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `outputErrorPolicy` | ***string***| ***(Optional)*** |
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
