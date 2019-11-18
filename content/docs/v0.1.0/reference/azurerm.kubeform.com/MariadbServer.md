---
title: MariadbServer
menu:
  docs_v0.1.0:
    identifier: mariadbserver-azurerm.kubeform.com
    name: MariadbServer
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## MariadbServer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `MariadbServer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MariadbServerSpec](#mariadbserverspec)***||
| `status` | ***[MariadbServerStatus](#mariadbserverstatus)***||
## MariadbServerSpec

Appears on:[MariadbServer](#mariadbserver), [MariadbServerStatus](#mariadbserverstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `administratorLogin` | ***string***||
| `fqdn` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `sku` | ***[[]MariadbServerSpecSku](#mariadbserverspecsku)***||
| `sslEnforcement` | ***string***||
| `storageProfile` | ***[[]MariadbServerSpecStorageProfile](#mariadbserverspecstorageprofile)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `version` | ***string***||
## MariadbServerSpecSku

Appears on:[MariadbServerSpec](#mariadbserverspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `capacity` | ***int64***||
| `family` | ***string***||
| `name` | ***string***||
| `tier` | ***string***||
## MariadbServerSpecStorageProfile

Appears on:[MariadbServerSpec](#mariadbserverspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `backupRetentionDays` | ***int64***| ***(Optional)*** |
| `geoRedundantBackup` | ***string***| ***(Optional)*** |
| `storageMb` | ***int64***||
## MariadbServerStatus

Appears on:[MariadbServer](#mariadbserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MariadbServerSpec](#mariadbserverspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MariadbServerStatus](#mariadbserverstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `administrator_login_password` | ***string*** ||
