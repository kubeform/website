---
title: IotThing
menu:
  docs_v2020.10.13:
    identifier: iotthing-aws.kubeform.com
    name: IotThing
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## IotThing
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IotThing` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IotThingSpec](#iotthingspec)***||
| `status` | ***[IotThingStatus](#iotthingstatus)***||
## IotThingSpec

Appears on:[IotThing](#iotthing), [IotThingStatus](#iotthingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `attributes` | ***map[string]string***| ***(Optional)*** |
| `defaultClientID` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `thingTypeName` | ***string***| ***(Optional)*** |
| `version` | ***int64***| ***(Optional)*** |
## IotThingStatus

Appears on:[IotThing](#iotthing)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IotThingSpec](#iotthingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IotThingStatus](#iotthingstatus)

---
