---
title: OrganizationIamBinding
menu:
  docs_v0.0.1:
    identifier: organizationiambinding-google.kubeform.com
    name: OrganizationIamBinding
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## OrganizationIamBinding
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `OrganizationIamBinding` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[OrganizationIamBindingSpec](#OrganizationIamBindingSpec)***||
| `status` | ***[OrganizationIamBindingStatus](#OrganizationIamBindingStatus)***||
## OrganizationIamBindingSpec
##### (Appears on:[OrganizationIamBinding](#OrganizationIamBinding), [OrganizationIamBindingStatus](#OrganizationIamBindingStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `members` | ***[]string***||
| `orgID` | ***string***||
| `role` | ***string***||
## OrganizationIamBindingStatus
##### (Appears on:[OrganizationIamBinding](#OrganizationIamBinding))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[OrganizationIamBindingSpec](#OrganizationIamBindingSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---