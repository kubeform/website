---
title: IamUserLoginProfile
menu:
  docs_v0.0.1:
    identifier: iamuserloginprofile-aws.kubeform.com
    name: IamUserLoginProfile
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## IamUserLoginProfile
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IamUserLoginProfile` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IamUserLoginProfileSpec](#IamUserLoginProfileSpec)***||
| `status` | ***[IamUserLoginProfileStatus](#IamUserLoginProfileStatus)***||
## IamUserLoginProfileSpec
##### (Appears on:[IamUserLoginProfile](#IamUserLoginProfile), [IamUserLoginProfileStatus](#IamUserLoginProfileStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `encryptedPassword` | ***string***| ***(Optional)*** |
| `keyFingerprint` | ***string***| ***(Optional)*** |
| `passwordLength` | ***int***| ***(Optional)*** |
| `passwordResetRequired` | ***bool***| ***(Optional)*** |
| `pgpKey` | ***string***||
| `user` | ***string***||
## IamUserLoginProfileStatus
##### (Appears on:[IamUserLoginProfile](#IamUserLoginProfile))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IamUserLoginProfileSpec](#IamUserLoginProfileSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
