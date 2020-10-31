---
title: SnsSmsPreferences
menu:
  docs_v2020.10.30:
    identifier: snssmspreferences-aws.kubeform.com
    name: SnsSmsPreferences
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## SnsSmsPreferences
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SnsSmsPreferences` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SnsSmsPreferencesSpec](#snssmspreferencesspec)***||
| `status` | ***[SnsSmsPreferencesStatus](#snssmspreferencesstatus)***||
## Phase(`string` alias)

Appears on:[SnsSmsPreferencesStatus](#snssmspreferencesstatus)

## SnsSmsPreferencesSpec

Appears on:[SnsSmsPreferences](#snssmspreferences), [SnsSmsPreferencesStatus](#snssmspreferencesstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `defaultSenderID` | ***string***| ***(Optional)*** |
| `defaultSmsType` | ***string***| ***(Optional)*** |
| `deliveryStatusIamRoleArn` | ***string***| ***(Optional)*** |
| `deliveryStatusSuccessSamplingRate` | ***string***| ***(Optional)*** |
| `monthlySpendLimit` | ***string***| ***(Optional)*** |
| `usageReportS3Bucket` | ***string***| ***(Optional)*** |
## SnsSmsPreferencesStatus

Appears on:[SnsSmsPreferences](#snssmspreferences)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SnsSmsPreferencesSpec](#snssmspreferencesspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
