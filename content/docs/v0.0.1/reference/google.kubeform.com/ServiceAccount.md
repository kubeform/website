---
title: ServiceAccount
menu:
  docs_v0.0.1:
    identifier: serviceaccount-google.kubeform.com
    name: ServiceAccount
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ServiceAccount
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ServiceAccount` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServiceAccountSpec](#serviceaccountspec)***||
| `status` | ***[ServiceAccountStatus](#serviceaccountstatus)***||
## ServiceAccountSpec

Appears on:[ServiceAccount](#serviceaccount), [ServiceAccountStatus](#serviceaccountstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountID` | ***string***||
| `displayName` | ***string***| ***(Optional)*** |
| `email` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `policyData` | ***string***| ***(Optional)*** Deprecated|
| `project` | ***string***| ***(Optional)*** |
| `uniqueID` | ***string***| ***(Optional)*** |
## ServiceAccountStatus

Appears on:[ServiceAccount](#serviceaccount)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServiceAccountSpec](#serviceaccountspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
