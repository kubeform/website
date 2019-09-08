---
title: ComputeAddress
menu:
  docs_v0.0.1:
    identifier: computeaddress-google.kubeform.com
    name: ComputeAddress
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## ComputeAddress
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeAddress` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeAddressSpec](#ComputeAddressSpec)***||
| `status` | ***[ComputeAddressStatus](#ComputeAddressStatus)***||
## ComputeAddressSpec
##### (Appears on:[ComputeAddress](#ComputeAddress), [ComputeAddressStatus](#ComputeAddressStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `address` | ***string***| ***(Optional)*** |
| `addressType` | ***string***| ***(Optional)*** |
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `labelFingerprint` | ***string***| ***(Optional)*** Deprecated|
| `labels` | ***map[string]string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `networkTier` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `subnetwork` | ***string***| ***(Optional)*** |
| `users` | ***[]string***| ***(Optional)*** |
## ComputeAddressStatus
##### (Appears on:[ComputeAddress](#ComputeAddress))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeAddressSpec](#ComputeAddressSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
