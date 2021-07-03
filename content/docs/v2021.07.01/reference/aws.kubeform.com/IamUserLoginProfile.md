---
title: IamUserLoginProfile
menu:
  docs_v2021.07.01:
    identifier: iamuserloginprofile-aws.kubeform.com
    name: IamUserLoginProfile
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

## IamUserLoginProfile
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IamUserLoginProfile` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IamUserLoginProfileSpec](#iamuserloginprofilespec)***||
| `status` | ***[IamUserLoginProfileStatus](#iamuserloginprofilestatus)***||
## IamUserLoginProfileSpec

Appears on:[IamUserLoginProfile](#iamuserloginprofile), [IamUserLoginProfileStatus](#iamuserloginprofilestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `encryptedPassword` | ***string***| ***(Optional)*** |
| `keyFingerprint` | ***string***| ***(Optional)*** |
| `passwordLength` | ***int64***| ***(Optional)*** |
| `passwordResetRequired` | ***bool***| ***(Optional)*** |
| `pgpKey` | ***string***||
| `user` | ***string***||
## IamUserLoginProfileStatus

Appears on:[IamUserLoginProfile](#iamuserloginprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IamUserLoginProfileSpec](#iamuserloginprofilespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IamUserLoginProfileStatus](#iamuserloginprofilestatus)

---
