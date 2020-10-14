---
title: ComputeNetwork
menu:
  docs_v2020.10.13:
    identifier: computenetwork-google.kubeform.com
    name: ComputeNetwork
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## ComputeNetwork
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeNetwork` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeNetworkSpec](#computenetworkspec)***||
| `status` | ***[ComputeNetworkStatus](#computenetworkstatus)***||
## ComputeNetworkSpec

Appears on:[ComputeNetwork](#computenetwork), [ComputeNetworkStatus](#computenetworkstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoCreateSubnetworks` | ***bool***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `gatewayIpv4` | ***string***| ***(Optional)*** |
| `ipv4Range` | ***string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `routingMode` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeNetworkStatus

Appears on:[ComputeNetwork](#computenetwork)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeNetworkSpec](#computenetworkspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeNetworkStatus](#computenetworkstatus)

---
