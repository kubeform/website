---
title: RdsClusterInstance
menu:
  docs_v0.1.0:
    identifier: rdsclusterinstance-aws.kubeform.com
    name: RdsClusterInstance
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## RdsClusterInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `RdsClusterInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RdsClusterInstanceSpec](#rdsclusterinstancespec)***||
| `status` | ***[RdsClusterInstanceStatus](#rdsclusterinstancestatus)***||
## Phase(`string` alias)

Appears on:[RdsClusterInstanceStatus](#rdsclusterinstancestatus)

## RdsClusterInstanceSpec

Appears on:[RdsClusterInstance](#rdsclusterinstance), [RdsClusterInstanceStatus](#rdsclusterinstancestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `applyImmediately` | ***bool***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `autoMinorVersionUpgrade` | ***bool***| ***(Optional)*** |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `clusterIdentifier` | ***string***||
| `copyTagsToSnapshot` | ***bool***| ***(Optional)*** |
| `dbParameterGroupName` | ***string***| ***(Optional)*** |
| `dbSubnetGroupName` | ***string***| ***(Optional)*** |
| `dbiResourceID` | ***string***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `engine` | ***string***| ***(Optional)*** |
| `engineVersion` | ***string***| ***(Optional)*** |
| `identifier` | ***string***| ***(Optional)*** |
| `identifierPrefix` | ***string***| ***(Optional)*** |
| `instanceClass` | ***string***||
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `monitoringInterval` | ***int64***| ***(Optional)*** |
| `monitoringRoleArn` | ***string***| ***(Optional)*** |
| `performanceInsightsEnabled` | ***bool***| ***(Optional)*** |
| `performanceInsightsKmsKeyID` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `preferredBackupWindow` | ***string***| ***(Optional)*** |
| `preferredMaintenanceWindow` | ***string***| ***(Optional)*** |
| `promotionTier` | ***int64***| ***(Optional)*** |
| `publiclyAccessible` | ***bool***| ***(Optional)*** |
| `storageEncrypted` | ***bool***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `writer` | ***bool***| ***(Optional)*** |
## RdsClusterInstanceStatus

Appears on:[RdsClusterInstance](#rdsclusterinstance)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RdsClusterInstanceSpec](#rdsclusterinstancespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
