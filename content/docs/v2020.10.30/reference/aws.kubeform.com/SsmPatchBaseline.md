---
title: SsmPatchBaseline
menu:
  docs_v2020.10.30:
    identifier: ssmpatchbaseline-aws.kubeform.com
    name: SsmPatchBaseline
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## SsmPatchBaseline
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SsmPatchBaseline` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SsmPatchBaselineSpec](#ssmpatchbaselinespec)***||
| `status` | ***[SsmPatchBaselineStatus](#ssmpatchbaselinestatus)***||
## Phase(`string` alias)

Appears on:[SsmPatchBaselineStatus](#ssmpatchbaselinestatus)

## SsmPatchBaselineSpec

Appears on:[SsmPatchBaseline](#ssmpatchbaseline), [SsmPatchBaselineStatus](#ssmpatchbaselinestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `approvalRule` | ***[[]SsmPatchBaselineSpecApprovalRule](#ssmpatchbaselinespecapprovalrule)***| ***(Optional)*** |
| `approvedPatches` | ***[]string***| ***(Optional)*** |
| `approvedPatchesComplianceLevel` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `globalFilter` | ***[[]SsmPatchBaselineSpecGlobalFilter](#ssmpatchbaselinespecglobalfilter)***| ***(Optional)*** |
| `name` | ***string***||
| `operatingSystem` | ***string***| ***(Optional)*** |
| `rejectedPatches` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SsmPatchBaselineSpecApprovalRule

Appears on:[SsmPatchBaselineSpec](#ssmpatchbaselinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `approveAfterDays` | ***int64***||
| `complianceLevel` | ***string***| ***(Optional)*** |
| `enableNonSecurity` | ***bool***| ***(Optional)*** |
| `patchFilter` | ***[[]SsmPatchBaselineSpecApprovalRulePatchFilter](#ssmpatchbaselinespecapprovalrulepatchfilter)***||
## SsmPatchBaselineSpecApprovalRulePatchFilter

Appears on:[SsmPatchBaselineSpecApprovalRule](#ssmpatchbaselinespecapprovalrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `values` | ***[]string***||
## SsmPatchBaselineSpecGlobalFilter

Appears on:[SsmPatchBaselineSpec](#ssmpatchbaselinespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `values` | ***[]string***||
## SsmPatchBaselineStatus

Appears on:[SsmPatchBaseline](#ssmpatchbaseline)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SsmPatchBaselineSpec](#ssmpatchbaselinespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
