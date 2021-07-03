---
title: Certificate
menu:
  docs_v2021.07.01:
    identifier: certificate-digitalocean.kubeform.com
    name: Certificate
    parent: digitalocean.kubeform.com-reference
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

## Certificate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Certificate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CertificateSpec](#certificatespec)***||
| `status` | ***[CertificateStatus](#certificatestatus)***||
## CertificateSpec

Appears on:[Certificate](#certificate), [CertificateStatus](#certificatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `certificateChain` | ***string***| ***(Optional)*** |
| `domains` | ***[]string***| ***(Optional)*** |
| `leafCertificate` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `notAfter` | ***string***| ***(Optional)*** |
| `sha1Fingerprint` | ***string***| ***(Optional)*** |
| `state` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## CertificateStatus

Appears on:[Certificate](#certificate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CertificateSpec](#certificatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CertificateStatus](#certificatestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `private_key` | ***string*** ||
