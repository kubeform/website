---
title: AlbTargetGroupAttachment
menu:
  docs_v2021.07.01:
    identifier: albtargetgroupattachment-aws.kubeform.com
    name: AlbTargetGroupAttachment
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## AlbTargetGroupAttachment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AlbTargetGroupAttachment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AlbTargetGroupAttachmentSpec](#albtargetgroupattachmentspec)***||
| `status` | ***[AlbTargetGroupAttachmentStatus](#albtargetgroupattachmentstatus)***||
## AlbTargetGroupAttachmentSpec

Appears on:[AlbTargetGroupAttachment](#albtargetgroupattachment), [AlbTargetGroupAttachmentStatus](#albtargetgroupattachmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `availabilityZone` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `targetGroupArn` | ***string***||
| `targetID` | ***string***||
## AlbTargetGroupAttachmentStatus

Appears on:[AlbTargetGroupAttachment](#albtargetgroupattachment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AlbTargetGroupAttachmentSpec](#albtargetgroupattachmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AlbTargetGroupAttachmentStatus](#albtargetgroupattachmentstatus)

---
