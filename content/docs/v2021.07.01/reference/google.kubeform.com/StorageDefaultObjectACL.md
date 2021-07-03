---
title: StorageDefaultObjectACL
menu:
  docs_v2021.07.01:
    identifier: storagedefaultobjectacl-google.kubeform.com
    name: StorageDefaultObjectACL
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

## StorageDefaultObjectACL
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `StorageDefaultObjectACL` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StorageDefaultObjectACLSpec](#storagedefaultobjectaclspec)***||
| `status` | ***[StorageDefaultObjectACLStatus](#storagedefaultobjectaclstatus)***||
## Phase(`string` alias)

Appears on:[StorageDefaultObjectACLStatus](#storagedefaultobjectaclstatus)

## StorageDefaultObjectACLSpec

Appears on:[StorageDefaultObjectACL](#storagedefaultobjectacl), [StorageDefaultObjectACLStatus](#storagedefaultobjectaclstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bucket` | ***string***||
| `roleEntity` | ***[]string***| ***(Optional)*** |
## StorageDefaultObjectACLStatus

Appears on:[StorageDefaultObjectACL](#storagedefaultobjectacl)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StorageDefaultObjectACLSpec](#storagedefaultobjectaclspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
