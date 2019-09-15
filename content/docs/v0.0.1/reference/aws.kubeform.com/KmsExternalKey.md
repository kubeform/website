---
title: KmsExternalKey
menu:
  docs_v0.0.1:
    identifier: kmsexternalkey-aws.kubeform.com
    name: KmsExternalKey
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## KmsExternalKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `KmsExternalKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[KmsExternalKeySpec](#KmsExternalKeySpec)***||
| `status` | ***[KmsExternalKeyStatus](#KmsExternalKeyStatus)***||
## KmsExternalKeySpec
##### (Appears on:[KmsExternalKey](#KmsExternalKey), [KmsExternalKeyStatus](#KmsExternalKeyStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `deletionWindowInDays` | ***int***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `expirationModel` | ***string***| ***(Optional)*** |
| `keyState` | ***string***| ***(Optional)*** |
| `keyUsage` | ***string***| ***(Optional)*** |
| `policy` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `validTo` | ***string***| ***(Optional)*** |
## KmsExternalKeyStatus
##### (Appears on:[KmsExternalKey](#KmsExternalKey))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[KmsExternalKeySpec](#KmsExternalKeySpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `key_material_base64` | ***string*** ||
