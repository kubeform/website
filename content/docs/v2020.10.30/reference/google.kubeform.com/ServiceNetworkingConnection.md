---
title: ServiceNetworkingConnection
menu:
  docs_v2020.10.30:
    identifier: servicenetworkingconnection-google.kubeform.com
    name: ServiceNetworkingConnection
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ServiceNetworkingConnection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ServiceNetworkingConnection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServiceNetworkingConnectionSpec](#servicenetworkingconnectionspec)***||
| `status` | ***[ServiceNetworkingConnectionStatus](#servicenetworkingconnectionstatus)***||
## Phase(`string` alias)

Appears on:[ServiceNetworkingConnectionStatus](#servicenetworkingconnectionstatus)

## ServiceNetworkingConnectionSpec

Appears on:[ServiceNetworkingConnection](#servicenetworkingconnection), [ServiceNetworkingConnectionStatus](#servicenetworkingconnectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `network` | ***string***||
| `peering` | ***string***| ***(Optional)*** |
| `reservedPeeringRanges` | ***[]string***||
| `service` | ***string***||
## ServiceNetworkingConnectionStatus

Appears on:[ServiceNetworkingConnection](#servicenetworkingconnection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServiceNetworkingConnectionSpec](#servicenetworkingconnectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
