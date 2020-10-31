---
title: BigqueryDataset
menu:
  docs_v2020.10.30:
    identifier: bigquerydataset-google.kubeform.com
    name: BigqueryDataset
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## BigqueryDataset
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `BigqueryDataset` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BigqueryDatasetSpec](#bigquerydatasetspec)***||
| `status` | ***[BigqueryDatasetStatus](#bigquerydatasetstatus)***||
## BigqueryDatasetSpec

Appears on:[BigqueryDataset](#bigquerydataset), [BigqueryDatasetStatus](#bigquerydatasetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `access` | ***[[]BigqueryDatasetSpecAccess](#bigquerydatasetspecaccess)***| ***(Optional)*** |
| `creationTime` | ***int64***| ***(Optional)*** |
| `datasetID` | ***string***||
| `defaultEncryptionConfiguration` | ***[[]BigqueryDatasetSpecDefaultEncryptionConfiguration](#bigquerydatasetspecdefaultencryptionconfiguration)***| ***(Optional)*** |
| `defaultPartitionExpirationMs` | ***int64***| ***(Optional)*** |
| `defaultTableExpirationMs` | ***int64***| ***(Optional)*** |
| `deleteContentsOnDestroy` | ***bool***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `etag` | ***string***| ***(Optional)*** |
| `friendlyName` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `lastModifiedTime` | ***int64***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
## BigqueryDatasetSpecAccess

Appears on:[BigqueryDatasetSpec](#bigquerydatasetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `domain` | ***string***| ***(Optional)*** |
| `groupByEmail` | ***string***| ***(Optional)*** |
| `role` | ***string***| ***(Optional)*** |
| `specialGroup` | ***string***| ***(Optional)*** |
| `userByEmail` | ***string***| ***(Optional)*** |
| `view` | ***[[]BigqueryDatasetSpecAccessView](#bigquerydatasetspecaccessview)***| ***(Optional)*** |
## BigqueryDatasetSpecAccessView

Appears on:[BigqueryDatasetSpecAccess](#bigquerydatasetspecaccess)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `datasetID` | ***string***||
| `projectID` | ***string***||
| `tableID` | ***string***||
## BigqueryDatasetSpecDefaultEncryptionConfiguration

Appears on:[BigqueryDatasetSpec](#bigquerydatasetspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `kmsKeyName` | ***string***||
## BigqueryDatasetStatus

Appears on:[BigqueryDataset](#bigquerydataset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[BigqueryDatasetSpec](#bigquerydatasetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[BigqueryDatasetStatus](#bigquerydatasetstatus)

---
