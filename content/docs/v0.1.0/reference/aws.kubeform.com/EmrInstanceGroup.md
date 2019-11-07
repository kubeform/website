---
title: EmrInstanceGroup
menu:
  docs_v0.1.0:
    identifier: emrinstancegroup-aws.kubeform.com
    name: EmrInstanceGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## EmrInstanceGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EmrInstanceGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EmrInstanceGroupSpec](#emrinstancegroupspec)***||
| `status` | ***[EmrInstanceGroupStatus](#emrinstancegroupstatus)***||
## EmrInstanceGroupSpec

Appears on:[EmrInstanceGroup](#emrinstancegroup), [EmrInstanceGroupStatus](#emrinstancegroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `clusterID` | ***string***||
| `ebsConfig` | ***[[]EmrInstanceGroupSpecEbsConfig](#emrinstancegroupspecebsconfig)***| ***(Optional)*** |
| `ebsOptimized` | ***bool***| ***(Optional)*** |
| `instanceCount` | ***int***| ***(Optional)*** |
| `instanceType` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `runningInstanceCount` | ***int***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
## EmrInstanceGroupSpecEbsConfig

Appears on:[EmrInstanceGroupSpec](#emrinstancegroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `iops` | ***int***| ***(Optional)*** |
| `size` | ***int***||
| `type` | ***string***||
| `volumesPerInstance` | ***int***| ***(Optional)*** |
## EmrInstanceGroupStatus

Appears on:[EmrInstanceGroup](#emrinstancegroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EmrInstanceGroupSpec](#emrinstancegroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[EmrInstanceGroupStatus](#emrinstancegroupstatus)

---
