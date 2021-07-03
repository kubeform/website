---
title: Ec2CapacityReservation
menu:
  docs_v2021.07.01:
    identifier: ec2capacityreservation-aws.kubeform.com
    name: Ec2CapacityReservation
    parent: aws.kubeform.com-reference
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

## Ec2CapacityReservation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Ec2CapacityReservation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Ec2CapacityReservationSpec](#ec2capacityreservationspec)***||
| `status` | ***[Ec2CapacityReservationStatus](#ec2capacityreservationstatus)***||
## Ec2CapacityReservationSpec

Appears on:[Ec2CapacityReservation](#ec2capacityreservation), [Ec2CapacityReservationStatus](#ec2capacityreservationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `availabilityZone` | ***string***||
| `ebsOptimized` | ***bool***| ***(Optional)*** |
| `endDate` | ***string***| ***(Optional)*** |
| `endDateType` | ***string***| ***(Optional)*** |
| `ephemeralStorage` | ***bool***| ***(Optional)*** |
| `instanceCount` | ***int64***||
| `instanceMatchCriteria` | ***string***| ***(Optional)*** |
| `instancePlatform` | ***string***||
| `instanceType` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `tenancy` | ***string***| ***(Optional)*** |
## Ec2CapacityReservationStatus

Appears on:[Ec2CapacityReservation](#ec2capacityreservation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Ec2CapacityReservationSpec](#ec2capacityreservationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[Ec2CapacityReservationStatus](#ec2capacityreservationstatus)

---
