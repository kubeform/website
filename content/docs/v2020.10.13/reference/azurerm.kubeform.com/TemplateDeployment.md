---
title: TemplateDeployment
menu:
  docs_v2020.10.13:
    identifier: templatedeployment-azurerm.kubeform.com
    name: TemplateDeployment
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## TemplateDeployment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `TemplateDeployment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[TemplateDeploymentSpec](#templatedeploymentspec)***||
| `status` | ***[TemplateDeploymentStatus](#templatedeploymentstatus)***||
## Phase(`string` alias)

Appears on:[TemplateDeploymentStatus](#templatedeploymentstatus)

## TemplateDeploymentSpec

Appears on:[TemplateDeployment](#templatedeployment), [TemplateDeploymentStatus](#templatedeploymentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `deploymentMode` | ***string***||
| `name` | ***string***||
| `outputs` | ***map[string]string***| ***(Optional)*** |
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `parametersBody` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `templateBody` | ***string***| ***(Optional)*** |
## TemplateDeploymentStatus

Appears on:[TemplateDeployment](#templatedeployment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[TemplateDeploymentSpec](#templatedeploymentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
