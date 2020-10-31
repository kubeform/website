---
title: NetworkACLRule
menu:
  docs_v2020.10.30:
    identifier: networkaclrule-aws.kubeform.com
    name: NetworkACLRule
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## NetworkACLRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkACLRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkACLRuleSpec](#networkaclrulespec)***||
| `status` | ***[NetworkACLRuleStatus](#networkaclrulestatus)***||
## NetworkACLRuleSpec

Appears on:[NetworkACLRule](#networkaclrule), [NetworkACLRuleStatus](#networkaclrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `cidrBlock` | ***string***| ***(Optional)*** |
| `egress` | ***bool***| ***(Optional)*** |
| `fromPort` | ***int64***| ***(Optional)*** |
| `icmpCode` | ***string***| ***(Optional)*** |
| `icmpType` | ***string***| ***(Optional)*** |
| `ipv6CIDRBlock` | ***string***| ***(Optional)*** |
| `networkACLID` | ***string***||
| `protocol` | ***string***||
| `ruleAction` | ***string***||
| `ruleNumber` | ***int64***||
| `toPort` | ***int64***| ***(Optional)*** |
## NetworkACLRuleStatus

Appears on:[NetworkACLRule](#networkaclrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkACLRuleSpec](#networkaclrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NetworkACLRuleStatus](#networkaclrulestatus)

---
