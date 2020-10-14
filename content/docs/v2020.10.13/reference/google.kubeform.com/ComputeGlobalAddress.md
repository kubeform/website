---
title: ComputeGlobalAddress
menu:
  docs_v2020.10.13:
    identifier: computeglobaladdress-google.kubeform.com
    name: ComputeGlobalAddress
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## ComputeGlobalAddress
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeGlobalAddress` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeGlobalAddressSpec](#computeglobaladdressspec)***||
| `status` | ***[ComputeGlobalAddressStatus](#computeglobaladdressstatus)***||
## ComputeGlobalAddressSpec

Appears on:[ComputeGlobalAddress](#computeglobaladdress), [ComputeGlobalAddressStatus](#computeglobaladdressstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `address` | ***string***| ***(Optional)*** |
| `addressType` | ***string***| ***(Optional)*** |
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `ipVersion` | ***string***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `network` | ***string***| ***(Optional)*** Deprecated|
| `prefixLength` | ***int64***| ***(Optional)*** Deprecated|
| `project` | ***string***| ***(Optional)*** |
| `purpose` | ***string***| ***(Optional)*** Deprecated|
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeGlobalAddressStatus

Appears on:[ComputeGlobalAddress](#computeglobaladdress)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeGlobalAddressSpec](#computeglobaladdressspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeGlobalAddressStatus](#computeglobaladdressstatus)

---
