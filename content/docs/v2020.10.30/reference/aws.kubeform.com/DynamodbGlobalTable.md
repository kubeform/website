---
title: DynamodbGlobalTable
menu:
  docs_v2020.10.30:
    identifier: dynamodbglobaltable-aws.kubeform.com
    name: DynamodbGlobalTable
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## DynamodbGlobalTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DynamodbGlobalTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DynamodbGlobalTableSpec](#dynamodbglobaltablespec)***||
| `status` | ***[DynamodbGlobalTableStatus](#dynamodbglobaltablestatus)***||
## DynamodbGlobalTableSpec

Appears on:[DynamodbGlobalTable](#dynamodbglobaltable), [DynamodbGlobalTableStatus](#dynamodbglobaltablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `replica` | ***[[]DynamodbGlobalTableSpecReplica](#dynamodbglobaltablespecreplica)***||
## DynamodbGlobalTableSpecReplica

Appears on:[DynamodbGlobalTableSpec](#dynamodbglobaltablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `regionName` | ***string***||
## DynamodbGlobalTableStatus

Appears on:[DynamodbGlobalTable](#dynamodbglobaltable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DynamodbGlobalTableSpec](#dynamodbglobaltablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DynamodbGlobalTableStatus](#dynamodbglobaltablestatus)

---
