---
title: ComputeInstanceFromTemplate
menu:
  docs_v2020.10.30:
    identifier: computeinstancefromtemplate-google.kubeform.com
    name: ComputeInstanceFromTemplate
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ComputeInstanceFromTemplate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeInstanceFromTemplate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)***||
| `status` | ***[ComputeInstanceFromTemplateStatus](#computeinstancefromtemplatestatus)***||
## ComputeInstanceFromTemplateSpec

Appears on:[ComputeInstanceFromTemplate](#computeinstancefromtemplate), [ComputeInstanceFromTemplateStatus](#computeinstancefromtemplatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `allowStoppingForUpdate` | ***bool***| ***(Optional)*** |
| `attachedDisk` | ***[[]ComputeInstanceFromTemplateSpecAttachedDisk](#computeinstancefromtemplatespecattacheddisk)***| ***(Optional)*** |
| `bootDisk` | ***[[]ComputeInstanceFromTemplateSpecBootDisk](#computeinstancefromtemplatespecbootdisk)***| ***(Optional)*** |
| `canIPForward` | ***bool***| ***(Optional)*** |
| `cpuPlatform` | ***string***| ***(Optional)*** |
| `deletionProtection` | ***bool***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `guestAccelerator` | ***[[]ComputeInstanceFromTemplateSpecGuestAccelerator](#computeinstancefromtemplatespecguestaccelerator)***| ***(Optional)*** |
| `hostname` | ***string***| ***(Optional)*** |
| `instanceID` | ***string***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `machineType` | ***string***| ***(Optional)*** |
| `metadata` | ***map[string]string***| ***(Optional)*** |
| `metadataFingerprint` | ***string***| ***(Optional)*** |
| `metadataStartupScript` | ***string***| ***(Optional)*** |
| `minCPUPlatform` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `networkInterface` | ***[[]ComputeInstanceFromTemplateSpecNetworkInterface](#computeinstancefromtemplatespecnetworkinterface)***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `scheduling` | ***[[]ComputeInstanceFromTemplateSpecScheduling](#computeinstancefromtemplatespecscheduling)***| ***(Optional)*** |
| `scratchDisk` | ***[[]ComputeInstanceFromTemplateSpecScratchDisk](#computeinstancefromtemplatespecscratchdisk)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `serviceAccount` | ***[[]ComputeInstanceFromTemplateSpecServiceAccount](#computeinstancefromtemplatespecserviceaccount)***| ***(Optional)*** |
| `shieldedInstanceConfig` | ***[[]ComputeInstanceFromTemplateSpecShieldedInstanceConfig](#computeinstancefromtemplatespecshieldedinstanceconfig)***| ***(Optional)*** |
| `sourceInstanceTemplate` | ***string***||
| `tags` | ***[]string***| ***(Optional)*** |
| `tagsFingerprint` | ***string***| ***(Optional)*** |
| `zone` | ***string***| ***(Optional)*** |
## ComputeInstanceFromTemplateSpecAttachedDisk

Appears on:[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deviceName` | ***string***| ***(Optional)*** |
| `diskEncryptionKeySha256` | ***string***| ***(Optional)*** |
| `kmsKeySelfLink` | ***string***| ***(Optional)*** |
| `mode` | ***string***| ***(Optional)*** |
| `source` | ***string***||
## ComputeInstanceFromTemplateSpecBootDisk

Appears on:[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `autoDelete` | ***bool***| ***(Optional)*** |
| `deviceName` | ***string***| ***(Optional)*** |
| `diskEncryptionKeySha256` | ***string***| ***(Optional)*** |
| `initializeParams` | ***[[]ComputeInstanceFromTemplateSpecBootDiskInitializeParams](#computeinstancefromtemplatespecbootdiskinitializeparams)***| ***(Optional)*** |
| `kmsKeySelfLink` | ***string***| ***(Optional)*** |
| `mode` | ***string***| ***(Optional)*** |
| `source` | ***string***| ***(Optional)*** |
## ComputeInstanceFromTemplateSpecBootDiskInitializeParams

Appears on:[ComputeInstanceFromTemplateSpecBootDisk](#computeinstancefromtemplatespecbootdisk)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `image` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `size` | ***int64***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## ComputeInstanceFromTemplateSpecGuestAccelerator

Appears on:[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***||
| `type` | ***string***||
## ComputeInstanceFromTemplateSpecNetworkInterface

Appears on:[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accessConfig` | ***[[]ComputeInstanceFromTemplateSpecNetworkInterfaceAccessConfig](#computeinstancefromtemplatespecnetworkinterfaceaccessconfig)***| ***(Optional)*** |
| `aliasIPRange` | ***[[]ComputeInstanceFromTemplateSpecNetworkInterfaceAliasIPRange](#computeinstancefromtemplatespecnetworkinterfacealiasiprange)***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `network` | ***string***| ***(Optional)*** |
| `networkIP` | ***string***| ***(Optional)*** |
| `subnetwork` | ***string***| ***(Optional)*** |
| `subnetworkProject` | ***string***| ***(Optional)*** |
## ComputeInstanceFromTemplateSpecNetworkInterfaceAccessConfig

Appears on:[ComputeInstanceFromTemplateSpecNetworkInterface](#computeinstancefromtemplatespecnetworkinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `natIP` | ***string***| ***(Optional)*** |
| `networkTier` | ***string***| ***(Optional)*** |
| `publicPtrDomainName` | ***string***| ***(Optional)*** |
## ComputeInstanceFromTemplateSpecNetworkInterfaceAliasIPRange

Appears on:[ComputeInstanceFromTemplateSpecNetworkInterface](#computeinstancefromtemplatespecnetworkinterface)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipCIDRRange` | ***string***||
| `subnetworkRangeName` | ***string***| ***(Optional)*** |
## ComputeInstanceFromTemplateSpecScheduling

Appears on:[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `automaticRestart` | ***bool***| ***(Optional)*** |
| `nodeAffinities` | ***[[]ComputeInstanceFromTemplateSpecSchedulingNodeAffinities](#computeinstancefromtemplatespecschedulingnodeaffinities)***| ***(Optional)*** |
| `onHostMaintenance` | ***string***| ***(Optional)*** |
| `preemptible` | ***bool***| ***(Optional)*** |
## ComputeInstanceFromTemplateSpecSchedulingNodeAffinities

Appears on:[ComputeInstanceFromTemplateSpecScheduling](#computeinstancefromtemplatespecscheduling)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `operator` | ***string***||
| `values` | ***[]string***||
## ComputeInstanceFromTemplateSpecScratchDisk

Appears on:[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `interface` | ***string***| ***(Optional)*** |
## ComputeInstanceFromTemplateSpecServiceAccount

Appears on:[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `email` | ***string***| ***(Optional)*** |
| `scopes` | ***[]string***||
## ComputeInstanceFromTemplateSpecShieldedInstanceConfig

Appears on:[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enableIntegrityMonitoring` | ***bool***| ***(Optional)*** |
| `enableSecureBoot` | ***bool***| ***(Optional)*** |
| `enableVtpm` | ***bool***| ***(Optional)*** |
## ComputeInstanceFromTemplateStatus

Appears on:[ComputeInstanceFromTemplate](#computeinstancefromtemplate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeInstanceFromTemplateSpec](#computeinstancefromtemplatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeInstanceFromTemplateStatus](#computeinstancefromtemplatestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `attached_disk.<index>.disk_encryption_key_raw` | ***string*** ||
| `boot_disk.<index>.disk_encryption_key_raw` | ***string*** ||
