---
title: PolicyDefinition
menu:
  docs_v2020.10.30:
    identifier: policydefinition-azurerm.kubeform.com
    name: PolicyDefinition
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## PolicyDefinition
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PolicyDefinition` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PolicyDefinitionSpec](#policydefinitionspec)***||
| `status` | ***[PolicyDefinitionStatus](#policydefinitionstatus)***||
## Phase(`string` alias)

Appears on:[PolicyDefinitionStatus](#policydefinitionstatus)

## PolicyDefinitionSpec

Appears on:[PolicyDefinition](#policydefinition), [PolicyDefinitionStatus](#policydefinitionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `displayName` | ***string***||
| `managementGroupID` | ***string***| ***(Optional)*** |
| `metadata` | ***string***| ***(Optional)*** |
| `mode` | ***string***||
| `name` | ***string***||
| `parameters` | ***string***| ***(Optional)*** |
| `policyRule` | ***string***| ***(Optional)*** |
| `policyType` | ***string***||
## PolicyDefinitionStatus

Appears on:[PolicyDefinition](#policydefinition)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PolicyDefinitionSpec](#policydefinitionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
