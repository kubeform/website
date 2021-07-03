---
title: EksCluster
menu:
  docs_v2021.07.01:
    identifier: ekscluster-aws.kubeform.com
    name: EksCluster
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

## EksCluster
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EksCluster` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EksClusterSpec](#eksclusterspec)***||
| `status` | ***[EksClusterStatus](#eksclusterstatus)***||
## EksClusterSpec

Appears on:[EksCluster](#ekscluster), [EksClusterStatus](#eksclusterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `certificateAuthority` | ***[[]EksClusterSpecCertificateAuthority](#eksclusterspeccertificateauthority)***| ***(Optional)*** |
| `createdAt` | ***string***| ***(Optional)*** |
| `enabledClusterLogTypes` | ***[]string***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `identity` | ***[[]EksClusterSpecIdentity](#eksclusterspecidentity)***| ***(Optional)*** |
| `name` | ***string***||
| `platformVersion` | ***string***| ***(Optional)*** |
| `roleArn` | ***string***||
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
| `vpcConfig` | ***[[]EksClusterSpecVpcConfig](#eksclusterspecvpcconfig)***||
## EksClusterSpecCertificateAuthority

Appears on:[EksClusterSpec](#eksclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `data` | ***string***| ***(Optional)*** |
## EksClusterSpecIdentity

Appears on:[EksClusterSpec](#eksclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `oidc` | ***[[]EksClusterSpecIdentityOidc](#eksclusterspecidentityoidc)***| ***(Optional)*** |
## EksClusterSpecIdentityOidc

Appears on:[EksClusterSpecIdentity](#eksclusterspecidentity)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `issuer` | ***string***| ***(Optional)*** |
## EksClusterSpecVpcConfig

Appears on:[EksClusterSpec](#eksclusterspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `endpointPrivateAccess` | ***bool***| ***(Optional)*** |
| `endpointPublicAccess` | ***bool***| ***(Optional)*** |
| `securityGroupIDS` | ***[]string***| ***(Optional)*** |
| `subnetIDS` | ***[]string***||
| `vpcID` | ***string***| ***(Optional)*** |
## EksClusterStatus

Appears on:[EksCluster](#ekscluster)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EksClusterSpec](#eksclusterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[EksClusterStatus](#eksclusterstatus)

---
