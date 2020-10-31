---
title: MysqlServer
menu:
  docs_v2020.10.30:
    identifier: mysqlserver-azurerm.kubeform.com
    name: MysqlServer
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## MysqlServer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MysqlServer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MysqlServerSpec](#mysqlserverspec)***||
| `status` | ***[MysqlServerStatus](#mysqlserverstatus)***||
## MysqlServerSpec

Appears on:[MysqlServer](#mysqlserver), [MysqlServerStatus](#mysqlserverstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `administratorLogin` | ***string***||
| `fqdn` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `sku` | ***[[]MysqlServerSpecSku](#mysqlserverspecsku)***| ***(Optional)*** Deprecated|
| `skuName` | ***string***| ***(Optional)*** |
| `sslEnforcement` | ***string***||
| `storageProfile` | ***[[]MysqlServerSpecStorageProfile](#mysqlserverspecstorageprofile)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `version` | ***string***||
## MysqlServerSpecSku

Appears on:[MysqlServerSpec](#mysqlserverspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacity` | ***int64***||
| `family` | ***string***||
| `name` | ***string***||
| `tier` | ***string***||
## MysqlServerSpecStorageProfile

Appears on:[MysqlServerSpec](#mysqlserverspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `autoGrow` | ***string***| ***(Optional)*** |
| `backupRetentionDays` | ***int64***| ***(Optional)*** |
| `geoRedundantBackup` | ***string***| ***(Optional)*** |
| `storageMb` | ***int64***||
## MysqlServerStatus

Appears on:[MysqlServer](#mysqlserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MysqlServerSpec](#mysqlserverspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MysqlServerStatus](#mysqlserverstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `administrator_login_password` | ***string*** ||
