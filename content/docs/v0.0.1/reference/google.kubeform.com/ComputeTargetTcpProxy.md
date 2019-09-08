---
title: ComputeTargetTcpProxy
menu:
  docs_v0.0.1:
    identifier: computetargettcpproxy-google.kubeform.com
    name: ComputeTargetTcpProxy
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## ComputeTargetTcpProxy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeTargetTcpProxy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeTargetTcpProxySpec](#ComputeTargetTcpProxySpec)***||
| `status` | ***[ComputeTargetTcpProxyStatus](#ComputeTargetTcpProxyStatus)***||
## ComputeTargetTcpProxySpec
##### (Appears on:[ComputeTargetTcpProxy](#ComputeTargetTcpProxy), [ComputeTargetTcpProxyStatus](#ComputeTargetTcpProxyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backendService` | ***string***||
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `proxyHeader` | ***string***| ***(Optional)*** |
| `proxyID` | ***int***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeTargetTcpProxyStatus
##### (Appears on:[ComputeTargetTcpProxy](#ComputeTargetTcpProxy))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeTargetTcpProxySpec](#ComputeTargetTcpProxySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---