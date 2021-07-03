---
title: IamAccessKey
menu:
  docs_v2021.07.01:
    identifier: iamaccesskey-aws.kubeform.com
    name: IamAccessKey
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

## IamAccessKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IamAccessKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IamAccessKeySpec](#iamaccesskeyspec)***||
| `status` | ***[IamAccessKeyStatus](#iamaccesskeystatus)***||
## IamAccessKeySpec

Appears on:[IamAccessKey](#iamaccesskey), [IamAccessKeyStatus](#iamaccesskeystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `encryptedSecret` | ***string***| ***(Optional)*** |
| `keyFingerprint` | ***string***| ***(Optional)*** |
| `pgpKey` | ***string***| ***(Optional)*** |
| `secret` | ***string***| ***(Optional)*** Deprecated|
| `sesSMTPPassword` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `user` | ***string***||
## IamAccessKeyStatus

Appears on:[IamAccessKey](#iamaccesskey)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IamAccessKeySpec](#iamaccesskeyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IamAccessKeyStatus](#iamaccesskeystatus)

---
