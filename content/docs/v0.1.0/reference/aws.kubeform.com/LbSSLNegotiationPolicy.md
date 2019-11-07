---
title: LbSSLNegotiationPolicy
menu:
  docs_v0.1.0:
    identifier: lbsslnegotiationpolicy-aws.kubeform.com
    name: LbSSLNegotiationPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## LbSSLNegotiationPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LbSSLNegotiationPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbSSLNegotiationPolicySpec](#lbsslnegotiationpolicyspec)***||
| `status` | ***[LbSSLNegotiationPolicyStatus](#lbsslnegotiationpolicystatus)***||
## LbSSLNegotiationPolicySpec

Appears on:[LbSSLNegotiationPolicy](#lbsslnegotiationpolicy), [LbSSLNegotiationPolicyStatus](#lbsslnegotiationpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `attribute` | ***[[]LbSSLNegotiationPolicySpecAttribute](#lbsslnegotiationpolicyspecattribute)***| ***(Optional)*** |
| `lbPort` | ***int***||
| `loadBalancer` | ***string***||
| `name` | ***string***||
## LbSSLNegotiationPolicySpecAttribute

Appears on:[LbSSLNegotiationPolicySpec](#lbsslnegotiationpolicyspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `value` | ***string***||
## LbSSLNegotiationPolicyStatus

Appears on:[LbSSLNegotiationPolicy](#lbsslnegotiationpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbSSLNegotiationPolicySpec](#lbsslnegotiationpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LbSSLNegotiationPolicyStatus](#lbsslnegotiationpolicystatus)

---
