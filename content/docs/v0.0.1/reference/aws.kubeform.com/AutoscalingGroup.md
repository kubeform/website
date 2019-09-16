---
title: AutoscalingGroup
menu:
  docs_v0.0.1:
    identifier: autoscalinggroup-aws.kubeform.com
    name: AutoscalingGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## AutoscalingGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AutoscalingGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AutoscalingGroupSpec](#autoscalinggroupspec)***||
| `status` | ***[AutoscalingGroupStatus](#autoscalinggroupstatus)***||
## AutoscalingGroupSpec

Appears on:[AutoscalingGroup](#autoscalinggroup), [AutoscalingGroupStatus](#autoscalinggroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `availabilityZones` | ***[]string***| ***(Optional)*** |
| `defaultCooldown` | ***int***| ***(Optional)*** |
| `desiredCapacity` | ***int***| ***(Optional)*** |
| `enabledMetrics` | ***[]string***| ***(Optional)*** |
| `forceDelete` | ***bool***| ***(Optional)*** |
| `healthCheckGracePeriod` | ***int***| ***(Optional)*** |
| `healthCheckType` | ***string***| ***(Optional)*** |
| `initialLifecycleHook` | ***[[]AutoscalingGroupSpecInitialLifecycleHook](#autoscalinggroupspecinitiallifecyclehook)***| ***(Optional)*** |
| `launchConfiguration` | ***string***| ***(Optional)*** |
| `launchTemplate` | ***[[]AutoscalingGroupSpecLaunchTemplate](#autoscalinggroupspeclaunchtemplate)***| ***(Optional)*** |
| `loadBalancers` | ***[]string***| ***(Optional)*** |
| `maxSize` | ***int***||
| `metricsGranularity` | ***string***| ***(Optional)*** |
| `minElbCapacity` | ***int***| ***(Optional)*** |
| `minSize` | ***int***||
| `mixedInstancesPolicy` | ***[[]AutoscalingGroupSpecMixedInstancesPolicy](#autoscalinggroupspecmixedinstancespolicy)***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `placementGroup` | ***string***| ***(Optional)*** |
| `protectFromScaleIn` | ***bool***| ***(Optional)*** |
| `serviceLinkedRoleArn` | ***string***| ***(Optional)*** |
| `suspendedProcesses` | ***[]string***| ***(Optional)*** |
| `tag` | ***[[]AutoscalingGroupSpecTag](#autoscalinggroupspectag)***| ***(Optional)*** |
| `targetGroupArns` | ***[]string***| ***(Optional)*** |
| `terminationPolicies` | ***[]string***| ***(Optional)*** |
| `vpcZoneIdentifier` | ***[]string***| ***(Optional)*** |
| `waitForCapacityTimeout` | ***string***| ***(Optional)*** |
| `waitForElbCapacity` | ***int***| ***(Optional)*** |
## AutoscalingGroupSpecInitialLifecycleHook

Appears on:[AutoscalingGroupSpec](#autoscalinggroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultResult` | ***string***| ***(Optional)*** |
| `heartbeatTimeout` | ***int***| ***(Optional)*** |
| `lifecycleTransition` | ***string***||
| `name` | ***string***||
| `notificationMetadata` | ***string***| ***(Optional)*** |
| `notificationTargetArn` | ***string***| ***(Optional)*** |
| `roleArn` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecLaunchTemplate

Appears on:[AutoscalingGroupSpec](#autoscalinggroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecMixedInstancesPolicy

Appears on:[AutoscalingGroupSpec](#autoscalinggroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `instancesDistribution` | ***[[]AutoscalingGroupSpecMixedInstancesPolicyInstancesDistribution](#autoscalinggroupspecmixedinstancespolicyinstancesdistribution)***| ***(Optional)*** |
| `launchTemplate` | ***[[]AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplate](#autoscalinggroupspecmixedinstancespolicylaunchtemplate)***||
## AutoscalingGroupSpecMixedInstancesPolicyInstancesDistribution

Appears on:[AutoscalingGroupSpecMixedInstancesPolicy](#autoscalinggroupspecmixedinstancespolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `onDemandAllocationStrategy` | ***string***| ***(Optional)*** |
| `onDemandBaseCapacity` | ***int***| ***(Optional)*** |
| `onDemandPercentageAboveBaseCapacity` | ***int***| ***(Optional)*** |
| `spotAllocationStrategy` | ***string***| ***(Optional)*** |
| `spotInstancePools` | ***int***| ***(Optional)*** |
| `spotMaxPrice` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplate

Appears on:[AutoscalingGroupSpecMixedInstancesPolicy](#autoscalinggroupspecmixedinstancespolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `launchTemplateSpecification` | ***[[]AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification](#autoscalinggroupspecmixedinstancespolicylaunchtemplatelaunchtemplatespecification)***||
| `override` | ***[[]AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplateOverride](#autoscalinggroupspecmixedinstancespolicylaunchtemplateoverride)***| ***(Optional)*** |
## AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification

Appears on:[AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplate](#autoscalinggroupspecmixedinstancespolicylaunchtemplate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `launchTemplateID` | ***string***| ***(Optional)*** |
| `launchTemplateName` | ***string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplateOverride

Appears on:[AutoscalingGroupSpecMixedInstancesPolicyLaunchTemplate](#autoscalinggroupspecmixedinstancespolicylaunchtemplate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `instanceType` | ***string***| ***(Optional)*** |
## AutoscalingGroupSpecTag

Appears on:[AutoscalingGroupSpec](#autoscalinggroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `propagateAtLaunch` | ***bool***||
| `value` | ***string***||
## AutoscalingGroupStatus

Appears on:[AutoscalingGroup](#autoscalinggroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AutoscalingGroupSpec](#autoscalinggroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
