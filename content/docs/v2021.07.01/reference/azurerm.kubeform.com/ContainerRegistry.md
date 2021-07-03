---
title: ContainerRegistry
menu:
  docs_v2021.07.01:
    identifier: containerregistry-azurerm.kubeform.com
    name: ContainerRegistry
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

## ContainerRegistry
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ContainerRegistry` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ContainerRegistrySpec](#containerregistryspec)***||
| `status` | ***[ContainerRegistryStatus](#containerregistrystatus)***||
## ContainerRegistrySpec

Appears on:[ContainerRegistry](#containerregistry), [ContainerRegistryStatus](#containerregistrystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `adminEnabled` | ***bool***| ***(Optional)*** |
| `adminUsername` | ***string***| ***(Optional)*** |
| `georeplicationLocations` | ***[]string***| ***(Optional)*** |
| `location` | ***string***||
| `loginServer` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `networkRuleSet` | ***[[]ContainerRegistrySpecNetworkRuleSet](#containerregistryspecnetworkruleset)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `sku` | ***string***| ***(Optional)*** |
| `storageAccount` | ***[[]ContainerRegistrySpecStorageAccount](#containerregistryspecstorageaccount)***| ***(Optional)*** Deprecated|
| `storageAccountID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## ContainerRegistrySpecNetworkRuleSet

Appears on:[ContainerRegistrySpec](#containerregistryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `defaultAction` | ***string***| ***(Optional)*** |
| `ipRule` | ***[[]ContainerRegistrySpecNetworkRuleSetIpRule](#containerregistryspecnetworkrulesetiprule)***| ***(Optional)*** |
| `virtualNetwork` | ***[[]ContainerRegistrySpecNetworkRuleSetVirtualNetwork](#containerregistryspecnetworkrulesetvirtualnetwork)***| ***(Optional)*** |
## ContainerRegistrySpecNetworkRuleSetIpRule

Appears on:[ContainerRegistrySpecNetworkRuleSet](#containerregistryspecnetworkruleset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***string***||
| `ipRange` | ***string***||
## ContainerRegistrySpecNetworkRuleSetVirtualNetwork

Appears on:[ContainerRegistrySpecNetworkRuleSet](#containerregistryspecnetworkruleset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***string***||
| `subnetID` | ***string***||
## ContainerRegistrySpecStorageAccount

Appears on:[ContainerRegistrySpec](#containerregistryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
## ContainerRegistryStatus

Appears on:[ContainerRegistry](#containerregistry)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ContainerRegistrySpec](#containerregistryspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ContainerRegistryStatus](#containerregistrystatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `admin_password` | ***string*** ||
| `storage_account.<index>.access_key` | ***string*** ||
