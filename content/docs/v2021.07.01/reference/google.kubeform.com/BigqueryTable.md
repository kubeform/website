---
title: BigqueryTable
menu:
  docs_v2021.07.01:
    identifier: bigquerytable-google.kubeform.com
    name: BigqueryTable
    parent: google.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## BigqueryTable
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `BigqueryTable` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[BigqueryTableSpec](#bigquerytablespec)***||
| `status` | ***[BigqueryTableStatus](#bigquerytablestatus)***||
## BigqueryTableSpec

Appears on:[BigqueryTable](#bigquerytable), [BigqueryTableStatus](#bigquerytablestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `clustering` | ***[]string***| ***(Optional)*** |
| `creationTime` | ***int64***| ***(Optional)*** |
| `datasetID` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `etag` | ***string***| ***(Optional)*** |
| `expirationTime` | ***int64***| ***(Optional)*** |
| `externalDataConfiguration` | ***[[]BigqueryTableSpecExternalDataConfiguration](#bigquerytablespecexternaldataconfiguration)***| ***(Optional)*** |
| `friendlyName` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `lastModifiedTime` | ***int64***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `numBytes` | ***int64***| ***(Optional)*** |
| `numLongTermBytes` | ***int64***| ***(Optional)*** |
| `numRows` | ***int64***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `schema` | ***string***| ***(Optional)*** |
| `selfLink` | ***string***| ***(Optional)*** |
| `tableID` | ***string***||
| `timePartitioning` | ***[[]BigqueryTableSpecTimePartitioning](#bigquerytablespectimepartitioning)***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
| `view` | ***[[]BigqueryTableSpecView](#bigquerytablespecview)***| ***(Optional)*** |
## BigqueryTableSpecExternalDataConfiguration

Appears on:[BigqueryTableSpec](#bigquerytablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `autodetect` | ***bool***||
| `compression` | ***string***| ***(Optional)*** |
| `csvOptions` | ***[[]BigqueryTableSpecExternalDataConfigurationCsvOptions](#bigquerytablespecexternaldataconfigurationcsvoptions)***| ***(Optional)*** |
| `googleSheetsOptions` | ***[[]BigqueryTableSpecExternalDataConfigurationGoogleSheetsOptions](#bigquerytablespecexternaldataconfigurationgooglesheetsoptions)***| ***(Optional)*** |
| `ignoreUnknownValues` | ***bool***| ***(Optional)*** |
| `maxBadRecords` | ***int64***| ***(Optional)*** |
| `sourceFormat` | ***string***||
| `sourceUris` | ***[]string***||
## BigqueryTableSpecExternalDataConfigurationCsvOptions

Appears on:[BigqueryTableSpecExternalDataConfiguration](#bigquerytablespecexternaldataconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowJaggedRows` | ***bool***| ***(Optional)*** |
| `allowQuotedNewlines` | ***bool***| ***(Optional)*** |
| `encoding` | ***string***| ***(Optional)*** |
| `fieldDelimiter` | ***string***| ***(Optional)*** |
| `quote` | ***string***||
| `skipLeadingRows` | ***int64***| ***(Optional)*** |
## BigqueryTableSpecExternalDataConfigurationGoogleSheetsOptions

Appears on:[BigqueryTableSpecExternalDataConfiguration](#bigquerytablespecexternaldataconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `skipLeadingRows` | ***int64***| ***(Optional)*** |
## BigqueryTableSpecTimePartitioning

Appears on:[BigqueryTableSpec](#bigquerytablespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `expirationMs` | ***int64***| ***(Optional)*** |
| `field` | ***string***| ***(Optional)*** |
| `requirePartitionFilter` | ***bool***| ***(Optional)*** |
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
