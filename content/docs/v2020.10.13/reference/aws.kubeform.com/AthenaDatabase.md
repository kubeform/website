---
title: AthenaDatabase
menu:
  docs_v2020.10.13:
    identifier: athenadatabase-aws.kubeform.com
    name: AthenaDatabase
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## AthenaDatabase
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AthenaDatabase` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AthenaDatabaseSpec](#athenadatabasespec)***||
| `status` | ***[AthenaDatabaseStatus](#athenadatabasestatus)***||
## AthenaDatabaseSpec

Appears on:[AthenaDatabase](#athenadatabase), [AthenaDatabaseStatus](#athenadatabasestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucket` | ***string***||
| `encryptionConfiguration` | ***[[]AthenaDatabaseSpecEncryptionConfiguration](#athenadatabasespecencryptionconfiguration)***| ***(Optional)*** |
| `forceDestroy` | ***bool***| ***(Optional)*** |
| `name` | ***string***||
## AthenaDatabaseSpecEncryptionConfiguration

Appears on:[AthenaDatabaseSpec](#athenadatabasespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `encryptionOption` | ***string***||
| `kmsKey` | ***string***| ***(Optional)*** |
## AthenaDatabaseStatus

Appears on:[AthenaDatabase](#athenadatabase)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AthenaDatabaseSpec](#athenadatabasespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AthenaDatabaseStatus](#athenadatabasestatus)

---
