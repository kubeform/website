---
title: ServiceAccount
menu:
  docs_v2020.10.30:
    identifier: serviceaccount-google.kubeform.com
    name: ServiceAccount
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ServiceAccount
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ServiceAccount` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServiceAccountSpec](#serviceaccountspec)***||
| `status` | ***[ServiceAccountStatus](#serviceaccountstatus)***||
## Phase(`string` alias)

Appears on:[ServiceAccountStatus](#serviceaccountstatus)

## ServiceAccountSpec

Appears on:[ServiceAccount](#serviceaccount), [ServiceAccountStatus](#serviceaccountstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accountID` | ***string***||
| `displayName` | ***string***| ***(Optional)*** |
| `email` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `uniqueID` | ***string***| ***(Optional)*** |
## ServiceAccountStatus

Appears on:[ServiceAccount](#serviceaccount)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServiceAccountSpec](#serviceaccountspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
