---
title: LoadBalancerListenerPolicy
menu:
  docs_v0.0.1:
    identifier: loadbalancerlistenerpolicy-aws.kubeform.com
    name: LoadBalancerListenerPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## LoadBalancerListenerPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LoadBalancerListenerPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LoadBalancerListenerPolicySpec](#loadbalancerlistenerpolicyspec)***||
| `status` | ***[LoadBalancerListenerPolicyStatus](#loadbalancerlistenerpolicystatus)***||
## LoadBalancerListenerPolicySpec

Appears on:[LoadBalancerListenerPolicy](#loadbalancerlistenerpolicy), [LoadBalancerListenerPolicyStatus](#loadbalancerlistenerpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `loadBalancerName` | ***string***||
| `loadBalancerPort` | ***int***||
| `policyNames` | ***[]string***| ***(Optional)*** |
## LoadBalancerListenerPolicyStatus

Appears on:[LoadBalancerListenerPolicy](#loadbalancerlistenerpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LoadBalancerListenerPolicySpec](#loadbalancerlistenerpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
