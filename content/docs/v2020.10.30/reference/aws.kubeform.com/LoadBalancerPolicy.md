---
title: LoadBalancerPolicy
menu:
  docs_v2020.10.30:
    identifier: loadbalancerpolicy-aws.kubeform.com
    name: LoadBalancerPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## LoadBalancerPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LoadBalancerPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LoadBalancerPolicySpec](#loadbalancerpolicyspec)***||
| `status` | ***[LoadBalancerPolicyStatus](#loadbalancerpolicystatus)***||
## LoadBalancerPolicySpec

Appears on:[LoadBalancerPolicy](#loadbalancerpolicy), [LoadBalancerPolicyStatus](#loadbalancerpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `loadBalancerName` | ***string***||
| `policyAttribute` | ***[[]LoadBalancerPolicySpecPolicyAttribute](#loadbalancerpolicyspecpolicyattribute)***| ***(Optional)*** |
| `policyName` | ***string***||
| `policyTypeName` | ***string***||
## LoadBalancerPolicySpecPolicyAttribute

Appears on:[LoadBalancerPolicySpec](#loadbalancerpolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
| `value` | ***string***| ***(Optional)*** |
## LoadBalancerPolicyStatus

Appears on:[LoadBalancerPolicy](#loadbalancerpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LoadBalancerPolicySpec](#loadbalancerpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LoadBalancerPolicyStatus](#loadbalancerpolicystatus)

---