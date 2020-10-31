---
title: EcsService
menu:
  docs_v2020.10.30:
    identifier: ecsservice-aws.kubeform.com
    name: EcsService
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## EcsService
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EcsService` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EcsServiceSpec](#ecsservicespec)***||
| `status` | ***[EcsServiceStatus](#ecsservicestatus)***||
## EcsServiceSpec

Appears on:[EcsService](#ecsservice), [EcsServiceStatus](#ecsservicestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `cluster` | ***string***| ***(Optional)*** |
| `deploymentController` | ***[[]EcsServiceSpecDeploymentController](#ecsservicespecdeploymentcontroller)***| ***(Optional)*** |
| `deploymentMaximumPercent` | ***int64***| ***(Optional)*** |
| `deploymentMinimumHealthyPercent` | ***int64***| ***(Optional)*** |
| `desiredCount` | ***int64***| ***(Optional)*** |
| `enableEcsManagedTags` | ***bool***| ***(Optional)*** |
| `healthCheckGracePeriodSeconds` | ***int64***| ***(Optional)*** |
| `iamRole` | ***string***| ***(Optional)*** |
| `launchType` | ***string***| ***(Optional)*** |
| `loadBalancer` | ***[[]EcsServiceSpecLoadBalancer](#ecsservicespecloadbalancer)***| ***(Optional)*** |
| `name` | ***string***||
| `networkConfiguration` | ***[[]EcsServiceSpecNetworkConfiguration](#ecsservicespecnetworkconfiguration)***| ***(Optional)*** |
| `orderedPlacementStrategy` | ***[[]EcsServiceSpecOrderedPlacementStrategy](#ecsservicespecorderedplacementstrategy)***| ***(Optional)*** |
| `placementConstraints` | ***[[]EcsServiceSpecPlacementConstraints](#ecsservicespecplacementconstraints)***| ***(Optional)*** |
| `platformVersion` | ***string***| ***(Optional)*** |
| `propagateTags` | ***string***| ***(Optional)*** |
| `schedulingStrategy` | ***string***| ***(Optional)*** |
| `serviceRegistries` | ***[[]EcsServiceSpecServiceRegistries](#ecsservicespecserviceregistries)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `taskDefinition` | ***string***||
## EcsServiceSpecDeploymentController

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***| ***(Optional)*** |
## EcsServiceSpecLoadBalancer

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerName` | ***string***||
| `containerPort` | ***int64***||
| `elbName` | ***string***| ***(Optional)*** |
| `targetGroupArn` | ***string***| ***(Optional)*** |
## EcsServiceSpecNetworkConfiguration

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `assignPublicIP` | ***bool***| ***(Optional)*** |
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `subnets` | ***[]string***||
## EcsServiceSpecOrderedPlacementStrategy

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `field` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## EcsServiceSpecPlacementConstraints

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `expression` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## EcsServiceSpecServiceRegistries

Appears on:[EcsServiceSpec](#ecsservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `containerName` | ***string***| ***(Optional)*** |
| `containerPort` | ***int64***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `registryArn` | ***string***||
## EcsServiceStatus

Appears on:[EcsService](#ecsservice)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EcsServiceSpec](#ecsservicespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[EcsServiceStatus](#ecsservicestatus)

---
