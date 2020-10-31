---
title: ApiManagementIdentityProviderFacebook
menu:
  docs_v2020.10.30:
    identifier: apimanagementidentityproviderfacebook-azurerm.kubeform.com
    name: ApiManagementIdentityProviderFacebook
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ApiManagementIdentityProviderFacebook
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementIdentityProviderFacebook` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementIdentityProviderFacebookSpec](#apimanagementidentityproviderfacebookspec)***||
| `status` | ***[ApiManagementIdentityProviderFacebookStatus](#apimanagementidentityproviderfacebookstatus)***||
## ApiManagementIdentityProviderFacebookSpec

Appears on:[ApiManagementIdentityProviderFacebook](#apimanagementidentityproviderfacebook), [ApiManagementIdentityProviderFacebookStatus](#apimanagementidentityproviderfacebookstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `apiManagementName` | ***string***||
| `appID` | ***string***||
| `resourceGroupName` | ***string***||
## ApiManagementIdentityProviderFacebookStatus

Appears on:[ApiManagementIdentityProviderFacebook](#apimanagementidentityproviderfacebook)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementIdentityProviderFacebookSpec](#apimanagementidentityproviderfacebookspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ApiManagementIdentityProviderFacebookStatus](#apimanagementidentityproviderfacebookstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `app_secret` | ***string*** ||
