---
title: ComputeInstanceGroup
menu:
  docs_v2021.07.01:
    identifier: computeinstancegroup-google.kubeform.com
    name: ComputeInstanceGroup
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

## ComputeInstanceGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeInstanceGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeInstanceGroupSpec](#computeinstancegroupspec)***||
| `status` | ***[ComputeInstanceGroupStatus](#computeinstancegroupstatus)***||
## ComputeInstanceGroupSpec

Appears on:[ComputeInstanceGroup](#computeinstancegroup), [ComputeInstanceGroupStatus](#computeinstancegroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `instances` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `namedPort` | ***[[]ComputeInstanceGroupSpecNamedPort](#computeinstancegroupspecnamedport)***| ***(Optional)*** |
| `network` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `size` | ***int64***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## ComputeInstanceGroupSpecNamedPort

Appears on:[ComputeInstanceGroupSpec](#computeinstancegroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `port` | ***int64***||
## ComputeInstanceGroupStatus

Appears on:[ComputeInstanceGroup](#computeinstancegroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeInstanceGroupSpec](#computeinstancegroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeInstanceGroupStatus](#computeinstancegroupstatus)

---
