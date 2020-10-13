---
title: DataFactoryLinkedServiceSQLServer
menu:
  docs_v2020.10.13:
    identifier: datafactorylinkedservicesqlserver-azurerm.kubeform.com
    name: DataFactoryLinkedServiceSQLServer
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## DataFactoryLinkedServiceSQLServer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DataFactoryLinkedServiceSQLServer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataFactoryLinkedServiceSQLServerSpec](#datafactorylinkedservicesqlserverspec)***||
| `status` | ***[DataFactoryLinkedServiceSQLServerStatus](#datafactorylinkedservicesqlserverstatus)***||
## DataFactoryLinkedServiceSQLServerSpec

Appears on:[DataFactoryLinkedServiceSQLServer](#datafactorylinkedservicesqlserver), [DataFactoryLinkedServiceSQLServerStatus](#datafactorylinkedservicesqlserverstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `additionalProperties` | ***map[string]string***| ***(Optional)*** |
| `annotations` | ***[]string***| ***(Optional)*** |
| `connectionString` | ***string***||
| `dataFactoryName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `integrationRuntimeName` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
## DataFactoryLinkedServiceSQLServerStatus

Appears on:[DataFactoryLinkedServiceSQLServer](#datafactorylinkedservicesqlserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataFactoryLinkedServiceSQLServerSpec](#datafactorylinkedservicesqlserverspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DataFactoryLinkedServiceSQLServerStatus](#datafactorylinkedservicesqlserverstatus)

---
