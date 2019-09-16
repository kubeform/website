---
title: DevTestPolicy
menu:
  docs_v0.0.1:
    identifier: devtestpolicy-azurerm.kubeform.com
    name: DevTestPolicy
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DevTestPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DevTestPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DevTestPolicySpec](#devtestpolicyspec)***||
| `status` | ***[DevTestPolicyStatus](#devtestpolicystatus)***||
## DevTestPolicySpec

Appears on:[DevTestPolicy](#devtestpolicy), [DevTestPolicyStatus](#devtestpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `evaluatorType` | ***string***||
| `factData` | ***string***| ***(Optional)*** |
| `labName` | ***string***||
| `name` | ***string***||
| `policySetName` | ***string***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `threshold` | ***string***||
## DevTestPolicyStatus

Appears on:[DevTestPolicy](#devtestpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DevTestPolicySpec](#devtestpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
