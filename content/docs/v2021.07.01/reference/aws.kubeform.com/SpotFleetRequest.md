---
title: SpotFleetRequest
menu:
  docs_v2021.07.01:
    identifier: spotfleetrequest-aws.kubeform.com
    name: SpotFleetRequest
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

## SpotFleetRequest
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SpotFleetRequest` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SpotFleetRequestSpec](#spotfleetrequestspec)***||
| `status` | ***[SpotFleetRequestStatus](#spotfleetrequeststatus)***||
## Phase(`string` alias)

Appears on:[SpotFleetRequestStatus](#spotfleetrequeststatus)

## SpotFleetRequestSpec

Appears on:[SpotFleetRequest](#spotfleetrequest), [SpotFleetRequestStatus](#spotfleetrequeststatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allocationStrategy` | ***string***| ***(Optional)*** |
| `clientToken` | ***string***| ***(Optional)*** |
| `excessCapacityTerminationPolicy` | ***string***| ***(Optional)*** |
| `fleetType` | ***string***| ***(Optional)*** |
| `iamFleetRole` | ***string***||
| `instanceInterruptionBehaviour` | ***string***| ***(Optional)*** |
| `instancePoolsToUseCount` | ***int64***| ***(Optional)*** |
| `launchSpecification` | ***[[]SpotFleetRequestSpecLaunchSpecification](#spotfleetrequestspeclaunchspecification)***||
| `loadBalancers` | ***[]string***| ***(Optional)*** |
| `replaceUnhealthyInstances` | ***bool***| ***(Optional)*** |
| `spotPrice` | ***string***| ***(Optional)*** |
| `spotRequestState` | ***string***| ***(Optional)*** |
| `targetCapacity` | ***int64***||
| `targetGroupArns` | ***[]string***| ***(Optional)*** |
| `terminateInstancesWithExpiration` | ***bool***| ***(Optional)*** |
| `validFrom` | ***string***| ***(Optional)*** |
| `validUntil` | ***string***| ***(Optional)*** |
| `waitForFulfillment` | ***bool***| ***(Optional)*** |
## SpotFleetRequestSpecLaunchSpecification

Appears on:[SpotFleetRequestSpec](#spotfleetrequestspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ami` | ***string***||
| `associatePublicIPAddress` | ***bool***| ***(Optional)*** |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `ebsBlockDevice` | ***[[]SpotFleetRequestSpecLaunchSpecificationEbsBlockDevice](#spotfleetrequestspeclaunchspecificationebsblockdevice)***| ***(Optional)*** |
| `ebsOptimized` | ***bool***| ***(Optional)*** |
| `ephemeralBlockDevice` | ***[[]SpotFleetRequestSpecLaunchSpecificationEphemeralBlockDevice](#spotfleetrequestspeclaunchspecificationephemeralblockdevice)***| ***(Optional)*** |
| `iamInstanceProfile` | ***string***| ***(Optional)*** |
| `iamInstanceProfileArn` | ***string***| ***(Optional)*** |
| `instanceType` | ***string***||
| `keyName` | ***string***| ***(Optional)*** |
| `monitoring` | ***bool***| ***(Optional)*** |
| `placementGroup` | ***string***| ***(Optional)*** |
| `placementTenancy` | ***string***| ***(Optional)*** |
| `rootBlockDevice` | ***[[]SpotFleetRequestSpecLaunchSpecificationRootBlockDevice](#spotfleetrequestspeclaunchspecificationrootblockdevice)***| ***(Optional)*** |
| `spotPrice` | ***string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `userData` | ***string***| ***(Optional)*** |
| `vpcSecurityGroupIDS` | ***[]string***| ***(Optional)*** |
| `weightedCapacity` | ***string***| ***(Optional)*** |
## SpotFleetRequestSpecLaunchSpecificationEbsBlockDevice

Appears on:[SpotFleetRequestSpecLaunchSpecification](#spotfleetrequestspeclaunchspecification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteOnTermination` | ***bool***| ***(Optional)*** |
| `deviceName` | ***string***||
| `encrypted` | ***bool***| ***(Optional)*** |
| `iops` | ***int64***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `snapshotID` | ***string***| ***(Optional)*** |
| `volumeSize` | ***int64***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## SpotFleetRequestSpecLaunchSpecificationEphemeralBlockDevice

Appears on:[SpotFleetRequestSpecLaunchSpecification](#spotfleetrequestspeclaunchspecification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deviceName` | ***string***||
| `virtualName` | ***string***||
## SpotFleetRequestSpecLaunchSpecificationRootBlockDevice

Appears on:[SpotFleetRequestSpecLaunchSpecification](#spotfleetrequestspeclaunchspecification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `deleteOnTermination` | ***bool***| ***(Optional)*** |
| `encrypted` | ***bool***| ***(Optional)*** |
| `iops` | ***int64***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `volumeSize` | ***int64***| ***(Optional)*** |
| `volumeType` | ***string***| ***(Optional)*** |
## SpotFleetRequestStatus

Appears on:[SpotFleetRequest](#spotfleetrequest)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SpotFleetRequestSpec](#spotfleetrequestspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
