---
title: RuntimeconfigConfig
menu:
  docs_v2020.10.13:
    identifier: runtimeconfigconfig-google.kubeform.com
    name: RuntimeconfigConfig
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## RuntimeconfigConfig
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `RuntimeconfigConfig` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RuntimeconfigConfigSpec](#runtimeconfigconfigspec)***||
| `status` | ***[RuntimeconfigConfigStatus](#runtimeconfigconfigstatus)***||
## Phase(`string` alias)

Appears on:[RuntimeconfigConfigStatus](#runtimeconfigconfigstatus)

## RuntimeconfigConfigSpec

Appears on:[RuntimeconfigConfig](#runtimeconfigconfig), [RuntimeconfigConfigStatus](#runtimeconfigconfigstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
## RuntimeconfigConfigStatus

Appears on:[RuntimeconfigConfig](#runtimeconfigconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RuntimeconfigConfigSpec](#runtimeconfigconfigspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
