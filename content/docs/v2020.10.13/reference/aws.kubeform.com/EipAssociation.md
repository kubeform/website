---
title: EipAssociation
menu:
  docs_v2020.10.13:
    identifier: eipassociation-aws.kubeform.com
    name: EipAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## EipAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EipAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EipAssociationSpec](#eipassociationspec)***||
| `status` | ***[EipAssociationStatus](#eipassociationstatus)***||
## EipAssociationSpec

Appears on:[EipAssociation](#eipassociation), [EipAssociationStatus](#eipassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allocationID` | ***string***| ***(Optional)*** |
| `allowReassociation` | ***bool***| ***(Optional)*** |
| `instanceID` | ***string***| ***(Optional)*** |
| `networkInterfaceID` | ***string***| ***(Optional)*** |
| `privateIPAddress` | ***string***| ***(Optional)*** |
| `publicIP` | ***string***| ***(Optional)*** |
## EipAssociationStatus

Appears on:[EipAssociation](#eipassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EipAssociationSpec](#eipassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[EipAssociationStatus](#eipassociationstatus)

---
