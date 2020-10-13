---
title: SnsPlatformApplication
menu:
  docs_v2020.10.13:
    identifier: snsplatformapplication-aws.kubeform.com
    name: SnsPlatformApplication
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## SnsPlatformApplication
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SnsPlatformApplication` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SnsPlatformApplicationSpec](#snsplatformapplicationspec)***||
| `status` | ***[SnsPlatformApplicationStatus](#snsplatformapplicationstatus)***||
## Phase(`string` alias)

Appears on:[SnsPlatformApplicationStatus](#snsplatformapplicationstatus)

## SnsPlatformApplicationSpec

Appears on:[SnsPlatformApplication](#snsplatformapplication), [SnsPlatformApplicationStatus](#snsplatformapplicationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `eventDeliveryFailureTopicArn` | ***string***| ***(Optional)*** |
| `eventEndpointCreatedTopicArn` | ***string***| ***(Optional)*** |
| `eventEndpointDeletedTopicArn` | ***string***| ***(Optional)*** |
| `eventEndpointUpdatedTopicArn` | ***string***| ***(Optional)*** |
| `failureFeedbackRoleArn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `platform` | ***string***||
| `platformCredential` | ***string***||
| `platformPrincipal` | ***string***| ***(Optional)*** |
| `successFeedbackRoleArn` | ***string***| ***(Optional)*** |
| `successFeedbackSampleRate` | ***string***| ***(Optional)*** |
## SnsPlatformApplicationStatus

Appears on:[SnsPlatformApplication](#snsplatformapplication)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SnsPlatformApplicationSpec](#snsplatformapplicationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
