---
title: MskConfiguration
menu:
  docs_v2020.10.13:
    identifier: mskconfiguration-aws.kubeform.com
    name: MskConfiguration
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## MskConfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `MskConfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MskConfigurationSpec](#mskconfigurationspec)***||
| `status` | ***[MskConfigurationStatus](#mskconfigurationstatus)***||
## MskConfigurationSpec



Appears on:[MskConfiguration](#mskconfiguration), [MskConfigurationStatus](#mskconfigurationstatus)



| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `kafkaVersions` | ***[]string***||
| `latestRevision` | ***int***| ***(Optional)*** |
| `name` | ***string***||
| `serverProperties` | ***string***||
## MskConfigurationStatus



Appears on:[MskConfiguration](#mskconfiguration)



| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MskConfigurationSpec](#mskconfigurationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
