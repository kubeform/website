---
title: ShieldProtection
menu:
  docs_v0.1.0:
    identifier: shieldprotection-aws.kubeform.com
    name: ShieldProtection
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ShieldProtection
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ShieldProtection` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ShieldProtectionSpec](#shieldprotectionspec)***||
| `status` | ***[ShieldProtectionStatus](#shieldprotectionstatus)***||
## ShieldProtectionSpec


Appears on:[ShieldProtection](#shieldprotection), [ShieldProtectionStatus](#shieldprotectionstatus)


| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
| `resourceArn` | ***string***||
## ShieldProtectionStatus


Appears on:[ShieldProtection](#shieldprotection)


| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ShieldProtectionSpec](#shieldprotectionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
