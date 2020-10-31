---
title: VpcEndpointConnectionNotification
menu:
  docs_v2020.10.30:
    identifier: vpcendpointconnectionnotification-aws.kubeform.com
    name: VpcEndpointConnectionNotification
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## VpcEndpointConnectionNotification
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpcEndpointConnectionNotification` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcEndpointConnectionNotificationSpec](#vpcendpointconnectionnotificationspec)***||
| `status` | ***[VpcEndpointConnectionNotificationStatus](#vpcendpointconnectionnotificationstatus)***||
## Phase(`string` alias)

Appears on:[VpcEndpointConnectionNotificationStatus](#vpcendpointconnectionnotificationstatus)

## VpcEndpointConnectionNotificationSpec

Appears on:[VpcEndpointConnectionNotification](#vpcendpointconnectionnotification), [VpcEndpointConnectionNotificationStatus](#vpcendpointconnectionnotificationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `connectionEvents` | ***[]string***||
| `connectionNotificationArn` | ***string***||
| `notificationType` | ***string***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
| `vpcEndpointID` | ***string***| ***(Optional)*** |
| `vpcEndpointServiceID` | ***string***| ***(Optional)*** |
## VpcEndpointConnectionNotificationStatus

Appears on:[VpcEndpointConnectionNotification](#vpcendpointconnectionnotification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcEndpointConnectionNotificationSpec](#vpcendpointconnectionnotificationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
