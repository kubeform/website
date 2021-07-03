---
title: MediaPackageChannel
menu:
  docs_v2021.07.01:
    identifier: mediapackagechannel-aws.kubeform.com
    name: MediaPackageChannel
    parent: aws.kubeform.com-reference
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

## MediaPackageChannel
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `MediaPackageChannel` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MediaPackageChannelSpec](#mediapackagechannelspec)***||
| `status` | ***[MediaPackageChannelStatus](#mediapackagechannelstatus)***||
## MediaPackageChannelSpec

Appears on:[MediaPackageChannel](#mediapackagechannel), [MediaPackageChannelStatus](#mediapackagechannelstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `channelID` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `hlsIngest` | ***[[]MediaPackageChannelSpecHlsIngest](#mediapackagechannelspechlsingest)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## MediaPackageChannelSpecHlsIngest

Appears on:[MediaPackageChannelSpec](#mediapackagechannelspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ingestEndpoints` | ***[[]MediaPackageChannelSpecHlsIngestIngestEndpoints](#mediapackagechannelspechlsingestingestendpoints)***| ***(Optional)*** |
## MediaPackageChannelSpecHlsIngestIngestEndpoints

Appears on:[MediaPackageChannelSpecHlsIngest](#mediapackagechannelspechlsingest)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `url` | ***string***| ***(Optional)*** |
| `username` | ***string***| ***(Optional)*** |
## MediaPackageChannelStatus

Appears on:[MediaPackageChannel](#mediapackagechannel)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MediaPackageChannelSpec](#mediapackagechannelspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MediaPackageChannelStatus](#mediapackagechannelstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `hls_ingest.<index>.ingest_endpoints.<index>.password` | ***string*** ||
