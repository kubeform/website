---
title: AcmCertificate
menu:
  docs_v2021.07.01:
    identifier: acmcertificate-aws.kubeform.com
    name: AcmCertificate
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

## AcmCertificate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AcmCertificate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AcmCertificateSpec](#acmcertificatespec)***||
| `status` | ***[AcmCertificateStatus](#acmcertificatestatus)***||
## AcmCertificateSpec

Appears on:[AcmCertificate](#acmcertificate), [AcmCertificateStatus](#acmcertificatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `certificateAuthorityArn` | ***string***| ***(Optional)*** |
| `certificateBody` | ***string***| ***(Optional)*** |
| `certificateChain` | ***string***| ***(Optional)*** |
| `domainName` | ***string***| ***(Optional)*** |
| `domainValidationOptions` | ***[[]AcmCertificateSpecDomainValidationOptions](#acmcertificatespecdomainvalidationoptions)***| ***(Optional)*** |
| `options` | ***[[]AcmCertificateSpecOptions](#acmcertificatespecoptions)***| ***(Optional)*** |
| `subjectAlternativeNames` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `validationEmails` | ***[]string***| ***(Optional)*** |
| `validationMethod` | ***string***| ***(Optional)*** |
## AcmCertificateSpecDomainValidationOptions

Appears on:[AcmCertificateSpec](#acmcertificatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `domainName` | ***string***| ***(Optional)*** |
| `resourceRecordName` | ***string***| ***(Optional)*** |
| `resourceRecordType` | ***string***| ***(Optional)*** |
| `resourceRecordValue` | ***string***| ***(Optional)*** |
## AcmCertificateSpecOptions

Appears on:[AcmCertificateSpec](#acmcertificatespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `certificateTransparencyLoggingPreference` | ***string***| ***(Optional)*** |
## AcmCertificateStatus

Appears on:[AcmCertificate](#acmcertificate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AcmCertificateSpec](#acmcertificatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AcmCertificateStatus](#acmcertificatestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `private_key` | ***string*** ||
