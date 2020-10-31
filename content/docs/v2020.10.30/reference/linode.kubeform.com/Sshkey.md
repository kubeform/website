---
title: Sshkey
menu:
  docs_v2020.10.30:
    identifier: sshkey-linode.kubeform.com
    name: Sshkey
    parent: linode.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## Sshkey
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `linode.kubeform.com/v1alpha1` |
|    `kind` | string | `Sshkey` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SshkeySpec](#sshkeyspec)***||
| `status` | ***[SshkeyStatus](#sshkeystatus)***||
## Phase(`string` alias)

Appears on:[SshkeyStatus](#sshkeystatus)

## SshkeySpec

Appears on:[Sshkey](#sshkey), [SshkeyStatus](#sshkeystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `created` | ***string***| ***(Optional)*** The date this key was added.|
| `label` | ***string***|The label of the Linode SSH Key.|
| `sshKey` | ***string***|The public SSH Key, which is used to authenticate to the root user of the Linodes you deploy.|
## SshkeyStatus

Appears on:[Sshkey](#sshkey)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SshkeySpec](#sshkeyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
