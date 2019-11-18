---
title: ComputeInterconnectAttachment
menu:
  docs_v0.1.0:
    identifier: computeinterconnectattachment-google.kubeform.com
    name: ComputeInterconnectAttachment
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ComputeInterconnectAttachment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `ComputeInterconnectAttachment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ComputeInterconnectAttachmentSpec](#computeinterconnectattachmentspec)***||
| `status` | ***[ComputeInterconnectAttachmentStatus](#computeinterconnectattachmentstatus)***||
## ComputeInterconnectAttachmentSpec

Appears on:[ComputeInterconnectAttachment](#computeinterconnectattachment), [ComputeInterconnectAttachmentStatus](#computeinterconnectattachmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `cloudRouterIPAddress` | ***string***| ***(Optional)*** |
| `creationTimestamp` | ***string***| ***(Optional)*** |
| `customerRouterIPAddress` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `googleReferenceID` | ***string***| ***(Optional)*** |
| `interconnect` | ***string***||
| `name` | ***string***||
| `privateInterconnectInfo` | ***[[]ComputeInterconnectAttachmentSpecPrivateInterconnectInfo](#computeinterconnectattachmentspecprivateinterconnectinfo)***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `router` | ***string***||
| `selfLink` | ***string***| ***(Optional)*** |
## ComputeInterconnectAttachmentSpecPrivateInterconnectInfo

Appears on:[ComputeInterconnectAttachmentSpec](#computeinterconnectattachmentspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `tag8021q` | ***int64***| ***(Optional)*** |
## ComputeInterconnectAttachmentStatus

Appears on:[ComputeInterconnectAttachment](#computeinterconnectattachment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ComputeInterconnectAttachmentSpec](#computeinterconnectattachmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ComputeInterconnectAttachmentStatus](#computeinterconnectattachmentstatus)

---
