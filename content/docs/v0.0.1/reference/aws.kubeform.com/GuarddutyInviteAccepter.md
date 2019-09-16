---
title: GuarddutyInviteAccepter
menu:
  docs_v0.0.1:
    identifier: guarddutyinviteaccepter-aws.kubeform.com
    name: GuarddutyInviteAccepter
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## GuarddutyInviteAccepter
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GuarddutyInviteAccepter` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GuarddutyInviteAccepterSpec](#guarddutyinviteaccepterspec)***||
| `status` | ***[GuarddutyInviteAccepterStatus](#guarddutyinviteaccepterstatus)***||
## GuarddutyInviteAccepterSpec

Appears on:[GuarddutyInviteAccepter](#guarddutyinviteaccepter), [GuarddutyInviteAccepterStatus](#guarddutyinviteaccepterstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `detectorID` | ***string***||
| `masterAccountID` | ***string***||
## GuarddutyInviteAccepterStatus

Appears on:[GuarddutyInviteAccepter](#guarddutyinviteaccepter)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GuarddutyInviteAccepterSpec](#guarddutyinviteaccepterspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
