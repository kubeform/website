---
title: SesDomainIdentity
menu:
  docs_v2020.10.13:
    identifier: sesdomainidentity-aws.kubeform.com
    name: SesDomainIdentity
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## SesDomainIdentity
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SesDomainIdentity` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SesDomainIdentitySpec](#sesdomainidentityspec)***||
| `status` | ***[SesDomainIdentityStatus](#sesdomainidentitystatus)***||
## Phase(`string` alias)

Appears on:[SesDomainIdentityStatus](#sesdomainidentitystatus)

## SesDomainIdentitySpec

Appears on:[SesDomainIdentity](#sesdomainidentity), [SesDomainIdentityStatus](#sesdomainidentitystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `domain` | ***string***||
| `verificationToken` | ***string***| ***(Optional)*** |
## SesDomainIdentityStatus

Appears on:[SesDomainIdentity](#sesdomainidentity)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SesDomainIdentitySpec](#sesdomainidentityspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
