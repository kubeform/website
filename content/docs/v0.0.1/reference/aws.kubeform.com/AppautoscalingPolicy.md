---
title: AppautoscalingPolicy
menu:
  docs_v0.0.1:
    identifier: appautoscalingpolicy-aws.kubeform.com
    name: AppautoscalingPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## AppautoscalingPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppautoscalingPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppautoscalingPolicySpec](#AppautoscalingPolicySpec)***||
| `status` | ***[AppautoscalingPolicyStatus](#AppautoscalingPolicyStatus)***||
## AppautoscalingPolicySpec
##### (Appears on:[AppautoscalingPolicy](#AppautoscalingPolicy), [AppautoscalingPolicyStatus](#AppautoscalingPolicyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `alarms` | ***[]string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `policyType` | ***string***| ***(Optional)*** |
| `resourceID` | ***string***||
| `scalableDimension` | ***string***||
| `serviceNamespace` | ***string***||
| `stepScalingPolicyConfiguration` | ***[[]AppautoscalingPolicySpecStepScalingPolicyConfiguration](#AppautoscalingPolicySpecStepScalingPolicyConfiguration)***| ***(Optional)*** |
| `targetTrackingScalingPolicyConfiguration` | ***[[]AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration](#AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration)***| ***(Optional)*** |
## AppautoscalingPolicySpecStepScalingPolicyConfiguration
##### (Appears on:[AppautoscalingPolicySpec](#AppautoscalingPolicySpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `adjustmentType` | ***string***| ***(Optional)*** |
| `cooldown` | ***int***| ***(Optional)*** |
| `metricAggregationType` | ***string***| ***(Optional)*** |
| `minAdjustmentMagnitude` | ***int***| ***(Optional)*** |
| `stepAdjustment` | ***[[]AppautoscalingPolicySpecStepScalingPolicyConfigurationStepAdjustment](#AppautoscalingPolicySpecStepScalingPolicyConfigurationStepAdjustment)***| ***(Optional)*** |
## AppautoscalingPolicySpecStepScalingPolicyConfigurationStepAdjustment
##### (Appears on:[AppautoscalingPolicySpecStepScalingPolicyConfiguration](#AppautoscalingPolicySpecStepScalingPolicyConfiguration))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `metricIntervalLowerBound` | ***string***| ***(Optional)*** |
| `metricIntervalUpperBound` | ***string***| ***(Optional)*** |
| `scalingAdjustment` | ***int***||
## AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration
##### (Appears on:[AppautoscalingPolicySpec](#AppautoscalingPolicySpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `customizedMetricSpecification` | ***[[]AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification](#AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification)***| ***(Optional)*** |
| `disableScaleIn` | ***bool***| ***(Optional)*** |
| `predefinedMetricSpecification` | ***[[]AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification](#AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification)***| ***(Optional)*** |
| `scaleInCooldown` | ***int***| ***(Optional)*** |
| `scaleOutCooldown` | ***int***| ***(Optional)*** |
| `targetValue` | ***encoding/json.Number***||
## AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification
##### (Appears on:[AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration](#AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `dimensions` | ***[[]AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions](#AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions)***| ***(Optional)*** |
| `metricName` | ***string***||
| `namespace` | ***string***||
| `statistic` | ***string***||
| `unit` | ***string***| ***(Optional)*** |
## AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions
##### (Appears on:[AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification](#AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `value` | ***string***||
## AppautoscalingPolicySpecTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification
##### (Appears on:[AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration](#AppautoscalingPolicySpecTargetTrackingScalingPolicyConfiguration))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `predefinedMetricType` | ***string***||
| `resourceLabel` | ***string***| ***(Optional)*** |
## AppautoscalingPolicyStatus
##### (Appears on:[AppautoscalingPolicy](#AppautoscalingPolicy))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppautoscalingPolicySpec](#AppautoscalingPolicySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
