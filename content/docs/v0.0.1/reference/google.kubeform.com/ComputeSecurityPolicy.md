---
title: ComputeSecurityPolicy
menu:
  docs_v0.0.1:
    identifier: computesecuritypolicy-google.kubeform.com
    name: ComputeSecurityPolicy
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ComputeSecurityPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeSecurityPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeSecurityPolicySpec](#computesecuritypolicyspec)***||
| `status` | ***[ComputeSecurityPolicyStatus](#computesecuritypolicystatus)***||
## ComputeSecurityPolicySpec

Appears on:[ComputeSecurityPolicy](#computesecuritypolicy), [ComputeSecurityPolicyStatus](#computesecuritypolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `fingerprint` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `project` | ***string***| ***(Optional)*** |
| `rule` | ***[[]ComputeSecurityPolicySpecRule](#computesecuritypolicyspecrule)***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeSecurityPolicySpecRule

Appears on:[ComputeSecurityPolicySpec](#computesecuritypolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `match` | ***[[]ComputeSecurityPolicySpecRuleMatch](#computesecuritypolicyspecrulematch)***||
| `preview` | ***bool***| ***(Optional)*** |
| `priority` | ***int***||
## ComputeSecurityPolicySpecRuleMatch

Appears on:[ComputeSecurityPolicySpecRule](#computesecuritypolicyspecrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `config` | ***[[]ComputeSecurityPolicySpecRuleMatchConfig](#computesecuritypolicyspecrulematchconfig)***||
| `versionedExpr` | ***string***||
## ComputeSecurityPolicySpecRuleMatchConfig

Appears on:[ComputeSecurityPolicySpecRuleMatch](#computesecuritypolicyspecrulematch)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `srcIPRanges` | ***[]string***||
## ComputeSecurityPolicyStatus

Appears on:[ComputeSecurityPolicy](#computesecuritypolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeSecurityPolicySpec](#computesecuritypolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
