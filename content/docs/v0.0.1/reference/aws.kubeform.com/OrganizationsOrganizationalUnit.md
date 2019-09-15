---
title: OrganizationsOrganizationalUnit
menu:
  docs_v0.0.1:
    identifier: organizationsorganizationalunit-aws.kubeform.com
    name: OrganizationsOrganizationalUnit
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## OrganizationsOrganizationalUnit
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OrganizationsOrganizationalUnit` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OrganizationsOrganizationalUnitSpec](#OrganizationsOrganizationalUnitSpec)***||
| `status` | ***[OrganizationsOrganizationalUnitStatus](#OrganizationsOrganizationalUnitStatus)***||
## OrganizationsOrganizationalUnitSpec
##### (Appears on:[OrganizationsOrganizationalUnit](#OrganizationsOrganizationalUnit), [OrganizationsOrganizationalUnitStatus](#OrganizationsOrganizationalUnitStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accounts` | ***[[]OrganizationsOrganizationalUnitSpecAccounts](#OrganizationsOrganizationalUnitSpecAccounts)***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parentID` | ***string***||
## OrganizationsOrganizationalUnitSpecAccounts
##### (Appears on:[OrganizationsOrganizationalUnitSpec](#OrganizationsOrganizationalUnitSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `arn` | ***string***| ***(Optional)*** |
| `email` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
## OrganizationsOrganizationalUnitStatus
##### (Appears on:[OrganizationsOrganizationalUnit](#OrganizationsOrganizationalUnit))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OrganizationsOrganizationalUnitSpec](#OrganizationsOrganizationalUnitSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
