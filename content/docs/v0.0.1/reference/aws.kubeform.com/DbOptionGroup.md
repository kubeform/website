---
title: DbOptionGroup
menu:
  docs_v0.0.1:
    identifier: dboptiongroup-aws.kubeform.com
    name: DbOptionGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DbOptionGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DbOptionGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DbOptionGroupSpec](#DbOptionGroupSpec)***||
| `status` | ***[DbOptionGroupStatus](#DbOptionGroupStatus)***||
## DbOptionGroupSpec
##### (Appears on:[DbOptionGroup](#DbOptionGroup), [DbOptionGroupStatus](#DbOptionGroupStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `engineName` | ***string***||
| `majorEngineVersion` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `option` | ***[[]DbOptionGroupSpecOption](#DbOptionGroupSpecOption)***| ***(Optional)*** |
| `optionGroupDescription` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## DbOptionGroupSpecOption
##### (Appears on:[DbOptionGroupSpec](#DbOptionGroupSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `dbSecurityGroupMemberships` | ***[]string***| ***(Optional)*** |
| `optionName` | ***string***||
| `optionSettings` | ***[[]DbOptionGroupSpecOptionOptionSettings](#DbOptionGroupSpecOptionOptionSettings)***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
| `vpcSecurityGroupMemberships` | ***[]string***| ***(Optional)*** |
## DbOptionGroupSpecOptionOptionSettings
##### (Appears on:[DbOptionGroupSpecOption](#DbOptionGroupSpecOption))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `value` | ***string***||
## DbOptionGroupStatus
##### (Appears on:[DbOptionGroup](#DbOptionGroup))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DbOptionGroupSpec](#DbOptionGroupSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
