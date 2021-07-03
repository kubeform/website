---
title: CosmosdbAccount
menu:
  docs_v2021.07.01:
    identifier: cosmosdbaccount-azurerm.kubeform.com
    name: CosmosdbAccount
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

## CosmosdbAccount
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `CosmosdbAccount` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CosmosdbAccountSpec](#cosmosdbaccountspec)***||
| `status` | ***[CosmosdbAccountStatus](#cosmosdbaccountstatus)***||
## CosmosdbAccountSpec

Appears on:[CosmosdbAccount](#cosmosdbaccount), [CosmosdbAccountStatus](#cosmosdbaccountstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `capabilities` | ***[[]CosmosdbAccountSpecCapabilities](#cosmosdbaccountspeccapabilities)***| ***(Optional)*** |
| `consistencyPolicy` | ***[[]CosmosdbAccountSpecConsistencyPolicy](#cosmosdbaccountspecconsistencypolicy)***| ***(Optional)*** |
| `enableAutomaticFailover` | ***bool***| ***(Optional)*** |
| `enableMultipleWriteLocations` | ***bool***| ***(Optional)*** |
| `endpoint` | ***string***| ***(Optional)*** |
| `failoverPolicy` | ***[[]CosmosdbAccountSpecFailoverPolicy](#cosmosdbaccountspecfailoverpolicy)***| ***(Optional)*** Deprecated|
| `geoLocation` | ***[[]CosmosdbAccountSpecGeoLocation](#cosmosdbaccountspecgeolocation)***| ***(Optional)*** |
| `ipRangeFilter` | ***string***| ***(Optional)*** |
| `isVirtualNetworkFilterEnabled` | ***bool***| ***(Optional)*** |
| `kind` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `offerType` | ***string***||
| `readEndpoints` | ***[]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `virtualNetworkRule` | ***[[]CosmosdbAccountSpecVirtualNetworkRule](#cosmosdbaccountspecvirtualnetworkrule)***| ***(Optional)*** |
| `writeEndpoints` | ***[]string***| ***(Optional)*** |
## CosmosdbAccountSpecCapabilities

Appears on:[CosmosdbAccountSpec](#cosmosdbaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
## CosmosdbAccountSpecConsistencyPolicy

Appears on:[CosmosdbAccountSpec](#cosmosdbaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `consistencyLevel` | ***string***||
| `maxIntervalInSeconds` | ***int64***| ***(Optional)*** |
| `maxStalenessPrefix` | ***int64***| ***(Optional)*** |
## CosmosdbAccountSpecFailoverPolicy

Appears on:[CosmosdbAccountSpec](#cosmosdbaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `priority` | ***int64***||
## CosmosdbAccountSpecGeoLocation

Appears on:[CosmosdbAccountSpec](#cosmosdbaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `failoverPriority` | ***int64***||
| `ID` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `prefix` | ***string***| ***(Optional)*** |
## CosmosdbAccountSpecVirtualNetworkRule

Appears on:[CosmosdbAccountSpec](#cosmosdbaccountspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***||
## CosmosdbAccountStatus

Appears on:[CosmosdbAccount](#cosmosdbaccount)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CosmosdbAccountSpec](#cosmosdbaccountspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CosmosdbAccountStatus](#cosmosdbaccountstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `primary_master_key` | ***string*** ||
| `primary_readonly_master_key` | ***string*** ||
| `secondary_master_key` | ***string*** ||
| `secondary_readonly_master_key` | ***string*** ||
