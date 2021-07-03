---
title: HdinsightKafkaCluster
menu:
  docs_v2021.07.01:
    identifier: hdinsightkafkacluster-azurerm.kubeform.com
    name: HdinsightKafkaCluster
    parent: azurerm.kubeform.com-reference
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

## HdinsightKafkaCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `HdinsightKafkaCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[HdinsightKafkaClusterSpec](#hdinsightkafkaclusterspec)***||
| `status` | ***[HdinsightKafkaClusterStatus](#hdinsightkafkaclusterstatus)***||
## HdinsightKafkaClusterSpec

Appears on:[HdinsightKafkaCluster](#hdinsightkafkacluster), [HdinsightKafkaClusterStatus](#hdinsightkafkaclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `clusterVersion` | ***string***||
| `componentVersion` | ***[[]HdinsightKafkaClusterSpecComponentVersion](#hdinsightkafkaclusterspeccomponentversion)***||
| `gateway` | ***[[]HdinsightKafkaClusterSpecGateway](#hdinsightkafkaclusterspecgateway)***||
| `httpsEndpoint` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `roles` | ***[[]HdinsightKafkaClusterSpecRoles](#hdinsightkafkaclusterspecroles)***||
| `sshEndpoint` | ***string***| ***(Optional)*** |
| `storageAccount` | ***[[]HdinsightKafkaClusterSpecStorageAccount](#hdinsightkafkaclusterspecstorageaccount)***| ***(Optional)*** |
| `storageAccountGen2` | ***[[]HdinsightKafkaClusterSpecStorageAccountGen2](#hdinsightkafkaclusterspecstorageaccountgen2)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `tier` | ***string***||
## HdinsightKafkaClusterSpecComponentVersion

Appears on:[HdinsightKafkaClusterSpec](#hdinsightkafkaclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `kafka` | ***string***||
## HdinsightKafkaClusterSpecGateway

Appears on:[HdinsightKafkaClusterSpec](#hdinsightkafkaclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `username` | ***string***||
## HdinsightKafkaClusterSpecRoles

Appears on:[HdinsightKafkaClusterSpec](#hdinsightkafkaclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `headNode` | ***[[]HdinsightKafkaClusterSpecRolesHeadNode](#hdinsightkafkaclusterspecrolesheadnode)***||
| `workerNode` | ***[[]HdinsightKafkaClusterSpecRolesWorkerNode](#hdinsightkafkaclusterspecrolesworkernode)***||
| `zookeeperNode` | ***[[]HdinsightKafkaClusterSpecRolesZookeeperNode](#hdinsightkafkaclusterspecroleszookeepernode)***||
## HdinsightKafkaClusterSpecRolesHeadNode

Appears on:[HdinsightKafkaClusterSpecRoles](#hdinsightkafkaclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightKafkaClusterSpecRolesWorkerNode

Appears on:[HdinsightKafkaClusterSpecRoles](#hdinsightkafkaclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `minInstanceCount` | ***int64***| ***(Optional)*** |
| `numberOfDisksPerNode` | ***int64***||
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `targetInstanceCount` | ***int64***||
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightKafkaClusterSpecRolesZookeeperNode

Appears on:[HdinsightKafkaClusterSpecRoles](#hdinsightkafkaclusterspecroles)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `username` | ***string***||
| `virtualNetworkID` | ***string***| ***(Optional)*** |
| `vmSize` | ***string***||
## HdinsightKafkaClusterSpecStorageAccount

Appears on:[HdinsightKafkaClusterSpec](#hdinsightkafkaclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `isDefault` | ***bool***||
| `storageContainerID` | ***string***||
## HdinsightKafkaClusterSpecStorageAccountGen2

Appears on:[HdinsightKafkaClusterSpec](#hdinsightkafkaclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `filesystemID` | ***string***||
| `isDefault` | ***bool***||
| `managedIdentityResourceID` | ***string***||
| `storageResourceID` | ***string***||
## HdinsightKafkaClusterStatus

Appears on:[HdinsightKafkaCluster](#hdinsightkafkacluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[HdinsightKafkaClusterSpec](#hdinsightkafkaclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[HdinsightKafkaClusterStatus](#hdinsightkafkaclusterstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `gateway.<index>.password` | ***string*** ||
| `roles.<index>.head_node.<index>.password` | ***string*** ||
| `roles.<index>.worker_node.<index>.password` | ***string*** ||
| `roles.<index>.zookeeper_node.<index>.password` | ***string*** ||
| `storage_account.<index>.storage_account_key` | ***string*** ||
