---
title: PolicySetDefinition
menu:
  docs_v2020.10.13:
    identifier: policysetdefinition-azurerm.kubeform.com
    name: PolicySetDefinition
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## PolicySetDefinition
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PolicySetDefinition` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PolicySetDefinitionSpec](#policysetdefinitionspec)***||
| `status` | ***[PolicySetDefinitionStatus](#policysetdefinitionstatus)***||
## Phase(`string` alias)

Appears on:[PolicySetDefinitionStatus](#policysetdefinitionstatus)

## PolicySetDefinitionSpec

Appears on:[PolicySetDefinition](#policysetdefinition), [PolicySetDefinitionStatus](#policysetdefinitionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `displayName` | ***string***||
| `managementGroupID` | ***string***| ***(Optional)*** |
| `metadata` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parameters` | ***string***| ***(Optional)*** |
| `policyDefinitions` | ***string***| ***(Optional)*** |
| `policyType` | ***string***||
## PolicySetDefinitionStatus

Appears on:[PolicySetDefinition](#policysetdefinition)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PolicySetDefinitionSpec](#policysetdefinitionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
