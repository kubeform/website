---
title: DataFactoryLinkedServiceDataLakeStorageGen2
menu:
  docs_v2020.10.13:
    identifier: datafactorylinkedservicedatalakestoragegen2-azurerm.kubeform.com
    name: DataFactoryLinkedServiceDataLakeStorageGen2
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## DataFactoryLinkedServiceDataLakeStorageGen2
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DataFactoryLinkedServiceDataLakeStorageGen2` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataFactoryLinkedServiceDataLakeStorageGen2Spec](#datafactorylinkedservicedatalakestoragegen2spec)***||
| `status` | ***[DataFactoryLinkedServiceDataLakeStorageGen2Status](#datafactorylinkedservicedatalakestoragegen2status)***||
## DataFactoryLinkedServiceDataLakeStorageGen2Spec

Appears on:[DataFactoryLinkedServiceDataLakeStorageGen2](#datafactorylinkedservicedatalakestoragegen2), [DataFactoryLinkedServiceDataLakeStorageGen2Status](#datafactorylinkedservicedatalakestoragegen2status)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `additionalProperties` | ***map[string]string***| ***(Optional)*** |
| `annotations` | ***[]string***| ***(Optional)*** |
| `dataFactoryName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `integrationRuntimeName` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parameters` | ***map[string]string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `servicePrincipalID` | ***string***||
| `servicePrincipalKey` | ***string***||
| `tenant` | ***string***||
| `url` | ***string***||
## DataFactoryLinkedServiceDataLakeStorageGen2Status

Appears on:[DataFactoryLinkedServiceDataLakeStorageGen2](#datafactorylinkedservicedatalakestoragegen2)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataFactoryLinkedServiceDataLakeStorageGen2Spec](#datafactorylinkedservicedatalakestoragegen2spec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DataFactoryLinkedServiceDataLakeStorageGen2Status](#datafactorylinkedservicedatalakestoragegen2status)

---
