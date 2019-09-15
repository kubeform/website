---
title: AmiFromInstance
menu:
  docs_v0.0.1:
    identifier: amifrominstance-aws.kubeform.com
    name: AmiFromInstance
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## AmiFromInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AmiFromInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AmiFromInstanceSpec](#AmiFromInstanceSpec)***||
| `status` | ***[AmiFromInstanceStatus](#AmiFromInstanceStatus)***||
## AmiFromInstanceSpec
##### (Appears on:[AmiFromInstance](#AmiFromInstance), [AmiFromInstanceStatus](#AmiFromInstanceStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `architecture` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `ebsBlockDevice` | ***[[]AmiFromInstanceSpecEbsBlockDevice](#AmiFromInstanceSpecEbsBlockDevice)***| ***(Optional)*** |
| `enaSupport` | ***bool***| ***(Optional)*** |
| `ephemeralBlockDevice` | ***[[]AmiFromInstanceSpecEphemeralBlockDevice](#AmiFromInstanceSpecEphemeralBlockDevice)***| ***(Optional)*** |
| `imageLocation` | ***string***| ***(Optional)*** |
| `kernelID` | ***string***| ***(Optional)*** |
| `manageEbsSnapshots` | ***bool***| ***(Optional)*** |
| `name` | ***string***||
| `ramdiskID` | ***string***| ***(Optional)*** |
| `rootDeviceName` | ***string***| ***(Optional)*** |
| `rootSnapshotID` | ***string***| ***(Optional)*** |
| `snapshotWithoutReboot` | ***bool***| ***(Optional)*** |
| `sourceInstanceID` | ***string***||
| `sriovNetSupport` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `virtualizationType` | ***string***| ***(Optional)*** |
## AmiFromInstanceSpecEbsBlockDevice
##### (Appears on:[AmiFromInstanceSpec](#AmiFromInstanceSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteOnTermination` | ***bool***| ***(Optional)*** |
| `deviceName` | ***string***| ***(Optional)*** |
| `encrypted` | ***bool***| ***(Optional)*** |
| `iops` | ***int***| ***(Optional)*** |
| `snapshotID` | ***string***| ***(Optional)*** |
| `volumeSize` | ***int***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## AmiFromInstanceSpecEphemeralBlockDevice
##### (Appears on:[AmiFromInstanceSpec](#AmiFromInstanceSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `deviceName` | ***string***| ***(Optional)*** |
| `virtualName` | ***string***| ***(Optional)*** |
## AmiFromInstanceStatus
##### (Appears on:[AmiFromInstance](#AmiFromInstance))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AmiFromInstanceSpec](#AmiFromInstanceSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
