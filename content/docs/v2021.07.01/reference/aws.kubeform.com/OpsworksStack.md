---
title: OpsworksStack
menu:
  docs_v2021.07.01:
    identifier: opsworksstack-aws.kubeform.com
    name: OpsworksStack
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

## OpsworksStack
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OpsworksStack` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OpsworksStackSpec](#opsworksstackspec)***||
| `status` | ***[OpsworksStackStatus](#opsworksstackstatus)***||
## OpsworksStackSpec

Appears on:[OpsworksStack](#opsworksstack), [OpsworksStackStatus](#opsworksstackstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `agentVersion` | ***string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `berkshelfVersion` | ***string***| ***(Optional)*** |
| `color` | ***string***| ***(Optional)*** |
| `configurationManagerName` | ***string***| ***(Optional)*** |
| `configurationManagerVersion` | ***string***| ***(Optional)*** |
| `customCookbooksSource` | ***[[]OpsworksStackSpecCustomCookbooksSource](#opsworksstackspeccustomcookbookssource)***| ***(Optional)*** |
| `customJSON` | ***string***| ***(Optional)*** |
| `defaultAvailabilityZone` | ***string***| ***(Optional)*** |
| `defaultInstanceProfileArn` | ***string***||
| `defaultOs` | ***string***| ***(Optional)*** |
| `defaultRootDeviceType` | ***string***| ***(Optional)*** |
| `defaultSSHKeyName` | ***string***| ***(Optional)*** |
| `defaultSubnetID` | ***string***| ***(Optional)*** |
| `hostnameTheme` | ***string***| ***(Optional)*** |
| `manageBerkshelf` | ***bool***| ***(Optional)*** |
| `name` | ***string***||
| `region` | ***string***||
| `serviceRoleArn` | ***string***||
| `stackEndpoint` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `useCustomCookbooks` | ***bool***| ***(Optional)*** |
| `useOpsworksSecurityGroups` | ***bool***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## OpsworksStackSpecCustomCookbooksSource

Appears on:[OpsworksStackSpec](#opsworksstackspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `revision` | ***string***| ***(Optional)*** |
| `sshKey` | ***string***| ***(Optional)*** |
| `type` | ***string***||
| `url` | ***string***||
| `username` | ***string***| ***(Optional)*** |
## OpsworksStackStatus

Appears on:[OpsworksStack](#opsworksstack)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OpsworksStackSpec](#opsworksstackspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OpsworksStackStatus](#opsworksstackstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `custom_cookbooks_source.<index>.password` | ***string*** ||
