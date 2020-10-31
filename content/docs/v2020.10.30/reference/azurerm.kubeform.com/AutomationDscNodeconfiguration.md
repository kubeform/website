---
title: AutomationDscNodeconfiguration
menu:
  docs_v2020.10.30:
    identifier: automationdscnodeconfiguration-azurerm.kubeform.com
    name: AutomationDscNodeconfiguration
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## AutomationDscNodeconfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AutomationDscNodeconfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AutomationDscNodeconfigurationSpec](#automationdscnodeconfigurationspec)***||
| `status` | ***[AutomationDscNodeconfigurationStatus](#automationdscnodeconfigurationstatus)***||
## AutomationDscNodeconfigurationSpec

Appears on:[AutomationDscNodeconfiguration](#automationdscnodeconfiguration), [AutomationDscNodeconfigurationStatus](#automationdscnodeconfigurationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `automationAccountName` | ***string***||
| `configurationName` | ***string***| ***(Optional)*** |
| `contentEmbedded` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
## AutomationDscNodeconfigurationStatus

Appears on:[AutomationDscNodeconfiguration](#automationdscnodeconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AutomationDscNodeconfigurationSpec](#automationdscnodeconfigurationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AutomationDscNodeconfigurationStatus](#automationdscnodeconfigurationstatus)

---
