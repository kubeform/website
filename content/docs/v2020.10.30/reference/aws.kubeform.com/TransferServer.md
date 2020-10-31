---
title: TransferServer
menu:
  docs_v2020.10.30:
    identifier: transferserver-aws.kubeform.com
    name: TransferServer
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## TransferServer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `TransferServer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[TransferServerSpec](#transferserverspec)***||
| `status` | ***[TransferServerStatus](#transferserverstatus)***||
## Phase(`string` alias)

Appears on:[TransferServerStatus](#transferserverstatus)

## TransferServerSpec

Appears on:[TransferServer](#transferserver), [TransferServerStatus](#transferserverstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `endpointDetails` | ***[[]TransferServerSpecEndpointDetails](#transferserverspecendpointdetails)***| ***(Optional)*** |
| `endpointType` | ***string***| ***(Optional)*** |
| `forceDestroy` | ***bool***| ***(Optional)*** |
| `identityProviderType` | ***string***| ***(Optional)*** |
| `invocationRole` | ***string***| ***(Optional)*** |
| `loggingRole` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `url` | ***string***| ***(Optional)*** |
## TransferServerSpecEndpointDetails

Appears on:[TransferServerSpec](#transferserverspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `vpcEndpointID` | ***string***||
## TransferServerStatus

Appears on:[TransferServer](#transferserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[TransferServerSpec](#transferserverspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
