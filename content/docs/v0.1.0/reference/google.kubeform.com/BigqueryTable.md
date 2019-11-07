---
title: BigqueryTable
menu:
  docs_v0.1.0:
    identifier: bigquerytable-google.kubeform.com
    name: BigqueryTable
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## BigqueryTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `BigqueryTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BigqueryTableSpec](#bigquerytablespec)***||
| `status` | ***[BigqueryTableStatus](#bigquerytablestatus)***||
## BigqueryTableSpec

Appears on:[BigqueryTable](#bigquerytable), [BigqueryTableStatus](#bigquerytablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `creationTime` | ***int***| ***(Optional)*** |
| `datasetID` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `etag` | ***string***| ***(Optional)*** |
| `expirationTime` | ***int***| ***(Optional)*** |
| `friendlyName` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `lastModifiedTime` | ***int***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `numBytes` | ***int***| ***(Optional)*** |
| `numLongTermBytes` | ***int***| ***(Optional)*** |
| `numRows` | ***int***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `schema` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `tableID` | ***string***||
| `timePartitioning` | ***[[]BigqueryTableSpecTimePartitioning](#bigquerytablespectimepartitioning)***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
| `view` | ***[[]BigqueryTableSpecView](#bigquerytablespecview)***| ***(Optional)*** |
## BigqueryTableSpecTimePartitioning

Appears on:[BigqueryTableSpec](#bigquerytablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `expirationMs` | ***int***| ***(Optional)*** |
| `field` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## BigqueryTableSpecView

Appears on:[BigqueryTableSpec](#bigquerytablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `query` | ***string***||
| `useLegacySQL` | ***bool***| ***(Optional)*** |
## BigqueryTableStatus

Appears on:[BigqueryTable](#bigquerytable)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BigqueryTableSpec](#bigquerytablespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[BigqueryTableStatus](#bigquerytablestatus)

---
