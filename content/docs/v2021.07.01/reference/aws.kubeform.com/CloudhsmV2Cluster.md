---
title: CloudhsmV2Cluster
menu:
  docs_v2021.07.01:
    identifier: cloudhsmv2cluster-aws.kubeform.com
    name: CloudhsmV2Cluster
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

## CloudhsmV2Cluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudhsmV2Cluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudhsmV2ClusterSpec](#cloudhsmv2clusterspec)***||
| `status` | ***[CloudhsmV2ClusterStatus](#cloudhsmv2clusterstatus)***||
## CloudhsmV2ClusterSpec

Appears on:[CloudhsmV2Cluster](#cloudhsmv2cluster), [CloudhsmV2ClusterStatus](#cloudhsmv2clusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `clusterCertificates` | ***[[]CloudhsmV2ClusterSpecClusterCertificates](#cloudhsmv2clusterspecclustercertificates)***| ***(Optional)*** |
| `clusterID` | ***string***| ***(Optional)*** |
| `clusterState` | ***string***| ***(Optional)*** |
| `hsmType` | ***string***||
| `securityGroupID` | ***string***| ***(Optional)*** |
| `sourceBackupIdentifier` | ***string***| ***(Optional)*** |
| `subnetIDS` | ***[]string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## CloudhsmV2ClusterSpecClusterCertificates

Appears on:[CloudhsmV2ClusterSpec](#cloudhsmv2clusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `awsHardwareCertificate` | ***string***| ***(Optional)*** |
| `clusterCertificate` | ***string***| ***(Optional)*** |
| `clusterCsr` | ***string***| ***(Optional)*** |
| `hsmCertificate` | ***string***| ***(Optional)*** |
| `manufacturerHardwareCertificate` | ***string***| ***(Optional)*** |
## CloudhsmV2ClusterStatus

Appears on:[CloudhsmV2Cluster](#cloudhsmv2cluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudhsmV2ClusterSpec](#cloudhsmv2clusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudhsmV2ClusterStatus](#cloudhsmv2clusterstatus)

---
