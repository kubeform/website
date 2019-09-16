---
title: GlueCatalogDatabase
menu:
  docs_v0.0.1:
    identifier: gluecatalogdatabase-aws.kubeform.com
    name: GlueCatalogDatabase
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## GlueCatalogDatabase
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GlueCatalogDatabase` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GlueCatalogDatabaseSpec](#gluecatalogdatabasespec)***||
| `status` | ***[GlueCatalogDatabaseStatus](#gluecatalogdatabasestatus)***||
## GlueCatalogDatabaseSpec

Appears on:[GlueCatalogDatabase](#gluecatalogdatabase), [GlueCatalogDatabaseStatus](#gluecatalogdatabasestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `catalogID` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `locationURI` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `parameters` | ***map[string]string***| ***(Optional)*** |
## GlueCatalogDatabaseStatus

Appears on:[GlueCatalogDatabase](#gluecatalogdatabase)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GlueCatalogDatabaseSpec](#gluecatalogdatabasespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
