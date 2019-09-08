---
title: PolicySetDefinition
menu:
  docs_v0.0.1:
    identifier: policysetdefinition-azurerm.kubeform.com
    name: PolicySetDefinition
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## PolicySetDefinition
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PolicySetDefinition` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PolicySetDefinitionSpec](#PolicySetDefinitionSpec)***||
| `status` | ***[PolicySetDefinitionStatus](#PolicySetDefinitionStatus)***||
## PolicySetDefinitionSpec
##### (Appears on:[PolicySetDefinition](#PolicySetDefinition), [PolicySetDefinitionStatus](#PolicySetDefinitionStatus))
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
##### (Appears on:[PolicySetDefinition](#PolicySetDefinition))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PolicySetDefinitionSpec](#PolicySetDefinitionSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---