---
title: ResourceManagerLien
menu:
  docs_v0.1.0:
    identifier: resourcemanagerlien-google.kubeform.com
    name: ResourceManagerLien
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ResourceManagerLien
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ResourceManagerLien` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ResourceManagerLienSpec](#resourcemanagerlienspec)***||
| `status` | ***[ResourceManagerLienStatus](#resourcemanagerlienstatus)***||
## Phase(`string` alias)

Appears on:[ResourceManagerLienStatus](#resourcemanagerlienstatus)

## ResourceManagerLienSpec

Appears on:[ResourceManagerLien](#resourcemanagerlien), [ResourceManagerLienStatus](#resourcemanagerlienstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `createTime` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `origin` | ***string***||
| `parent` | ***string***||
| `reason` | ***string***||
| `restrictions` | ***[]string***||
## ResourceManagerLienStatus

Appears on:[ResourceManagerLien](#resourcemanagerlien)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ResourceManagerLienSpec](#resourcemanagerlienspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
