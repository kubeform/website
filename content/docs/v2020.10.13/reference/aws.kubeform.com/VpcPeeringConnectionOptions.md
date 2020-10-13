---
title: VpcPeeringConnectionOptions
menu:
  docs_v2020.10.13:
    identifier: vpcpeeringconnectionoptions-aws.kubeform.com
    name: VpcPeeringConnectionOptions
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## VpcPeeringConnectionOptions
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpcPeeringConnectionOptions` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcPeeringConnectionOptionsSpec](#vpcpeeringconnectionoptionsspec)***||
| `status` | ***[VpcPeeringConnectionOptionsStatus](#vpcpeeringconnectionoptionsstatus)***||
## Phase(`string` alias)

Appears on:[VpcPeeringConnectionOptionsStatus](#vpcpeeringconnectionoptionsstatus)

## VpcPeeringConnectionOptionsSpec

Appears on:[VpcPeeringConnectionOptions](#vpcpeeringconnectionoptions), [VpcPeeringConnectionOptionsStatus](#vpcpeeringconnectionoptionsstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accepter` | ***[[]VpcPeeringConnectionOptionsSpecAccepter](#vpcpeeringconnectionoptionsspecaccepter)***| ***(Optional)*** |
| `requester` | ***[[]VpcPeeringConnectionOptionsSpecRequester](#vpcpeeringconnectionoptionsspecrequester)***| ***(Optional)*** |
| `vpcPeeringConnectionID` | ***string***||
## VpcPeeringConnectionOptionsSpecAccepter

Appears on:[VpcPeeringConnectionOptionsSpec](#vpcpeeringconnectionoptionsspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowClassicLinkToRemoteVpc` | ***bool***| ***(Optional)*** |
| `allowRemoteVpcDNSResolution` | ***bool***| ***(Optional)*** |
| `allowVpcToRemoteClassicLink` | ***bool***| ***(Optional)*** |
## VpcPeeringConnectionOptionsSpecRequester

Appears on:[VpcPeeringConnectionOptionsSpec](#vpcpeeringconnectionoptionsspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowClassicLinkToRemoteVpc` | ***bool***| ***(Optional)*** |
| `allowRemoteVpcDNSResolution` | ***bool***| ***(Optional)*** |
| `allowVpcToRemoteClassicLink` | ***bool***| ***(Optional)*** |
## VpcPeeringConnectionOptionsStatus

Appears on:[VpcPeeringConnectionOptions](#vpcpeeringconnectionoptions)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcPeeringConnectionOptionsSpec](#vpcpeeringconnectionoptionsspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
