---
title: CodecommitTrigger
menu:
  docs_v0.0.1:
    identifier: codecommittrigger-aws.kubeform.com
    name: CodecommitTrigger
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## CodecommitTrigger
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CodecommitTrigger` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CodecommitTriggerSpec](#codecommittriggerspec)***||
| `status` | ***[CodecommitTriggerStatus](#codecommittriggerstatus)***||
## CodecommitTriggerSpec

Appears on:[CodecommitTrigger](#codecommittrigger), [CodecommitTriggerStatus](#codecommittriggerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `configurationID` | ***string***| ***(Optional)*** |
| `repositoryName` | ***string***||
| `trigger` | ***[[]CodecommitTriggerSpecTrigger](#codecommittriggerspectrigger)***||
## CodecommitTriggerSpecTrigger

Appears on:[CodecommitTriggerSpec](#codecommittriggerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `branches` | ***[]string***| ***(Optional)*** |
| `customData` | ***string***| ***(Optional)*** |
| `destinationArn` | ***string***||
| `events` | ***[]string***||
| `name` | ***string***||
## CodecommitTriggerStatus

Appears on:[CodecommitTrigger](#codecommittrigger)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CodecommitTriggerSpec](#codecommittriggerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
