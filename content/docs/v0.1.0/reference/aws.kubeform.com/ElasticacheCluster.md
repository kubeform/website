---
title: ElasticacheCluster
menu:
  docs_v0.1.0:
    identifier: elasticachecluster-aws.kubeform.com
    name: ElasticacheCluster
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ElasticacheCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ElasticacheCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ElasticacheClusterSpec](#elasticacheclusterspec)***||
| `status` | ***[ElasticacheClusterStatus](#elasticacheclusterstatus)***||
## ElasticacheClusterSpec

Appears on:[ElasticacheCluster](#elasticachecluster), [ElasticacheClusterStatus](#elasticacheclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `applyImmediately` | ***bool***| ***(Optional)*** |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `azMode` | ***string***| ***(Optional)*** |
| `cacheNodes` | ***[[]ElasticacheClusterSpecCacheNodes](#elasticacheclusterspeccachenodes)***| ***(Optional)*** |
| `clusterAddress` | ***string***| ***(Optional)*** |
| `clusterID` | ***string***||
| `configurationEndpoint` | ***string***| ***(Optional)*** |
| `engine` | ***string***| ***(Optional)*** |
| `engineVersion` | ***string***| ***(Optional)*** |
| `maintenanceWindow` | ***string***| ***(Optional)*** |
| `nodeType` | ***string***| ***(Optional)*** |
| `notificationTopicArn` | ***string***| ***(Optional)*** |
| `numCacheNodes` | ***int***| ***(Optional)*** |
| `parameterGroupName` | ***string***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `preferredAvailabilityZones` | ***[]string***| ***(Optional)*** |
| `replicationGroupID` | ***string***| ***(Optional)*** |
| `securityGroupIDS` | ***[]string***| ***(Optional)*** |
| `securityGroupNames` | ***[]string***| ***(Optional)*** |
| `snapshotArns` | ***[]string***| ***(Optional)*** |
| `snapshotName` | ***string***| ***(Optional)*** |
| `snapshotRetentionLimit` | ***int***| ***(Optional)*** |
| `snapshotWindow` | ***string***| ***(Optional)*** |
| `subnetGroupName` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## ElasticacheClusterSpecCacheNodes

Appears on:[ElasticacheClusterSpec](#elasticacheclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `address` | ***string***| ***(Optional)*** |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
## ElasticacheClusterStatus

Appears on:[ElasticacheCluster](#elasticachecluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ElasticacheClusterSpec](#elasticacheclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ElasticacheClusterStatus](#elasticacheclusterstatus)

---
