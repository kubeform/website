---
title: DaxCluster
menu:
  docs_v0.1.0:
    identifier: daxcluster-aws.kubeform.com
    name: DaxCluster
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## DaxCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DaxCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DaxClusterSpec](#daxclusterspec)***||
| `status` | ***[DaxClusterStatus](#daxclusterstatus)***||
## DaxClusterSpec

Appears on:[DaxCluster](#daxcluster), [DaxClusterStatus](#daxclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `availabilityZones` | ***[]string***| ***(Optional)*** |
| `clusterAddress` | ***string***| ***(Optional)*** |
| `clusterName` | ***string***||
| `configurationEndpoint` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `iamRoleArn` | ***string***||
| `maintenanceWindow` | ***string***| ***(Optional)*** |
| `nodeType` | ***string***||
| `nodes` | ***[[]DaxClusterSpecNodes](#daxclusterspecnodes)***| ***(Optional)*** |
| `notificationTopicArn` | ***string***| ***(Optional)*** |
| `parameterGroupName` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `replicationFactor` | ***int64***||
| `securityGroupIDS` | ***[]string***| ***(Optional)*** |
| `serverSideEncryption` | ***[[]DaxClusterSpecServerSideEncryption](#daxclusterspecserversideencryption)***| ***(Optional)*** |
| `subnetGroupName` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## DaxClusterSpecNodes

Appears on:[DaxClusterSpec](#daxclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `address` | ***string***| ***(Optional)*** |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
## DaxClusterSpecServerSideEncryption

Appears on:[DaxClusterSpec](#daxclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***| ***(Optional)*** |
## DaxClusterStatus

Appears on:[DaxCluster](#daxcluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DaxClusterSpec](#daxclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DaxClusterStatus](#daxclusterstatus)

---