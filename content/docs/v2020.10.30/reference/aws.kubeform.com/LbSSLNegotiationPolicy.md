---
title: LbSSLNegotiationPolicy
menu:
  docs_v2020.10.30:
    identifier: lbsslnegotiationpolicy-aws.kubeform.com
    name: LbSSLNegotiationPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## LbSSLNegotiationPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `LbSSLNegotiationPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbSSLNegotiationPolicySpec](#lbsslnegotiationpolicyspec)***||
| `status` | ***[LbSSLNegotiationPolicyStatus](#lbsslnegotiationpolicystatus)***||
## LbSSLNegotiationPolicySpec

Appears on:[LbSSLNegotiationPolicy](#lbsslnegotiationpolicy), [LbSSLNegotiationPolicyStatus](#lbsslnegotiationpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `attribute` | ***[[]LbSSLNegotiationPolicySpecAttribute](#lbsslnegotiationpolicyspecattribute)***| ***(Optional)*** |
| `lbPort` | ***int64***||
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
