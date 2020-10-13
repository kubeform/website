---
title: SourcerepoRepository
menu:
  docs_v2020.10.13:
    identifier: sourcereporepository-google.kubeform.com
    name: SourcerepoRepository
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## SourcerepoRepository
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `SourcerepoRepository` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SourcerepoRepositorySpec](#sourcereporepositoryspec)***||
| `status` | ***[SourcerepoRepositoryStatus](#sourcereporepositorystatus)***||
## Phase(`string` alias)

Appears on:[SourcerepoRepositoryStatus](#sourcereporepositorystatus)

## SourcerepoRepositorySpec

Appears on:[SourcerepoRepository](#sourcereporepository), [SourcerepoRepositoryStatus](#sourcereporepositorystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `size` | ***int64***| ***(Optional)*** |
| `url` | ***string***| ***(Optional)*** |
## SourcerepoRepositoryStatus

Appears on:[SourcerepoRepository](#sourcereporepository)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SourcerepoRepositorySpec](#sourcereporepositoryspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---