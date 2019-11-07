---
title: LaunchConfiguration
menu:
  docs_v0.1.0:
    identifier: launchconfiguration-aws.kubeform.com
    name: LaunchConfiguration
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## LaunchConfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LaunchConfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LaunchConfigurationSpec](#launchconfigurationspec)***||
| `status` | ***[LaunchConfigurationStatus](#launchconfigurationstatus)***||
## LaunchConfigurationSpec

Appears on:[LaunchConfiguration](#launchconfiguration), [LaunchConfigurationStatus](#launchconfigurationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `associatePublicIPAddress` | ***bool***| ***(Optional)*** |
| `ebsBlockDevice` | ***[[]LaunchConfigurationSpecEbsBlockDevice](#launchconfigurationspecebsblockdevice)***| ***(Optional)*** |
| `ebsOptimized` | ***bool***| ***(Optional)*** |
| `enableMonitoring` | ***bool***| ***(Optional)*** |
| `ephemeralBlockDevice` | ***[[]LaunchConfigurationSpecEphemeralBlockDevice](#launchconfigurationspecephemeralblockdevice)***| ***(Optional)*** |
| `iamInstanceProfile` | ***string***| ***(Optional)*** |
| `imageID` | ***string***||
| `instanceType` | ***string***||
| `keyName` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `placementTenancy` | ***string***| ***(Optional)*** |
| `rootBlockDevice` | ***[[]LaunchConfigurationSpecRootBlockDevice](#launchconfigurationspecrootblockdevice)***| ***(Optional)*** |
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `spotPrice` | ***string***| ***(Optional)*** |
| `userData` | ***string***| ***(Optional)*** |
| `userDataBase64` | ***string***| ***(Optional)*** |
| `vpcClassicLinkID` | ***string***| ***(Optional)*** |
| `vpcClassicLinkSecurityGroups` | ***[]string***| ***(Optional)*** |
## LaunchConfigurationSpecEbsBlockDevice

Appears on:[LaunchConfigurationSpec](#launchconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteOnTermination` | ***bool***| ***(Optional)*** |
| `deviceName` | ***string***||
| `encrypted` | ***bool***| ***(Optional)*** |
| `iops` | ***int***| ***(Optional)*** |
| `noDevice` | ***bool***| ***(Optional)*** |
| `snapshotID` | ***string***| ***(Optional)*** |
| `volumeSize` | ***int***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## LaunchConfigurationSpecEphemeralBlockDevice

Appears on:[LaunchConfigurationSpec](#launchconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deviceName` | ***string***||
| `virtualName` | ***string***||
## LaunchConfigurationSpecRootBlockDevice

Appears on:[LaunchConfigurationSpec](#launchconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteOnTermination` | ***bool***| ***(Optional)*** |
| `iops` | ***int***| ***(Optional)*** |
| `volumeSize` | ***int***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## LaunchConfigurationStatus

Appears on:[LaunchConfiguration](#launchconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LaunchConfigurationSpec](#launchconfigurationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LaunchConfigurationStatus](#launchconfigurationstatus)

---
