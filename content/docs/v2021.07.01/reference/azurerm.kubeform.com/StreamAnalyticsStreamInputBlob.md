---
title: StreamAnalyticsStreamInputBlob
menu:
  docs_v2021.07.01:
    identifier: streamanalyticsstreaminputblob-azurerm.kubeform.com
    name: StreamAnalyticsStreamInputBlob
    parent: azurerm.kubeform.com-reference
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

## StreamAnalyticsStreamInputBlob
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `StreamAnalyticsStreamInputBlob` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[StreamAnalyticsStreamInputBlobSpec](#streamanalyticsstreaminputblobspec)***||
| `status` | ***[StreamAnalyticsStreamInputBlobStatus](#streamanalyticsstreaminputblobstatus)***||
## Phase(`string` alias)

Appears on:[StreamAnalyticsStreamInputBlobStatus](#streamanalyticsstreaminputblobstatus)

## StreamAnalyticsStreamInputBlobSpec

Appears on:[StreamAnalyticsStreamInputBlob](#streamanalyticsstreaminputblob), [StreamAnalyticsStreamInputBlobStatus](#streamanalyticsstreaminputblobstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `dateFormat` | ***string***||
| `name` | ***string***||
| `pathPattern` | ***string***||
| `resourceGroupName` | ***string***||
| `serialization` | ***[[]StreamAnalyticsStreamInputBlobSpecSerialization](#streamanalyticsstreaminputblobspecserialization)***||
| `storageAccountName` | ***string***||
| `storageContainerName` | ***string***||
| `streamAnalyticsJobName` | ***string***||
| `timeFormat` | ***string***||
## StreamAnalyticsStreamInputBlobSpecSerialization

Appears on:[StreamAnalyticsStreamInputBlobSpec](#streamanalyticsstreaminputblobspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `encoding` | ***string***| ***(Optional)*** |
| `fieldDelimiter` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## StreamAnalyticsStreamInputBlobStatus

Appears on:[StreamAnalyticsStreamInputBlob](#streamanalyticsstreaminputblob)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[StreamAnalyticsStreamInputBlobSpec](#streamanalyticsstreaminputblobspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `storage_account_key` | ***string*** ||
