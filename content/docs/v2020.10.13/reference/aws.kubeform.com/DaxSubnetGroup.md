---
title: DaxSubnetGroup
menu:
  docs_v2020.10.13:
    identifier: daxsubnetgroup-aws.kubeform.com
    name: DaxSubnetGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## DaxSubnetGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DaxSubnetGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DaxSubnetGroupSpec](#daxsubnetgroupspec)***||
| `status` | ***[DaxSubnetGroupStatus](#daxsubnetgroupstatus)***||
## DaxSubnetGroupSpec

Appears on:[DaxSubnetGroup](#daxsubnetgroup), [DaxSubnetGroupStatus](#daxsubnetgroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `subnetIDS` | ***[]string***||
| `vpcID` | ***string***| ***(Optional)*** |
## DaxSubnetGroupStatus

Appears on:[DaxSubnetGroup](#daxsubnetgroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DaxSubnetGroupSpec](#daxsubnetgroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DaxSubnetGroupStatus](#daxsubnetgroupstatus)

---
