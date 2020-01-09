---
title: RedshiftParameterGroup
menu:
  docs_v0.0.1:
    identifier: redshiftparametergroup-aws.kubeform.com
    name: RedshiftParameterGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## RedshiftParameterGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RedshiftParameterGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RedshiftParameterGroupSpec](#redshiftparametergroupspec)***||
| `status` | ***[RedshiftParameterGroupStatus](#redshiftparametergroupstatus)***||
## RedshiftParameterGroupSpec

Appears on:[RedshiftParameterGroup](#redshiftparametergroup), [RedshiftParameterGroupStatus](#redshiftparametergroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `family` | ***string***||
| `name` | ***string***||
| `parameter` | ***[[]RedshiftParameterGroupSpecParameter](#redshiftparametergroupspecparameter)***| ***(Optional)*** |
## RedshiftParameterGroupSpecParameter

Appears on:[RedshiftParameterGroupSpec](#redshiftparametergroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `value` | ***string***||
## RedshiftParameterGroupStatus

Appears on:[RedshiftParameterGroup](#redshiftparametergroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RedshiftParameterGroupSpec](#redshiftparametergroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---