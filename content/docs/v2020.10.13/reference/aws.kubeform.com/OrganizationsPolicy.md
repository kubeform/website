---
title: OrganizationsPolicy
menu:
  docs_v2020.10.13:
    identifier: organizationspolicy-aws.kubeform.com
    name: OrganizationsPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## OrganizationsPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `OrganizationsPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OrganizationsPolicySpec](#organizationspolicyspec)***||
| `status` | ***[OrganizationsPolicyStatus](#organizationspolicystatus)***||
## OrganizationsPolicySpec

Appears on:[OrganizationsPolicy](#organizationspolicy), [OrganizationsPolicyStatus](#organizationspolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `content` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## OrganizationsPolicyStatus

Appears on:[OrganizationsPolicy](#organizationspolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OrganizationsPolicySpec](#organizationspolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[OrganizationsPolicyStatus](#organizationspolicystatus)

---
