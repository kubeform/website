---
title: AppServiceSourceControlToken
menu:
  docs_v2021.07.01:
    identifier: appservicesourcecontroltoken-azurerm.kubeform.com
    name: AppServiceSourceControlToken
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

## AppServiceSourceControlToken
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AppServiceSourceControlToken` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppServiceSourceControlTokenSpec](#appservicesourcecontroltokenspec)***||
| `status` | ***[AppServiceSourceControlTokenStatus](#appservicesourcecontroltokenstatus)***||
## AppServiceSourceControlTokenSpec

Appears on:[AppServiceSourceControlToken](#appservicesourcecontroltoken), [AppServiceSourceControlTokenStatus](#appservicesourcecontroltokenstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `type` | ***string***||
## AppServiceSourceControlTokenStatus

Appears on:[AppServiceSourceControlToken](#appservicesourcecontroltoken)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppServiceSourceControlTokenSpec](#appservicesourcecontroltokenspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppServiceSourceControlTokenStatus](#appservicesourcecontroltokenstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `token` | ***string*** ||
| `token_secret` | ***string*** ||
