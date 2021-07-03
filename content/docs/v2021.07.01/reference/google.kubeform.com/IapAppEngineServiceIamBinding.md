---
title: IapAppEngineServiceIamBinding
menu:
  docs_v2021.07.01:
    identifier: iapappengineserviceiambinding-google.kubeform.com
    name: IapAppEngineServiceIamBinding
    parent: google.kubeform.com-reference
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

## IapAppEngineServiceIamBinding
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `IapAppEngineServiceIamBinding` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IapAppEngineServiceIamBindingSpec](#iapappengineserviceiambindingspec)***||
| `status` | ***[IapAppEngineServiceIamBindingStatus](#iapappengineserviceiambindingstatus)***||
## IapAppEngineServiceIamBindingSpec

Appears on:[IapAppEngineServiceIamBinding](#iapappengineserviceiambinding), [IapAppEngineServiceIamBindingStatus](#iapappengineserviceiambindingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `appID` | ***string***||
| `etag` | ***string***| ***(Optional)*** |
| `members` | ***[]string***||
| `project` | ***string***| ***(Optional)*** |
| `role` | ***string***||
| `service` | ***string***||
## IapAppEngineServiceIamBindingStatus

Appears on:[IapAppEngineServiceIamBinding](#iapappengineserviceiambinding)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IapAppEngineServiceIamBindingSpec](#iapappengineserviceiambindingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IapAppEngineServiceIamBindingStatus](#iapappengineserviceiambindingstatus)

---
