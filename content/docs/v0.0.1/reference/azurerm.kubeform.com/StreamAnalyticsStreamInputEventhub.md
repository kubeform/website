---
title: StreamAnalyticsStreamInputEventhub
menu:
  docs_v0.0.1:
    identifier: streamanalyticsstreaminputeventhub-azurerm.kubeform.com
    name: StreamAnalyticsStreamInputEventhub
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## StreamAnalyticsStreamInputEventhub
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StreamAnalyticsStreamInputEventhub` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StreamAnalyticsStreamInputEventhubSpec](#StreamAnalyticsStreamInputEventhubSpec)***||
| `status` | ***[StreamAnalyticsStreamInputEventhubStatus](#StreamAnalyticsStreamInputEventhubStatus)***||
## StreamAnalyticsStreamInputEventhubSpec
##### (Appears on:[StreamAnalyticsStreamInputEventhub](#StreamAnalyticsStreamInputEventhub), [StreamAnalyticsStreamInputEventhubStatus](#StreamAnalyticsStreamInputEventhubStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `eventhubConsumerGroupName` | ***string***||
| `eventhubName` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `serialization` | ***[[]StreamAnalyticsStreamInputEventhubSpecSerialization](#StreamAnalyticsStreamInputEventhubSpecSerialization)***||
| `servicebusNamespace` | ***string***||
| `sharedAccessPolicyName` | ***string***||
| `streamAnalyticsJobName` | ***string***||
## StreamAnalyticsStreamInputEventhubSpecSerialization
##### (Appears on:[StreamAnalyticsStreamInputEventhubSpec](#StreamAnalyticsStreamInputEventhubSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `encoding` | ***string***| ***(Optional)*** |
| `fieldDelimiter` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## StreamAnalyticsStreamInputEventhubStatus
##### (Appears on:[StreamAnalyticsStreamInputEventhub](#StreamAnalyticsStreamInputEventhub))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StreamAnalyticsStreamInputEventhubSpec](#StreamAnalyticsStreamInputEventhubSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `shared_access_policy_key` | ***string*** ||
