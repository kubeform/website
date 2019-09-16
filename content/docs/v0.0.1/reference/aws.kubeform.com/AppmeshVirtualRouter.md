---
title: AppmeshVirtualRouter
menu:
  docs_v0.0.1:
    identifier: appmeshvirtualrouter-aws.kubeform.com
    name: AppmeshVirtualRouter
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## AppmeshVirtualRouter
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppmeshVirtualRouter` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppmeshVirtualRouterSpec](#appmeshvirtualrouterspec)***||
| `status` | ***[AppmeshVirtualRouterStatus](#appmeshvirtualrouterstatus)***||
## AppmeshVirtualRouterSpec

Appears on:[AppmeshVirtualRouter](#appmeshvirtualrouter), [AppmeshVirtualRouterStatus](#appmeshvirtualrouterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `createdDate` | ***string***| ***(Optional)*** |
| `lastUpdatedDate` | ***string***| ***(Optional)*** |
| `meshName` | ***string***||
| `name` | ***string***||
| `spec` | ***[[]AppmeshVirtualRouterSpecSpec](#appmeshvirtualrouterspecspec)***||
## AppmeshVirtualRouterSpecSpec

Appears on:[AppmeshVirtualRouterSpec](#appmeshvirtualrouterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `listener` | ***[[]AppmeshVirtualRouterSpecSpecListener](#appmeshvirtualrouterspecspeclistener)***||
## AppmeshVirtualRouterSpecSpecListener

Appears on:[AppmeshVirtualRouterSpecSpec](#appmeshvirtualrouterspecspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `portMapping` | ***[[]AppmeshVirtualRouterSpecSpecListenerPortMapping](#appmeshvirtualrouterspecspeclistenerportmapping)***||
## AppmeshVirtualRouterSpecSpecListenerPortMapping

Appears on:[AppmeshVirtualRouterSpecSpecListener](#appmeshvirtualrouterspecspeclistener)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int***||
| `protocol` | ***string***||
## AppmeshVirtualRouterStatus

Appears on:[AppmeshVirtualRouter](#appmeshvirtualrouter)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppmeshVirtualRouterSpec](#appmeshvirtualrouterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
