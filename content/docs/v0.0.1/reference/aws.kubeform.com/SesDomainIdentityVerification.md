---
title: SesDomainIdentityVerification
menu:
  docs_v0.0.1:
    identifier: sesdomainidentityverification-aws.kubeform.com
    name: SesDomainIdentityVerification
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SesDomainIdentityVerification
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SesDomainIdentityVerification` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SesDomainIdentityVerificationSpec](#sesdomainidentityverificationspec)***||
| `status` | ***[SesDomainIdentityVerificationStatus](#sesdomainidentityverificationstatus)***||
## SesDomainIdentityVerificationSpec

Appears on:[SesDomainIdentityVerification](#sesdomainidentityverification), [SesDomainIdentityVerificationStatus](#sesdomainidentityverificationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `domain` | ***string***||
## SesDomainIdentityVerificationStatus

Appears on:[SesDomainIdentityVerification](#sesdomainidentityverification)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SesDomainIdentityVerificationSpec](#sesdomainidentityverificationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
