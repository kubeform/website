---
title: ComputeSSLPolicy
menu:
  docs_v0.0.1:
    identifier: computesslpolicy-google.kubeform.com
    name: ComputeSSLPolicy
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## ComputeSSLPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeSSLPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeSSLPolicySpec](#ComputeSSLPolicySpec)***||
| `status` | ***[ComputeSSLPolicyStatus](#ComputeSSLPolicyStatus)***||
## ComputeSSLPolicySpec
##### (Appears on:[ComputeSSLPolicy](#ComputeSSLPolicy), [ComputeSSLPolicyStatus](#ComputeSSLPolicyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `customFeatures` | ***[]string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `enabledFeatures` | ***[]string***| ***(Optional)*** |
| `fingerprint` | ***string***| ***(Optional)*** |
| `minTLSVersion` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `profile` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeSSLPolicyStatus
##### (Appears on:[ComputeSSLPolicy](#ComputeSSLPolicy))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeSSLPolicySpec](#ComputeSSLPolicySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---