---
title: NetworkPacketCapture
menu:
  docs_v2020.10.30:
    identifier: networkpacketcapture-azurerm.kubeform.com
    name: NetworkPacketCapture
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## NetworkPacketCapture
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkPacketCapture` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkPacketCaptureSpec](#networkpacketcapturespec)***||
| `status` | ***[NetworkPacketCaptureStatus](#networkpacketcapturestatus)***||
## NetworkPacketCaptureSpec

Appears on:[NetworkPacketCapture](#networkpacketcapture), [NetworkPacketCaptureStatus](#networkpacketcapturestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `filter` | ***[[]NetworkPacketCaptureSpecFilter](#networkpacketcapturespecfilter)***| ***(Optional)*** |
| `maximumBytesPerPacket` | ***int64***| ***(Optional)*** |
| `maximumBytesPerSession` | ***int64***| ***(Optional)*** |
| `maximumCaptureDuration` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `networkWatcherName` | ***string***||
| `resourceGroupName` | ***string***||
| `storageLocation` | ***[[]NetworkPacketCaptureSpecStorageLocation](#networkpacketcapturespecstoragelocation)***||
| `targetResourceID` | ***string***||
## NetworkPacketCaptureSpecFilter

Appears on:[NetworkPacketCaptureSpec](#networkpacketcapturespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `localIPAddress` | ***string***| ***(Optional)*** |
| `localPort` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
| `remoteIPAddress` | ***string***| ***(Optional)*** |
| `remotePort` | ***string***| ***(Optional)*** |
## NetworkPacketCaptureSpecStorageLocation

Appears on:[NetworkPacketCaptureSpec](#networkpacketcapturespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filePath` | ***string***| ***(Optional)*** |
| `storageAccountID` | ***string***| ***(Optional)*** |
| `storagePath` | ***string***| ***(Optional)*** |
## NetworkPacketCaptureStatus

Appears on:[NetworkPacketCapture](#networkpacketcapture)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkPacketCaptureSpec](#networkpacketcapturespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NetworkPacketCaptureStatus](#networkpacketcapturestatus)

---
