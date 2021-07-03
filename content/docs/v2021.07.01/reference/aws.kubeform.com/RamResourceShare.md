---
title: RamResourceShare
menu:
  docs_v2021.07.01:
    identifier: ramresourceshare-aws.kubeform.com
    name: RamResourceShare
    parent: aws.kubeform.com-reference
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

## RamResourceShare
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RamResourceShare` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RamResourceShareSpec](#ramresourcesharespec)***||
| `status` | ***[RamResourceShareStatus](#ramresourcesharestatus)***||
## Phase(`string` alias)

Appears on:[RamResourceShareStatus](#ramresourcesharestatus)

## RamResourceShareSpec

Appears on:[RamResourceShare](#ramresourceshare), [RamResourceShareStatus](#ramresourcesharestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allowExternalPrincipals` | ***bool***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## RamResourceShareStatus

Appears on:[RamResourceShare](#ramresourceshare)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RamResourceShareSpec](#ramresourcesharespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
