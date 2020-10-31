---
title: StreamAnalyticsStreamInputIothub
menu:
  docs_v2020.10.30:
    identifier: streamanalyticsstreaminputiothub-azurerm.kubeform.com
    name: StreamAnalyticsStreamInputIothub
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## StreamAnalyticsStreamInputIothub
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StreamAnalyticsStreamInputIothub` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StreamAnalyticsStreamInputIothubSpec](#streamanalyticsstreaminputiothubspec)***||
| `status` | ***[StreamAnalyticsStreamInputIothubStatus](#streamanalyticsstreaminputiothubstatus)***||
## Phase(`string` alias)

Appears on:[StreamAnalyticsStreamInputIothubStatus](#streamanalyticsstreaminputiothubstatus)

## StreamAnalyticsStreamInputIothubSpec

Appears on:[StreamAnalyticsStreamInputIothub](#streamanalyticsstreaminputiothub), [StreamAnalyticsStreamInputIothubStatus](#streamanalyticsstreaminputiothubstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `endpoint` | ***string***||
| `eventhubConsumerGroupName` | ***string***||
| `iothubNamespace` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `serialization` | ***[[]StreamAnalyticsStreamInputIothubSpecSerialization](#streamanalyticsstreaminputiothubspecserialization)***||
| `sharedAccessPolicyName` | ***string***||
| `streamAnalyticsJobName` | ***string***||
## StreamAnalyticsStreamInputIothubSpecSerialization

Appears on:[StreamAnalyticsStreamInputIothubSpec](#streamanalyticsstreaminputiothubspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `encoding` | ***string***| ***(Optional)*** |
| `fieldDelimiter` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## StreamAnalyticsStreamInputIothubStatus

Appears on:[StreamAnalyticsStreamInputIothub](#streamanalyticsstreaminputiothub)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StreamAnalyticsStreamInputIothubSpec](#streamanalyticsstreaminputiothubspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `shared_access_policy_key` | ***string*** ||
