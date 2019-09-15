---
title: DatasyncAgent
menu:
  docs_v0.0.1:
    identifier: datasyncagent-aws.kubeform.com
    name: DatasyncAgent
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DatasyncAgent
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DatasyncAgent` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DatasyncAgentSpec](#DatasyncAgentSpec)***||
| `status` | ***[DatasyncAgentStatus](#DatasyncAgentStatus)***||
## DatasyncAgentSpec
##### (Appears on:[DatasyncAgent](#DatasyncAgent), [DatasyncAgentStatus](#DatasyncAgentStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `activationKey` | ***string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `ipAddress` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## DatasyncAgentStatus
##### (Appears on:[DatasyncAgent](#DatasyncAgent))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DatasyncAgentSpec](#DatasyncAgentSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
