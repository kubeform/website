---
title: KubernetesNodePool
menu:
  docs_v2020.10.13:
    identifier: kubernetesnodepool-digitalocean.kubeform.com
    name: KubernetesNodePool
    parent: digitalocean.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## KubernetesNodePool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `KubernetesNodePool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[KubernetesNodePoolSpec](#kubernetesnodepoolspec)***||
| `status` | ***[KubernetesNodePoolStatus](#kubernetesnodepoolstatus)***||
## KubernetesNodePoolSpec

Appears on:[KubernetesNodePool](#kubernetesnodepool), [KubernetesNodePoolStatus](#kubernetesnodepoolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `clusterID` | ***string***||
| `name` | ***string***||
| `nodeCount` | ***int64***||
| `nodes` | ***[[]KubernetesNodePoolSpecNodes](#kubernetesnodepoolspecnodes)***| ***(Optional)*** |
| `size` | ***string***||
| `tags` | ***[]string***| ***(Optional)*** |
## KubernetesNodePoolSpecNodes

Appears on:[KubernetesNodePoolSpec](#kubernetesnodepoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `createdAt` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `updatedAt` | ***string***| ***(Optional)*** |
## KubernetesNodePoolStatus

Appears on:[KubernetesNodePool](#kubernetesnodepool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[KubernetesNodePoolSpec](#kubernetesnodepoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[KubernetesNodePoolStatus](#kubernetesnodepoolstatus)

---
