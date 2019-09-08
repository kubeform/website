---
title: PublicIPPrefix
menu:
  docs_v0.0.1:
    identifier: publicipprefix-azurerm.kubeform.com
    name: PublicIPPrefix
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## PublicIPPrefix
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PublicIPPrefix` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PublicIPPrefixSpec](#PublicIPPrefixSpec)***||
| `status` | ***[PublicIPPrefixStatus](#PublicIPPrefixStatus)***||
## PublicIPPrefixSpec
##### (Appears on:[PublicIPPrefix](#PublicIPPrefix), [PublicIPPrefixStatus](#PublicIPPrefixStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `ipPrefix` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `prefixLength` | ***int***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `sku` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `zones` | ***[]string***| ***(Optional)*** |
## PublicIPPrefixStatus
##### (Appears on:[PublicIPPrefix](#PublicIPPrefix))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PublicIPPrefixSpec](#PublicIPPrefixSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---