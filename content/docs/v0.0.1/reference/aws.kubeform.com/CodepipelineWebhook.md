---
title: CodepipelineWebhook
menu:
  docs_v0.0.1:
    identifier: codepipelinewebhook-aws.kubeform.com
    name: CodepipelineWebhook
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## CodepipelineWebhook
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CodepipelineWebhook` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CodepipelineWebhookSpec](#CodepipelineWebhookSpec)***||
| `status` | ***[CodepipelineWebhookStatus](#CodepipelineWebhookStatus)***||
## CodepipelineWebhookSpec
##### (Appears on:[CodepipelineWebhook](#CodepipelineWebhook), [CodepipelineWebhookStatus](#CodepipelineWebhookStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `authentication` | ***string***||
| `authenticationConfiguration` | ***[[]CodepipelineWebhookSpecAuthenticationConfiguration](#CodepipelineWebhookSpecAuthenticationConfiguration)***| ***(Optional)*** |
| `filter` | ***[[]CodepipelineWebhookSpecFilter](#CodepipelineWebhookSpecFilter)***||
| `name` | ***string***||
| `targetAction` | ***string***||
| `targetPipeline` | ***string***||
| `url` | ***string***| ***(Optional)*** |
## CodepipelineWebhookSpecAuthenticationConfiguration
##### (Appears on:[CodepipelineWebhookSpec](#CodepipelineWebhookSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedIPRange` | ***string***| ***(Optional)*** |
## CodepipelineWebhookSpecFilter
##### (Appears on:[CodepipelineWebhookSpec](#CodepipelineWebhookSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `jsonPath` | ***string***||
| `matchEquals` | ***string***||
## CodepipelineWebhookStatus
##### (Appears on:[CodepipelineWebhook](#CodepipelineWebhook))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CodepipelineWebhookSpec](#CodepipelineWebhookSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `authentication_configuration.<index>.secret_token` | ***string*** ||
