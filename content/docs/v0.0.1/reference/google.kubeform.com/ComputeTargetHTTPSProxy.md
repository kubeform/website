---
title: ComputeTargetHTTPSProxy
menu:
  docs_v0.0.1:
    identifier: computetargethttpsproxy-google.kubeform.com
    name: ComputeTargetHTTPSProxy
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## ComputeTargetHTTPSProxy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeTargetHTTPSProxy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeTargetHTTPSProxySpec](#ComputeTargetHTTPSProxySpec)***||
| `status` | ***[ComputeTargetHTTPSProxyStatus](#ComputeTargetHTTPSProxyStatus)***||
## ComputeTargetHTTPSProxySpec
##### (Appears on:[ComputeTargetHTTPSProxy](#ComputeTargetHTTPSProxy), [ComputeTargetHTTPSProxyStatus](#ComputeTargetHTTPSProxyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `proxyID` | ***int***| ***(Optional)*** |
| `quicOverride` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `sslCertificates` | ***[]string***||
| `sslPolicy` | ***string***| ***(Optional)*** |
| `urlMap` | ***string***||
## ComputeTargetHTTPSProxyStatus
##### (Appears on:[ComputeTargetHTTPSProxy](#ComputeTargetHTTPSProxy))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeTargetHTTPSProxySpec](#ComputeTargetHTTPSProxySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---