---
title: ApiManagementCertificate
menu:
  docs_v2021.07.01:
    identifier: apimanagementcertificate-azurerm.kubeform.com
    name: ApiManagementCertificate
    parent: azurerm.kubeform.com-reference
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

## ApiManagementCertificate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementCertificate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementCertificateSpec](#apimanagementcertificatespec)***||
| `status` | ***[ApiManagementCertificateStatus](#apimanagementcertificatestatus)***||
## ApiManagementCertificateSpec

Appears on:[ApiManagementCertificate](#apimanagementcertificate), [ApiManagementCertificateStatus](#apimanagementcertificatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `apiManagementName` | ***string***||
| `expiration` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `subject` | ***string***| ***(Optional)*** |
| `thumbprint` | ***string***| ***(Optional)*** |
## ApiManagementCertificateStatus

Appears on:[ApiManagementCertificate](#apimanagementcertificate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementCertificateSpec](#apimanagementcertificatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementCertificateStatus](#apimanagementcertificatestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `data` | ***string*** ||
| `password` | ***string*** ||
