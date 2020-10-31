---
title: ComputeInstanceTemplate
menu:
  docs_v2020.10.30:
    identifier: computeinstancetemplate-google.kubeform.com
    name: ComputeInstanceTemplate
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ComputeInstanceTemplate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeInstanceTemplate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeInstanceTemplateSpec](#computeinstancetemplatespec)***||
| `status` | ***[ComputeInstanceTemplateStatus](#computeinstancetemplatestatus)***||
## ComputeInstanceTemplateSpec

Appears on:[ComputeInstanceTemplate](#computeinstancetemplate), [ComputeInstanceTemplateStatus](#computeinstancetemplatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `canIPForward` | ***bool***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `disk` | ***[[]ComputeInstanceTemplateSpecDisk](#computeinstancetemplatespecdisk)***||
| `guestAccelerator` | ***[[]ComputeInstanceTemplateSpecGuestAccelerator](#computeinstancetemplatespecguestaccelerator)***| ***(Optional)*** |
| `instanceDescription` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `machineType` | ***string***||
| `metadata` | ***map[string]string***| ***(Optional)*** |
| `metadataFingerprint` | ***string***| ***(Optional)*** |
| `metadataStartupScript` | ***string***| ***(Optional)*** |
| `minCPUPlatform` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `networkInterface` | ***[[]ComputeInstanceTemplateSpecNetworkInterface](#computeinstancetemplatespecnetworkinterface)***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `scheduling` | ***[[]ComputeInstanceTemplateSpecScheduling](#computeinstancetemplatespecscheduling)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `serviceAccount` | ***[[]ComputeInstanceTemplateSpecServiceAccount](#computeinstancetemplatespecserviceaccount)***| ***(Optional)*** |
| `shieldedInstanceConfig` | ***[[]ComputeInstanceTemplateSpecShieldedInstanceConfig](#computeinstancetemplatespecshieldedinstanceconfig)***| ***(Optional)*** |
| `tags` | ***[]string***| ***(Optional)*** |
| `tagsFingerprint` | ***string***| ***(Optional)*** |
## ComputeInstanceTemplateSpecDisk

Appears on:[ComputeInstanceTemplateSpec](#computeinstancetemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `autoDelete` | ***bool***| ***(Optional)*** |
| `boot` | ***bool***| ***(Optional)*** |
| `deviceName` | ***string***| ***(Optional)*** |
| `diskEncryptionKey` | ***[[]ComputeInstanceTemplateSpecDiskDiskEncryptionKey](#computeinstancetemplatespecdiskdiskencryptionkey)***| ***(Optional)*** |
| `diskName` | ***string***| ***(Optional)*** |
| `diskSizeGb` | ***int64***| ***(Optional)*** |
| `diskType` | ***string***| ***(Optional)*** |
| `interface` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `mode` | ***string***| ***(Optional)*** |
| `source` | ***string***| ***(Optional)*** |
| `sourceImage` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## ComputeInstanceTemplateSpecDiskDiskEncryptionKey

Appears on:[ComputeInstanceTemplateSpecDisk](#computeinstancetemplatespecdisk)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `kmsKeySelfLink` | ***string***| ***(Optional)*** |
## ComputeInstanceTemplateSpecGuestAccelerator

Appears on:[ComputeInstanceTemplateSpec](#computeinstancetemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
| `type` | ***string***||
## ComputeInstanceTemplateSpecNetworkInterface

Appears on:[ComputeInstanceTemplateSpec](#computeinstancetemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accessConfig` | ***[[]ComputeInstanceTemplateSpecNetworkInterfaceAccessConfig](#computeinstancetemplatespecnetworkinterfaceaccessconfig)***| ***(Optional)*** |
| `aliasIPRange` | ***[[]ComputeInstanceTemplateSpecNetworkInterfaceAliasIPRange](#computeinstancetemplatespecnetworkinterfacealiasiprange)***| ***(Optional)*** |
| `network` | ***string***| ***(Optional)*** |
| `networkIP` | ***string***| ***(Optional)*** |
| `subnetwork` | ***string***| ***(Optional)*** |
| `subnetworkProject` | ***string***| ***(Optional)*** |
## ComputeInstanceTemplateSpecNetworkInterfaceAccessConfig

Appears on:[ComputeInstanceTemplateSpecNetworkInterface](#computeinstancetemplatespecnetworkinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `natIP` | ***string***| ***(Optional)*** |
| `networkTier` | ***string***| ***(Optional)*** |
## ComputeInstanceTemplateSpecNetworkInterfaceAliasIPRange

Appears on:[ComputeInstanceTemplateSpecNetworkInterface](#computeinstancetemplatespecnetworkinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipCIDRRange` | ***string***||
| `subnetworkRangeName` | ***string***| ***(Optional)*** |
## ComputeInstanceTemplateSpecScheduling

Appears on:[ComputeInstanceTemplateSpec](#computeinstancetemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `automaticRestart` | ***bool***| ***(Optional)*** |
| `nodeAffinities` | ***[[]ComputeInstanceTemplateSpecSchedulingNodeAffinities](#computeinstancetemplatespecschedulingnodeaffinities)***| ***(Optional)*** |
| `onHostMaintenance` | ***string***| ***(Optional)*** |
| `preemptible` | ***bool***| ***(Optional)*** |
## ComputeInstanceTemplateSpecSchedulingNodeAffinities

Appears on:[ComputeInstanceTemplateSpecScheduling](#computeinstancetemplatespecscheduling)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `operator` | ***string***||
| `values` | ***[]string***||
## ComputeInstanceTemplateSpecServiceAccount

Appears on:[ComputeInstanceTemplateSpec](#computeinstancetemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `email` | ***string***| ***(Optional)*** |
| `scopes` | ***[]string***||
## ComputeInstanceTemplateSpecShieldedInstanceConfig

Appears on:[ComputeInstanceTemplateSpec](#computeinstancetemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enableIntegrityMonitoring` | ***bool***| ***(Optional)*** |
| `enableSecureBoot` | ***bool***| ***(Optional)*** |
| `enableVtpm` | ***bool***| ***(Optional)*** |
## ComputeInstanceTemplateStatus

Appears on:[ComputeInstanceTemplate](#computeinstancetemplate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeInstanceTemplateSpec](#computeinstancetemplatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeInstanceTemplateStatus](#computeinstancetemplatestatus)

---
