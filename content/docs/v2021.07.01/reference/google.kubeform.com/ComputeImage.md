---
title: ComputeImage
menu:
  docs_v2021.07.01:
    identifier: computeimage-google.kubeform.com
    name: ComputeImage
    parent: google.kubeform.com-reference
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

## ComputeImage
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeImage` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeImageSpec](#computeimagespec)***||
| `status` | ***[ComputeImageStatus](#computeimagestatus)***||
## ComputeImageSpec

Appears on:[ComputeImage](#computeimage), [ComputeImageStatus](#computeimagestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `archiveSizeBytes` | ***int64***| ***(Optional)*** |
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `diskSizeGb` | ***int64***| ***(Optional)*** |
| `family` | ***string***| ***(Optional)*** |
| `guestOsFeatures` | ***[[]ComputeImageSpecGuestOsFeatures](#computeimagespecguestosfeatures)***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `licenses` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `rawDisk` | ***[[]ComputeImageSpecRawDisk](#computeimagespecrawdisk)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `sourceDisk` | ***string***| ***(Optional)*** |
## ComputeImageSpecGuestOsFeatures

Appears on:[ComputeImageSpec](#computeimagespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***| ***(Optional)*** |
## ComputeImageSpecRawDisk

Appears on:[ComputeImageSpec](#computeimagespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerType` | ***string***| ***(Optional)*** |
| `sha1` | ***string***| ***(Optional)*** |
| `source` | ***string***||
## ComputeImageStatus

Appears on:[ComputeImage](#computeimage)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeImageSpec](#computeimagespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeImageStatus](#computeimagestatus)

---
