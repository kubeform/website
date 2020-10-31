---
title: DevTestLab
menu:
  docs_v2020.10.30:
    identifier: devtestlab-azurerm.kubeform.com
    name: DevTestLab
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## DevTestLab
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DevTestLab` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DevTestLabSpec](#devtestlabspec)***||
| `status` | ***[DevTestLabStatus](#devtestlabstatus)***||
## DevTestLabSpec

Appears on:[DevTestLab](#devtestlab), [DevTestLabStatus](#devtestlabstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `artifactsStorageAccountID` | ***string***| ***(Optional)*** |
| `defaultPremiumStorageAccountID` | ***string***| ***(Optional)*** |
| `defaultStorageAccountID` | ***string***| ***(Optional)*** |
| `keyVaultID` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `premiumDataDiskStorageAccountID` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `storageType` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `uniqueIdentifier` | ***string***| ***(Optional)*** |
## DevTestLabStatus

Appears on:[DevTestLab](#devtestlab)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DevTestLabSpec](#devtestlabspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DevTestLabStatus](#devtestlabstatus)

---
