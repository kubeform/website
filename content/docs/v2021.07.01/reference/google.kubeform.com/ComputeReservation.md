---
title: ComputeReservation
menu:
  docs_v2021.07.01:
    identifier: computereservation-google.kubeform.com
    name: ComputeReservation
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

## ComputeReservation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeReservation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeReservationSpec](#computereservationspec)***||
| `status` | ***[ComputeReservationStatus](#computereservationstatus)***||
## ComputeReservationSpec

Appears on:[ComputeReservation](#computereservation), [ComputeReservationStatus](#computereservationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `commitment` | ***string***| ***(Optional)*** |
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `specificReservation` | ***[[]ComputeReservationSpecSpecificReservation](#computereservationspecspecificreservation)***||
| `specificReservationRequired` | ***bool***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `zone` | ***string***||
## ComputeReservationSpecSpecificReservation

Appears on:[ComputeReservationSpec](#computereservationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
| `inUseCount` | ***int64***| ***(Optional)*** |
| `instanceProperties` | ***[[]ComputeReservationSpecSpecificReservationInstanceProperties](#computereservationspecspecificreservationinstanceproperties)***||
## ComputeReservationSpecSpecificReservationInstanceProperties

Appears on:[ComputeReservationSpecSpecificReservation](#computereservationspecspecificreservation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `guestAccelerators` | ***[[]ComputeReservationSpecSpecificReservationInstancePropertiesGuestAccelerators](#computereservationspecspecificreservationinstancepropertiesguestaccelerators)***| ***(Optional)*** |
| `localSsds` | ***[[]ComputeReservationSpecSpecificReservationInstancePropertiesLocalSsds](#computereservationspecspecificreservationinstancepropertieslocalssds)***| ***(Optional)*** |
| `machineType` | ***string***||
| `minCPUPlatform` | ***string***| ***(Optional)*** |
## ComputeReservationSpecSpecificReservationInstancePropertiesGuestAccelerators

Appears on:[ComputeReservationSpecSpecificReservationInstanceProperties](#computereservationspecspecificreservationinstanceproperties)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `acceleratorCount` | ***int64***||
| `acceleratorType` | ***string***||
## ComputeReservationSpecSpecificReservationInstancePropertiesLocalSsds

Appears on:[ComputeReservationSpecSpecificReservationInstanceProperties](#computereservationspecspecificreservationinstanceproperties)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `diskSizeGb` | ***int64***||
| `interface` | ***string***| ***(Optional)*** |
## ComputeReservationStatus

Appears on:[ComputeReservation](#computereservation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeReservationSpec](#computereservationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeReservationStatus](#computereservationstatus)

---
