---
title: OrganizationsOrganization
menu:
  docs_v2020.10.13:
    identifier: organizationsorganization-aws.kubeform.com
    name: OrganizationsOrganization
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## OrganizationsOrganization
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OrganizationsOrganization` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OrganizationsOrganizationSpec](#organizationsorganizationspec)***||
| `status` | ***[OrganizationsOrganizationStatus](#organizationsorganizationstatus)***||
## OrganizationsOrganizationSpec

Appears on:[OrganizationsOrganization](#organizationsorganization), [OrganizationsOrganizationStatus](#organizationsorganizationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accounts` | ***[[]OrganizationsOrganizationSpecAccounts](#organizationsorganizationspecaccounts)***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `awsServiceAccessPrincipals` | ***[]string***| ***(Optional)*** |
| `enabledPolicyTypes` | ***[]string***| ***(Optional)*** |
| `featureSet` | ***string***| ***(Optional)*** |
| `masterAccountArn` | ***string***| ***(Optional)*** |
| `masterAccountEmail` | ***string***| ***(Optional)*** |
| `masterAccountID` | ***string***| ***(Optional)*** |
| `roots` | ***[[]OrganizationsOrganizationSpecRoots](#organizationsorganizationspecroots)***| ***(Optional)*** |
## OrganizationsOrganizationSpecAccounts

Appears on:[OrganizationsOrganizationSpec](#organizationsorganizationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `arn` | ***string***| ***(Optional)*** |
| `email` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
## OrganizationsOrganizationSpecRoots

Appears on:[OrganizationsOrganizationSpec](#organizationsorganizationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `arn` | ***string***| ***(Optional)*** |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `policyTypes` | ***[[]OrganizationsOrganizationSpecRootsPolicyTypes](#organizationsorganizationspecrootspolicytypes)***| ***(Optional)*** |
## OrganizationsOrganizationSpecRootsPolicyTypes

Appears on:[OrganizationsOrganizationSpecRoots](#organizationsorganizationspecroots)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `status` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## OrganizationsOrganizationStatus

Appears on:[OrganizationsOrganization](#organizationsorganization)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OrganizationsOrganizationSpec](#organizationsorganizationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OrganizationsOrganizationStatus](#organizationsorganizationstatus)

---
