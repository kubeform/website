---
title: OpsworksStaticWebLayer
menu:
  docs_v0.1.0:
    identifier: opsworksstaticweblayer-aws.kubeform.com
    name: OpsworksStaticWebLayer
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## OpsworksStaticWebLayer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OpsworksStaticWebLayer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OpsworksStaticWebLayerSpec](#opsworksstaticweblayerspec)***||
| `status` | ***[OpsworksStaticWebLayerStatus](#opsworksstaticweblayerstatus)***||
## OpsworksStaticWebLayerSpec

Appears on:[OpsworksStaticWebLayer](#opsworksstaticweblayer), [OpsworksStaticWebLayerStatus](#opsworksstaticweblayerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoAssignElasticIPS` | ***bool***| ***(Optional)*** |
| `autoAssignPublicIPS` | ***bool***| ***(Optional)*** |
| `autoHealing` | ***bool***| ***(Optional)*** |
| `customConfigureRecipes` | ***[]string***| ***(Optional)*** |
| `customDeployRecipes` | ***[]string***| ***(Optional)*** |
| `customInstanceProfileArn` | ***string***| ***(Optional)*** |
| `customJSON` | ***string***| ***(Optional)*** |
| `customSecurityGroupIDS` | ***[]string***| ***(Optional)*** |
| `customSetupRecipes` | ***[]string***| ***(Optional)*** |
| `customShutdownRecipes` | ***[]string***| ***(Optional)*** |
| `customUndeployRecipes` | ***[]string***| ***(Optional)*** |
| `drainElbOnShutdown` | ***bool***| ***(Optional)*** |
| `ebsVolume` | ***[[]OpsworksStaticWebLayerSpecEbsVolume](#opsworksstaticweblayerspecebsvolume)***| ***(Optional)*** |
| `elasticLoadBalancer` | ***string***| ***(Optional)*** |
| `installUpdatesOnBoot` | ***bool***| ***(Optional)*** |
| `instanceShutdownTimeout` | ***int64***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `stackID` | ***string***||
| `systemPackages` | ***[]string***| ***(Optional)*** |
| `useEbsOptimizedInstances` | ***bool***| ***(Optional)*** |
## OpsworksStaticWebLayerSpecEbsVolume

Appears on:[OpsworksStaticWebLayerSpec](#opsworksstaticweblayerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `iops` | ***int64***| ***(Optional)*** |
| `mountPoint` | ***string***||
| `numberOfDisks` | ***int64***||
| `raidLevel` | ***string***| ***(Optional)*** |
| `size` | ***int64***||
| `type` | ***string***| ***(Optional)*** |
## OpsworksStaticWebLayerStatus

Appears on:[OpsworksStaticWebLayer](#opsworksstaticweblayer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OpsworksStaticWebLayerSpec](#opsworksstaticweblayerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OpsworksStaticWebLayerStatus](#opsworksstaticweblayerstatus)

---
