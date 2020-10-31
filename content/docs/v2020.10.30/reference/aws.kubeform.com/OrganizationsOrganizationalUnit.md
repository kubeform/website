---
title: OrganizationsOrganizationalUnit
menu:
  docs_v2020.10.30:
    identifier: organizationsorganizationalunit-aws.kubeform.com
    name: OrganizationsOrganizationalUnit
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## OrganizationsOrganizationalUnit
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OrganizationsOrganizationalUnit` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OrganizationsOrganizationalUnitSpec](#organizationsorganizationalunitspec)***||
| `status` | ***[OrganizationsOrganizationalUnitStatus](#organizationsorganizationalunitstatus)***||
## OrganizationsOrganizationalUnitSpec

Appears on:[OrganizationsOrganizationalUnit](#organizationsorganizationalunit), [OrganizationsOrganizationalUnitStatus](#organizationsorganizationalunitstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accounts` | ***[[]OrganizationsOrganizationalUnitSpecAccounts](#organizationsorganizationalunitspecaccounts)***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parentID` | ***string***||
## OrganizationsOrganizationalUnitSpecAccounts

Appears on:[OrganizationsOrganizationalUnitSpec](#organizationsorganizationalunitspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `arn` | ***string***| ***(Optional)*** |
| `email` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
## OrganizationsOrganizationalUnitStatus

Appears on:[OrganizationsOrganizationalUnit](#organizationsorganizationalunit)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OrganizationsOrganizationalUnitSpec](#organizationsorganizationalunitspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OrganizationsOrganizationalUnitStatus](#organizationsorganizationalunitstatus)

---
