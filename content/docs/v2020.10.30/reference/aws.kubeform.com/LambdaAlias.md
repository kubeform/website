---
title: LambdaAlias
menu:
  docs_v2020.10.30:
    identifier: lambdaalias-aws.kubeform.com
    name: LambdaAlias
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## LambdaAlias
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LambdaAlias` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LambdaAliasSpec](#lambdaaliasspec)***||
| `status` | ***[LambdaAliasStatus](#lambdaaliasstatus)***||
## LambdaAliasSpec

Appears on:[LambdaAlias](#lambdaalias), [LambdaAliasStatus](#lambdaaliasstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `functionName` | ***string***||
| `functionVersion` | ***string***||
| `invokeArn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `routingConfig` | ***[[]LambdaAliasSpecRoutingConfig](#lambdaaliasspecroutingconfig)***| ***(Optional)*** |
## LambdaAliasSpecRoutingConfig

Appears on:[LambdaAliasSpec](#lambdaaliasspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `additionalVersionWeights` | ***map[string]float64***| ***(Optional)*** |
## LambdaAliasStatus

Appears on:[LambdaAlias](#lambdaalias)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LambdaAliasSpec](#lambdaaliasspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LambdaAliasStatus](#lambdaaliasstatus)

---
