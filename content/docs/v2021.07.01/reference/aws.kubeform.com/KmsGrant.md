---
title: KmsGrant
menu:
  docs_v2021.07.01:
    identifier: kmsgrant-aws.kubeform.com
    name: KmsGrant
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

## KmsGrant
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `KmsGrant` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[KmsGrantSpec](#kmsgrantspec)***||
| `status` | ***[KmsGrantStatus](#kmsgrantstatus)***||
## KmsGrantSpec

Appears on:[KmsGrant](#kmsgrant), [KmsGrantStatus](#kmsgrantstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `constraints` | ***[[]KmsGrantSpecConstraints](#kmsgrantspecconstraints)***| ***(Optional)*** |
| `grantCreationTokens` | ***[]string***| ***(Optional)*** |
| `grantID` | ***string***| ***(Optional)*** |
| `grantToken` | ***string***| ***(Optional)*** |
| `granteePrincipal` | ***string***||
| `keyID` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `operations` | ***[]string***||
| `retireOnDelete` | ***bool***| ***(Optional)*** |
| `retiringPrincipal` | ***string***| ***(Optional)*** |
## KmsGrantSpecConstraints

Appears on:[KmsGrantSpec](#kmsgrantspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `encryptionContextEquals` | ***map[string]string***| ***(Optional)*** |
| `encryptionContextSubset` | ***map[string]string***| ***(Optional)*** |
## KmsGrantStatus

Appears on:[KmsGrant](#kmsgrant)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[KmsGrantSpec](#kmsgrantspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[KmsGrantStatus](#kmsgrantstatus)

---
