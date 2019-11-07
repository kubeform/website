---
title: SagemakerModel
menu:
  docs_v0.1.0:
    identifier: sagemakermodel-aws.kubeform.com
    name: SagemakerModel
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## SagemakerModel
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SagemakerModel` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SagemakerModelSpec](#sagemakermodelspec)***||
| `status` | ***[SagemakerModelStatus](#sagemakermodelstatus)***||
## Phase(`string` alias)

Appears on:[SagemakerModelStatus](#sagemakermodelstatus)

## SagemakerModelSpec

Appears on:[SagemakerModel](#sagemakermodel), [SagemakerModelStatus](#sagemakermodelstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `container` | ***[[]SagemakerModelSpecContainer](#sagemakermodelspeccontainer)***| ***(Optional)*** |
| `enableNetworkIsolation` | ***bool***| ***(Optional)*** |
| `executionRoleArn` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `primaryContainer` | ***[[]SagemakerModelSpecPrimaryContainer](#sagemakermodelspecprimarycontainer)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcConfig` | ***[[]SagemakerModelSpecVpcConfig](#sagemakermodelspecvpcconfig)***| ***(Optional)*** |
## SagemakerModelSpecContainer

Appears on:[SagemakerModelSpec](#sagemakermodelspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerHostname` | ***string***| ***(Optional)*** |
| `environment` | ***map[string]string***| ***(Optional)*** |
| `image` | ***string***||
| `modelDataURL` | ***string***| ***(Optional)*** |
## SagemakerModelSpecPrimaryContainer

Appears on:[SagemakerModelSpec](#sagemakermodelspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerHostname` | ***string***| ***(Optional)*** |
| `environment` | ***map[string]string***| ***(Optional)*** |
| `image` | ***string***||
| `modelDataURL` | ***string***| ***(Optional)*** |
## SagemakerModelSpecVpcConfig

Appears on:[SagemakerModelSpec](#sagemakermodelspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `securityGroupIDS` | ***[]string***||
| `subnets` | ***[]string***||
## SagemakerModelStatus

Appears on:[SagemakerModel](#sagemakermodel)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SagemakerModelSpec](#sagemakermodelspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
