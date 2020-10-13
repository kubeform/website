---
title: ComputeRouterInterface
menu:
  docs_v2020.10.13:
    identifier: computerouterinterface-google.kubeform.com
    name: ComputeRouterInterface
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## ComputeRouterInterface
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeRouterInterface` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeRouterInterfaceSpec](#computerouterinterfacespec)***||
| `status` | ***[ComputeRouterInterfaceStatus](#computerouterinterfacestatus)***||
## ComputeRouterInterfaceSpec

Appears on:[ComputeRouterInterface](#computerouterinterface), [ComputeRouterInterfaceStatus](#computerouterinterfacestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ipRange` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `router` | ***string***||
| `vpnTunnel` | ***string***||
## ComputeRouterInterfaceStatus

Appears on:[ComputeRouterInterface](#computerouterinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeRouterInterfaceSpec](#computerouterinterfacespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeRouterInterfaceStatus](#computerouterinterfacestatus)

---
