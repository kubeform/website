---
title: ConfigAggregateAuthorization
menu:
  docs_v2020.10.13:
    identifier: configaggregateauthorization-aws.kubeform.com
    name: ConfigAggregateAuthorization
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## ConfigAggregateAuthorization
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ConfigAggregateAuthorization` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ConfigAggregateAuthorizationSpec](#configaggregateauthorizationspec)***||
| `status` | ***[ConfigAggregateAuthorizationStatus](#configaggregateauthorizationstatus)***||
## ConfigAggregateAuthorizationSpec

Appears on:[ConfigAggregateAuthorization](#configaggregateauthorization), [ConfigAggregateAuthorizationStatus](#configaggregateauthorizationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountID` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `region` | ***string***||
## ConfigAggregateAuthorizationStatus

Appears on:[ConfigAggregateAuthorization](#configaggregateauthorization)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ConfigAggregateAuthorizationSpec](#configaggregateauthorizationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ConfigAggregateAuthorizationStatus](#configaggregateauthorizationstatus)

---
