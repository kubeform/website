---
title: VpcPeeringConnectionAccepter
menu:
  docs_v0.0.1:
    identifier: vpcpeeringconnectionaccepter-aws.kubeform.com
    name: VpcPeeringConnectionAccepter
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## VpcPeeringConnectionAccepter
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpcPeeringConnectionAccepter` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcPeeringConnectionAccepterSpec](#VpcPeeringConnectionAccepterSpec)***||
| `status` | ***[VpcPeeringConnectionAccepterStatus](#VpcPeeringConnectionAccepterStatus)***||
## VpcPeeringConnectionAccepterSpec
##### (Appears on:[VpcPeeringConnectionAccepter](#VpcPeeringConnectionAccepter), [VpcPeeringConnectionAccepterStatus](#VpcPeeringConnectionAccepterStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `acceptStatus` | ***string***| ***(Optional)*** |
| `accepter` | ***[[]VpcPeeringConnectionAccepterSpecAccepter](#VpcPeeringConnectionAccepterSpecAccepter)***| ***(Optional)*** |
| `autoAccept` | ***bool***| ***(Optional)*** |
| `peerOwnerID` | ***string***| ***(Optional)*** |
| `peerRegion` | ***string***| ***(Optional)*** |
| `peerVpcID` | ***string***| ***(Optional)*** |
| `requester` | ***[[]VpcPeeringConnectionAccepterSpecRequester](#VpcPeeringConnectionAccepterSpecRequester)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
| `vpcPeeringConnectionID` | ***string***||
## VpcPeeringConnectionAccepterSpecAccepter
##### (Appears on:[VpcPeeringConnectionAccepterSpec](#VpcPeeringConnectionAccepterSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowClassicLinkToRemoteVpc` | ***bool***| ***(Optional)*** |
| `allowRemoteVpcDNSResolution` | ***bool***| ***(Optional)*** |
| `allowVpcToRemoteClassicLink` | ***bool***| ***(Optional)*** |
## VpcPeeringConnectionAccepterSpecRequester
##### (Appears on:[VpcPeeringConnectionAccepterSpec](#VpcPeeringConnectionAccepterSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowClassicLinkToRemoteVpc` | ***bool***| ***(Optional)*** |
| `allowRemoteVpcDNSResolution` | ***bool***| ***(Optional)*** |
| `allowVpcToRemoteClassicLink` | ***bool***| ***(Optional)*** |
## VpcPeeringConnectionAccepterStatus
##### (Appears on:[VpcPeeringConnectionAccepter](#VpcPeeringConnectionAccepter))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcPeeringConnectionAccepterSpec](#VpcPeeringConnectionAccepterSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---