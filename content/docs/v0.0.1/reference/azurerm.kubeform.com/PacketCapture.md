---
title: PacketCapture
menu:
  docs_v0.0.1:
    identifier: packetcapture-azurerm.kubeform.com
    name: PacketCapture
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## PacketCapture
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PacketCapture` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PacketCaptureSpec](#packetcapturespec)***||
| `status` | ***[PacketCaptureStatus](#packetcapturestatus)***||
## PacketCaptureSpec

Appears on:[PacketCapture](#packetcapture), [PacketCaptureStatus](#packetcapturestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `filter` | ***[[]PacketCaptureSpecFilter](#packetcapturespecfilter)***| ***(Optional)*** |
| `maximumBytesPerPacket` | ***int***| ***(Optional)*** |
| `maximumBytesPerSession` | ***int***| ***(Optional)*** |
| `maximumCaptureDuration` | ***int***| ***(Optional)*** |
| `name` | ***string***||
| `networkWatcherName` | ***string***||
| `resourceGroupName` | ***string***||
| `storageLocation` | ***[[]PacketCaptureSpecStorageLocation](#packetcapturespecstoragelocation)***||
| `targetResourceID` | ***string***||
## PacketCaptureSpecFilter

Appears on:[PacketCaptureSpec](#packetcapturespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `localIPAddress` | ***string***| ***(Optional)*** |
| `localPort` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
| `remoteIPAddress` | ***string***| ***(Optional)*** |
| `remotePort` | ***string***| ***(Optional)*** |
## PacketCaptureSpecStorageLocation

Appears on:[PacketCaptureSpec](#packetcapturespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filePath` | ***string***| ***(Optional)*** |
| `storageAccountID` | ***string***| ***(Optional)*** |
| `storagePath` | ***string***| ***(Optional)*** |
## PacketCaptureStatus

Appears on:[PacketCapture](#packetcapture)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PacketCaptureSpec](#packetcapturespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
