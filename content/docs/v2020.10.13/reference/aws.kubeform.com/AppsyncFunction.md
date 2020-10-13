---
title: AppsyncFunction
menu:
  docs_v2020.10.13:
    identifier: appsyncfunction-aws.kubeform.com
    name: AppsyncFunction
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## AppsyncFunction
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppsyncFunction` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppsyncFunctionSpec](#appsyncfunctionspec)***||
| `status` | ***[AppsyncFunctionStatus](#appsyncfunctionstatus)***||
## AppsyncFunctionSpec



Appears on:[AppsyncFunction](#appsyncfunction), [AppsyncFunctionStatus](#appsyncfunctionstatus)



| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `apiID` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `dataSource` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `functionID` | ***string***| ***(Optional)*** |
| `functionVersion` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `requestMappingTemplate` | ***string***||
| `responseMappingTemplate` | ***string***||
## AppsyncFunctionStatus



Appears on:[AppsyncFunction](#appsyncfunction)



| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppsyncFunctionSpec](#appsyncfunctionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
