---
title: ServicebusSubscription
menu:
  docs_v2020.10.13:
    identifier: servicebussubscription-azurerm.kubeform.com
    name: ServicebusSubscription
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## ServicebusSubscription
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ServicebusSubscription` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServicebusSubscriptionSpec](#servicebussubscriptionspec)***||
| `status` | ***[ServicebusSubscriptionStatus](#servicebussubscriptionstatus)***||
## Phase(`string` alias)

Appears on:[ServicebusSubscriptionStatus](#servicebussubscriptionstatus)

## ServicebusSubscriptionSpec

Appears on:[ServicebusSubscription](#servicebussubscription), [ServicebusSubscriptionStatus](#servicebussubscriptionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoDeleteOnIdle` | ***string***| ***(Optional)*** |
| `deadLetteringOnFilterEvaluationExceptions` | ***bool***| ***(Optional)*** Deprecated|
| `deadLetteringOnMessageExpiration` | ***bool***| ***(Optional)*** |
| `defaultMessageTtl` | ***string***| ***(Optional)*** |
| `enableBatchedOperations` | ***bool***| ***(Optional)*** |
| `forwardTo` | ***string***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** Deprecated|
| `lockDuration` | ***string***| ***(Optional)*** |
| `maxDeliveryCount` | ***int64***||
| `name` | ***string***||
| `namespaceName` | ***string***||
| `requiresSession` | ***bool***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `topicName` | ***string***||
## ServicebusSubscriptionStatus

Appears on:[ServicebusSubscription](#servicebussubscription)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServicebusSubscriptionSpec](#servicebussubscriptionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
