---
title: RuntimeconfigVariable
menu:
  docs_v2020.10.30:
    identifier: runtimeconfigvariable-google.kubeform.com
    name: RuntimeconfigVariable
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## RuntimeconfigVariable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `RuntimeconfigVariable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RuntimeconfigVariableSpec](#runtimeconfigvariablespec)***||
| `status` | ***[RuntimeconfigVariableStatus](#runtimeconfigvariablestatus)***||
## Phase(`string` alias)

Appears on:[RuntimeconfigVariableStatus](#runtimeconfigvariablestatus)

## RuntimeconfigVariableSpec

Appears on:[RuntimeconfigVariable](#runtimeconfigvariable), [RuntimeconfigVariableStatus](#runtimeconfigvariablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `parent` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `text` | ***string***| ***(Optional)*** |
| `updateTime` | ***string***| ***(Optional)*** |
| `value` | ***string***| ***(Optional)*** |
## RuntimeconfigVariableStatus

Appears on:[RuntimeconfigVariable](#runtimeconfigvariable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RuntimeconfigVariableSpec](#runtimeconfigvariablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
