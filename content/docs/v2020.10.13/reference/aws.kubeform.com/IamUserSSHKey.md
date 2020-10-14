---
title: IamUserSSHKey
menu:
  docs_v2020.10.13:
    identifier: iamusersshkey-aws.kubeform.com
    name: IamUserSSHKey
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## IamUserSSHKey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IamUserSSHKey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IamUserSSHKeySpec](#iamusersshkeyspec)***||
| `status` | ***[IamUserSSHKeyStatus](#iamusersshkeystatus)***||
## IamUserSSHKeySpec

Appears on:[IamUserSSHKey](#iamusersshkey), [IamUserSSHKeyStatus](#iamusersshkeystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `encoding` | ***string***||
| `fingerprint` | ***string***| ***(Optional)*** |
| `publicKey` | ***string***||
| `sshPublicKeyID` | ***string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `username` | ***string***||
## IamUserSSHKeyStatus

Appears on:[IamUserSSHKey](#iamusersshkey)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IamUserSSHKeySpec](#iamusersshkeyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IamUserSSHKeyStatus](#iamusersshkeystatus)

---
