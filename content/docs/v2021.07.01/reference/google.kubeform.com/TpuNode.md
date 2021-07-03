---
title: TpuNode
menu:
  docs_v2021.07.01:
    identifier: tpunode-google.kubeform.com
    name: TpuNode
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

## TpuNode
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `TpuNode` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[TpuNodeSpec](#tpunodespec)***||
| `status` | ***[TpuNodeStatus](#tpunodestatus)***||
## Phase(`string` alias)

Appears on:[TpuNodeStatus](#tpunodestatus)

## TpuNodeSpec

Appears on:[TpuNode](#tpunode), [TpuNodeStatus](#tpunodestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `acceleratorType` | ***string***||
| `cidrBlock` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `name` | ***string***||
| `network` | ***string***| ***(Optional)*** |
| `networkEndpoints` | ***[[]TpuNodeSpecNetworkEndpoints](#tpunodespecnetworkendpoints)***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `schedulingConfig` | ***[[]TpuNodeSpecSchedulingConfig](#tpunodespecschedulingconfig)***| ***(Optional)*** |
| `serviceAccount` | ***string***| ***(Optional)*** |
| `tensorflowVersion` | ***string***||
| `zone` | ***string***||
## TpuNodeSpecNetworkEndpoints

Appears on:[TpuNodeSpec](#tpunodespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipAddress` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
## TpuNodeSpecSchedulingConfig

Appears on:[TpuNodeSpec](#tpunodespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `preemptible` | ***bool***| ***(Optional)*** |
## TpuNodeStatus

Appears on:[TpuNode](#tpunode)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[TpuNodeSpec](#tpunodespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
