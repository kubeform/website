---
title: RuntimeconfigConfig
menu:
  docs_v0.0.1:
    identifier: runtimeconfigconfig-google.kubeform.com
    name: RuntimeconfigConfig
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## RuntimeconfigConfig
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `RuntimeconfigConfig` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RuntimeconfigConfigSpec](#RuntimeconfigConfigSpec)***||
| `status` | ***[RuntimeconfigConfigStatus](#RuntimeconfigConfigStatus)***||
## RuntimeconfigConfigSpec
##### (Appears on:[RuntimeconfigConfig](#RuntimeconfigConfig), [RuntimeconfigConfigStatus](#RuntimeconfigConfigStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
## RuntimeconfigConfigStatus
##### (Appears on:[RuntimeconfigConfig](#RuntimeconfigConfig))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RuntimeconfigConfigSpec](#RuntimeconfigConfigSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
