---
title: Volume
menu:
  docs_v0.0.1:
    identifier: volume-digitalocean.kubeform.com
    name: Volume
    parent: digitalocean.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## Volume
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Volume` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VolumeSpec](#volumespec)***||
| `status` | ***[VolumeStatus](#volumestatus)***||
## VolumeSpec

Appears on:[Volume](#volume), [VolumeStatus](#volumestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `dropletIDS` | ***[]int64***| ***(Optional)*** |
| `filesystemLabel` | ***string***| ***(Optional)*** |
| `filesystemType` | ***string***| ***(Optional)*** Deprecated|
| `initialFilesystemLabel` | ***string***| ***(Optional)*** |
| `initialFilesystemType` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `region` | ***string***||
| `size` | ***int***||
| `snapshotID` | ***string***| ***(Optional)*** |
| `urn` | ***string***| ***(Optional)*** the uniform resource name for the volume.|
## VolumeStatus

Appears on:[Volume](#volume)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VolumeSpec](#volumespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
