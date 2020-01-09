---
title: IamAccountAlias
menu:
  docs_v0.0.1:
    identifier: iamaccountalias-aws.kubeform.com
    name: IamAccountAlias
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## IamAccountAlias
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IamAccountAlias` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IamAccountAliasSpec](#iamaccountaliasspec)***||
| `status` | ***[IamAccountAliasStatus](#iamaccountaliasstatus)***||
## IamAccountAliasSpec

Appears on:[IamAccountAlias](#iamaccountalias), [IamAccountAliasStatus](#iamaccountaliasstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountAlias` | ***string***||
## IamAccountAliasStatus

Appears on:[IamAccountAlias](#iamaccountalias)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IamAccountAliasSpec](#iamaccountaliasspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---