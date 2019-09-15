---
title: FloatingIPAssignment
menu:
  docs_v0.0.1:
    identifier: floatingipassignment-digitalocean.kubeform.com
    name: FloatingIPAssignment
    parent: digitalocean.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## FloatingIPAssignment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `FloatingIPAssignment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FloatingIPAssignmentSpec](#FloatingIPAssignmentSpec)***||
| `status` | ***[FloatingIPAssignmentStatus](#FloatingIPAssignmentStatus)***||
## FloatingIPAssignmentSpec
##### (Appears on:[FloatingIPAssignment](#FloatingIPAssignment), [FloatingIPAssignmentStatus](#FloatingIPAssignmentStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `dropletID` | ***int***||
| `ipAddress` | ***string***||
## FloatingIPAssignmentStatus
##### (Appears on:[FloatingIPAssignment](#FloatingIPAssignment))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FloatingIPAssignmentSpec](#FloatingIPAssignmentSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
