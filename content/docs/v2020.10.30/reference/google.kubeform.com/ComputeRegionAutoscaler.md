---
title: ComputeRegionAutoscaler
menu:
  docs_v2020.10.30:
    identifier: computeregionautoscaler-google.kubeform.com
    name: ComputeRegionAutoscaler
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ComputeRegionAutoscaler
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeRegionAutoscaler` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeRegionAutoscalerSpec](#computeregionautoscalerspec)***||
| `status` | ***[ComputeRegionAutoscalerStatus](#computeregionautoscalerstatus)***||
## ComputeRegionAutoscalerSpec

Appears on:[ComputeRegionAutoscaler](#computeregionautoscaler), [ComputeRegionAutoscalerStatus](#computeregionautoscalerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
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
| `cooldownPeriod` | ***int64***| ***(Optional)*** |
| `cpuUtilization` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyCpuUtilization](#computeregionautoscalerspecautoscalingpolicycpuutilization)***| ***(Optional)*** |
| `loadBalancingUtilization` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyLoadBalancingUtilization](#computeregionautoscalerspecautoscalingpolicyloadbalancingutilization)***| ***(Optional)*** |
| `maxReplicas` | ***int64***||
| `metric` | ***[[]ComputeRegionAutoscalerSpecAutoscalingPolicyMetric](#computeregionautoscalerspecautoscalingpolicymetric)***| ***(Optional)*** |
| `minReplicas` | ***int64***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyCpuUtilization

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `target` | ***float64***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyLoadBalancingUtilization

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `target` | ***float64***||
## ComputeRegionAutoscalerSpecAutoscalingPolicyMetric

Appears on:[ComputeRegionAutoscalerSpecAutoscalingPolicy](#computeregionautoscalerspecautoscalingpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `target` | ***float64***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## ComputeRegionAutoscalerStatus

Appears on:[ComputeRegionAutoscaler](#computeregionautoscaler)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeRegionAutoscalerSpec](#computeregionautoscalerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeRegionAutoscalerStatus](#computeregionautoscalerstatus)

---
