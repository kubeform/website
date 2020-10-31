---
title: OrganizationsAccount
menu:
  docs_v2020.10.30:
    identifier: organizationsaccount-aws.kubeform.com
    name: OrganizationsAccount
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## OrganizationsAccount
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OrganizationsAccount` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OrganizationsAccountSpec](#organizationsaccountspec)***||
| `status` | ***[OrganizationsAccountStatus](#organizationsaccountstatus)***||
## OrganizationsAccountSpec

Appears on:[OrganizationsAccount](#organizationsaccount), [OrganizationsAccountStatus](#organizationsaccountstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `email` | ***string***||
| `iamUserAccessToBilling` | ***string***| ***(Optional)*** |
| `joinedMethod` | ***string***| ***(Optional)*** |
| `joinedTimestamp` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parentID` | ***string***| ***(Optional)*** |
| `roleName` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## OrganizationsAccountStatus

Appears on:[OrganizationsAccount](#organizationsaccount)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OrganizationsAccountSpec](#organizationsaccountspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OrganizationsAccountStatus](#organizationsaccountstatus)

---
