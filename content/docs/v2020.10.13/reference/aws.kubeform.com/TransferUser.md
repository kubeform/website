---
title: TransferUser
menu:
  docs_v2020.10.13:
    identifier: transferuser-aws.kubeform.com
    name: TransferUser
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## TransferUser
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `TransferUser` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[TransferUserSpec](#transferuserspec)***||
| `status` | ***[TransferUserStatus](#transferuserstatus)***||
## Phase(`string` alias)

Appears on:[TransferUserStatus](#transferuserstatus)

## TransferUserSpec

Appears on:[TransferUser](#transferuser), [TransferUserStatus](#transferuserstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `homeDirectory` | ***string***| ***(Optional)*** |
| `policy` | ***string***| ***(Optional)*** |
| `role` | ***string***||
| `serverID` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `userName` | ***string***||
## TransferUserStatus

Appears on:[TransferUser](#transferuser)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[TransferUserSpec](#transferuserspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
