---
title: DmsReplicationSubnetGroup
menu:
  docs_v0.0.1:
    identifier: dmsreplicationsubnetgroup-aws.kubeform.com
    name: DmsReplicationSubnetGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## DmsReplicationSubnetGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DmsReplicationSubnetGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DmsReplicationSubnetGroupSpec](#DmsReplicationSubnetGroupSpec)***||
| `status` | ***[DmsReplicationSubnetGroupStatus](#DmsReplicationSubnetGroupStatus)***||
## DmsReplicationSubnetGroupSpec
##### (Appears on:[DmsReplicationSubnetGroup](#DmsReplicationSubnetGroup), [DmsReplicationSubnetGroupStatus](#DmsReplicationSubnetGroupStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `replicationSubnetGroupArn` | ***string***| ***(Optional)*** |
| `replicationSubnetGroupDescription` | ***string***||
| `replicationSubnetGroupID` | ***string***||
| `subnetIDS` | ***[]string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## DmsReplicationSubnetGroupStatus
##### (Appears on:[DmsReplicationSubnetGroup](#DmsReplicationSubnetGroup))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DmsReplicationSubnetGroupSpec](#DmsReplicationSubnetGroupSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---