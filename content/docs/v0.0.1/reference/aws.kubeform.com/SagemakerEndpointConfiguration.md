---
title: SagemakerEndpointConfiguration
menu:
  docs_v0.0.1:
    identifier: sagemakerendpointconfiguration-aws.kubeform.com
    name: SagemakerEndpointConfiguration
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## SagemakerEndpointConfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SagemakerEndpointConfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SagemakerEndpointConfigurationSpec](#SagemakerEndpointConfigurationSpec)***||
| `status` | ***[SagemakerEndpointConfigurationStatus](#SagemakerEndpointConfigurationStatus)***||
## SagemakerEndpointConfigurationSpec
##### (Appears on:[SagemakerEndpointConfiguration](#SagemakerEndpointConfiguration), [SagemakerEndpointConfigurationStatus](#SagemakerEndpointConfigurationStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `kmsKeyArn` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `productionVariants` | ***[[]SagemakerEndpointConfigurationSpecProductionVariants](#SagemakerEndpointConfigurationSpecProductionVariants)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## SagemakerEndpointConfigurationSpecProductionVariants
##### (Appears on:[SagemakerEndpointConfigurationSpec](#SagemakerEndpointConfigurationSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `acceleratorType` | ***string***| ***(Optional)*** |
| `initialInstanceCount` | ***int***||
| `initialVariantWeight` | ***encoding/json.Number***| ***(Optional)*** |
| `instanceType` | ***string***||
| `modelName` | ***string***||
| `variantName` | ***string***| ***(Optional)*** |
## SagemakerEndpointConfigurationStatus
##### (Appears on:[SagemakerEndpointConfiguration](#SagemakerEndpointConfiguration))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SagemakerEndpointConfigurationSpec](#SagemakerEndpointConfigurationSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---