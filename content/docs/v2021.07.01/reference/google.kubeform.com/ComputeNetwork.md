---
title: ComputeNetwork
menu:
  docs_v2021.07.01:
    identifier: computenetwork-google.kubeform.com
    name: ComputeNetwork
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## ComputeNetwork
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeNetwork` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeNetworkSpec](#computenetworkspec)***||
| `status` | ***[ComputeNetworkStatus](#computenetworkstatus)***||
## ComputeNetworkSpec

Appears on:[ComputeNetwork](#computenetwork), [ComputeNetworkStatus](#computenetworkstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoCreateSubnetworks` | ***bool***| ***(Optional)*** |
| `deleteDefaultRoutesOnCreate` | ***bool***| ***(Optional)*** |
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
