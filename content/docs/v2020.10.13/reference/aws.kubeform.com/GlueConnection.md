---
title: GlueConnection
menu:
  docs_v2020.10.13:
    identifier: glueconnection-aws.kubeform.com
    name: GlueConnection
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## GlueConnection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GlueConnection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GlueConnectionSpec](#glueconnectionspec)***||
| `status` | ***[GlueConnectionStatus](#glueconnectionstatus)***||
## GlueConnectionSpec

Appears on:[GlueConnection](#glueconnection), [GlueConnectionStatus](#glueconnectionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `catalogID` | ***string***| ***(Optional)*** |
| `connectionProperties` | ***map[string]string***||
| `connectionType` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `matchCriteria` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `physicalConnectionRequirements` | ***[[]GlueConnectionSpecPhysicalConnectionRequirements](#glueconnectionspecphysicalconnectionrequirements)***| ***(Optional)*** |
## GlueConnectionSpecPhysicalConnectionRequirements

Appears on:[GlueConnectionSpec](#glueconnectionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `availabilityZone` | ***string***| ***(Optional)*** |
| `securityGroupIDList` | ***[]string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
## GlueConnectionStatus

Appears on:[GlueConnection](#glueconnection)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GlueConnectionSpec](#glueconnectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[GlueConnectionStatus](#glueconnectionstatus)

---
