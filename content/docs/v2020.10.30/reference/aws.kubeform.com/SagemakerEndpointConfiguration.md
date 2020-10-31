---
title: SagemakerEndpointConfiguration
menu:
  docs_v2020.10.30:
    identifier: sagemakerendpointconfiguration-aws.kubeform.com
    name: SagemakerEndpointConfiguration
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## SagemakerEndpointConfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SagemakerEndpointConfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SagemakerEndpointConfigurationSpec](#sagemakerendpointconfigurationspec)***||
| `status` | ***[SagemakerEndpointConfigurationStatus](#sagemakerendpointconfigurationstatus)***||
## Phase(`string` alias)

Appears on:[SagemakerEndpointConfigurationStatus](#sagemakerendpointconfigurationstatus)

## SagemakerEndpointConfigurationSpec

Appears on:[SagemakerEndpointConfiguration](#sagemakerendpointconfiguration), [SagemakerEndpointConfigurationStatus](#sagemakerendpointconfigurationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `kmsKeyArn` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `productionVariants` | ***[[]SagemakerEndpointConfigurationSpecProductionVariants](#sagemakerendpointconfigurationspecproductionvariants)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## SagemakerEndpointConfigurationSpecProductionVariants

Appears on:[SagemakerEndpointConfigurationSpec](#sagemakerendpointconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `acceleratorType` | ***string***| ***(Optional)*** |
| `initialInstanceCount` | ***int64***||
| `initialVariantWeight` | ***float64***| ***(Optional)*** |
| `instanceType` | ***string***||
| `modelName` | ***string***||
| `variantName` | ***string***| ***(Optional)*** |
## SagemakerEndpointConfigurationStatus

Appears on:[SagemakerEndpointConfiguration](#sagemakerendpointconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SagemakerEndpointConfigurationSpec](#sagemakerendpointconfigurationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
