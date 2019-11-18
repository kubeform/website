---
title: ComputeInstanceGroupManager
menu:
  docs_v0.1.0:
    identifier: computeinstancegroupmanager-google.kubeform.com
    name: ComputeInstanceGroupManager
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ComputeInstanceGroupManager
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeInstanceGroupManager` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeInstanceGroupManagerSpec](#computeinstancegroupmanagerspec)***||
| `status` | ***[ComputeInstanceGroupManagerStatus](#computeinstancegroupmanagerstatus)***||
## ComputeInstanceGroupManagerSpec

Appears on:[ComputeInstanceGroupManager](#computeinstancegroupmanager), [ComputeInstanceGroupManagerStatus](#computeinstancegroupmanagerstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `autoHealingPolicies` | ***[[]ComputeInstanceGroupManagerSpecAutoHealingPolicies](#computeinstancegroupmanagerspecautohealingpolicies)***| ***(Optional)*** Deprecated|
| `baseInstanceName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `fingerprint` | ***string***| ***(Optional)*** |
| `instanceGroup` | ***string***| ***(Optional)*** |
| `instanceTemplate` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `namedPort` | ***[[]ComputeInstanceGroupManagerSpecNamedPort](#computeinstancegroupmanagerspecnamedport)***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `rollingUpdatePolicy` | ***[[]ComputeInstanceGroupManagerSpecRollingUpdatePolicy](#computeinstancegroupmanagerspecrollingupdatepolicy)***| ***(Optional)*** Deprecated|
| `selfLink` | ***string***| ***(Optional)*** |
| `targetPools` | ***[]string***| ***(Optional)*** |
| `targetSize` | ***int64***| ***(Optional)*** |
| `updateStrategy` | ***string***| ***(Optional)*** |
| `version` | ***[[]ComputeInstanceGroupManagerSpecVersion](#computeinstancegroupmanagerspecversion)***| ***(Optional)*** Deprecated|
| `waitForInstances` | ***bool***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## ComputeInstanceGroupManagerSpecAutoHealingPolicies

Appears on:[ComputeInstanceGroupManagerSpec](#computeinstancegroupmanagerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `healthCheck` | ***string***||
| `initialDelaySec` | ***int64***||
## ComputeInstanceGroupManagerSpecNamedPort

Appears on:[ComputeInstanceGroupManagerSpec](#computeinstancegroupmanagerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `port` | ***int64***||
## ComputeInstanceGroupManagerSpecRollingUpdatePolicy

Appears on:[ComputeInstanceGroupManagerSpec](#computeinstancegroupmanagerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxSurgeFixed` | ***int64***| ***(Optional)*** |
| `maxSurgePercent` | ***int64***| ***(Optional)*** |
| `maxUnavailableFixed` | ***int64***| ***(Optional)*** |
| `maxUnavailablePercent` | ***int64***| ***(Optional)*** |
| `minReadySec` | ***int64***| ***(Optional)*** |
| `minimalAction` | ***string***||
| `type` | ***string***||
## ComputeInstanceGroupManagerSpecVersion

Appears on:[ComputeInstanceGroupManagerSpec](#computeinstancegroupmanagerspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `instanceTemplate` | ***string***||
| `name` | ***string***||
| `targetSize` | ***[[]ComputeInstanceGroupManagerSpecVersionTargetSize](#computeinstancegroupmanagerspecversiontargetsize)***| ***(Optional)*** |
## ComputeInstanceGroupManagerSpecVersionTargetSize

Appears on:[ComputeInstanceGroupManagerSpecVersion](#computeinstancegroupmanagerspecversion)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `fixed` | ***int64***| ***(Optional)*** |
| `percent` | ***int64***| ***(Optional)*** |
## ComputeInstanceGroupManagerStatus

Appears on:[ComputeInstanceGroupManager](#computeinstancegroupmanager)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeInstanceGroupManagerSpec](#computeinstancegroupmanagerspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeInstanceGroupManagerStatus](#computeinstancegroupmanagerstatus)

---
