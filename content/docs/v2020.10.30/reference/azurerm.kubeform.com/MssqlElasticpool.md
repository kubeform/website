---
title: MssqlElasticpool
menu:
  docs_v2020.10.30:
    identifier: mssqlelasticpool-azurerm.kubeform.com
    name: MssqlElasticpool
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## MssqlElasticpool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MssqlElasticpool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MssqlElasticpoolSpec](#mssqlelasticpoolspec)***||
| `status` | ***[MssqlElasticpoolStatus](#mssqlelasticpoolstatus)***||
## MssqlElasticpoolSpec

Appears on:[MssqlElasticpool](#mssqlelasticpool), [MssqlElasticpoolStatus](#mssqlelasticpoolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `elasticPoolProperties` | ***[[]MssqlElasticpoolSpecElasticPoolProperties](#mssqlelasticpoolspecelasticpoolproperties)***| ***(Optional)*** Deprecated|
| `location` | ***string***||
| `maxSizeBytes` | ***int64***| ***(Optional)*** |
| `maxSizeGb` | ***float64***| ***(Optional)*** |
| `name` | ***string***||
| `perDatabaseSettings` | ***[[]MssqlElasticpoolSpecPerDatabaseSettings](#mssqlelasticpoolspecperdatabasesettings)***||
| `resourceGroupName` | ***string***||
| `serverName` | ***string***||
| `sku` | ***[[]MssqlElasticpoolSpecSku](#mssqlelasticpoolspecsku)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `zoneRedundant` | ***bool***| ***(Optional)*** |
## MssqlElasticpoolSpecElasticPoolProperties

Appears on:[MssqlElasticpoolSpec](#mssqlelasticpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `creationDate` | ***string***| ***(Optional)*** Deprecated|
| `licenseType` | ***string***| ***(Optional)*** Deprecated|
| `maxSizeBytes` | ***int64***| ***(Optional)*** Deprecated|
| `state` | ***string***| ***(Optional)*** Deprecated|
| `zoneRedundant` | ***bool***| ***(Optional)*** Deprecated|
## MssqlElasticpoolSpecPerDatabaseSettings

Appears on:[MssqlElasticpoolSpec](#mssqlelasticpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxCapacity` | ***float64***||
| `minCapacity` | ***float64***||
## MssqlElasticpoolSpecSku

Appears on:[MssqlElasticpoolSpec](#mssqlelasticpoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacity` | ***int64***||
| `family` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `tier` | ***string***||
## MssqlElasticpoolStatus

Appears on:[MssqlElasticpool](#mssqlelasticpool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MssqlElasticpoolSpec](#mssqlelasticpoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MssqlElasticpoolStatus](#mssqlelasticpoolstatus)

---
