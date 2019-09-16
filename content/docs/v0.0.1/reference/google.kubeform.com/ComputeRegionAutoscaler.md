---
title: ComputeRegionAutoscaler
menu:
  docs_v0.0.1:
    identifier: computeregionautoscaler-google.kubeform.com
    name: ComputeRegionAutoscaler
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ComputeRegionAutoscaler
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeRegionAutoscaler` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeRegionAutoscalerSpec](#computeregionautoscalerspec)***||
| `status` | ***[ComputeRegionAutoscalerStatus](#computeregionautoscalerstatus)***||
## ComputeRegionAutoscalerSpec

Appears on:[ComputeRegionAutoscaler](#computeregionautoscaler), [ComputeRegionAutoscalerStatus](#computeregionautoscalerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoscalingPolicy` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `target` | ***string***||
## ComputeRegionAutoscalerSpecAutoscalingPolicy

Appears on:[ComputeRegionAutoscalerSpec](#computeregionautoscalerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cooldownPeriod` | ***int***| ***(Optional)*** |
| `cpuUtilization` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyCpuUtilization](#computeregionautoscalerspecautoscalingpolicycpuutilization)***| ***(Optional)*** |
| `loadBalancingUtilization` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyLoadBalancingUtilization](#computeregionautoscalerspecautoscalingpolicyloadbalancingutilization)***| ***(Optional)*** |
| `maxReplicas` | ***int***||
| `metric` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyMetric](#computeregionautoscalerspecautoscalingpolicymetric)***| ***(Optional)*** |
| `minReplicas` | ***int***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyCpuUtilization

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `target` | ***encoding/json.Number***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyLoadBalancingUtilization

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `target` | ***encoding/json.Number***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyMetric

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `target` | ***encoding/json.Number***||
| `type` | ***string***||
## ComputeRegionAutoscalerStatus

Appears on:[ComputeRegionAutoscaler](#computeregionautoscaler)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeRegionAutoscalerSpec](#computeregionautoscalerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
