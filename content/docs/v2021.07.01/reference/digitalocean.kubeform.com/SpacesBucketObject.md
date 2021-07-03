---
title: SpacesBucketObject
menu:
  docs_v2021.07.01:
    identifier: spacesbucketobject-digitalocean.kubeform.com
    name: SpacesBucketObject
    parent: digitalocean.kubeform.com-reference
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

## SpacesBucketObject
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `SpacesBucketObject` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SpacesBucketObjectSpec](#spacesbucketobjectspec)***||
| `status` | ***[SpacesBucketObjectStatus](#spacesbucketobjectstatus)***||
## Phase(`string` alias)

Appears on:[SpacesBucketObjectStatus](#spacesbucketobjectstatus)

## SpacesBucketObjectSpec

Appears on:[SpacesBucketObject](#spacesbucketobject), [SpacesBucketObjectStatus](#spacesbucketobjectstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `acl` | ***string***| ***(Optional)*** |
| `bucket` | ***string***||
| `cacheControl` | ***string***| ***(Optional)*** |
| `content` | ***string***| ***(Optional)*** |
| `contentBase64` | ***string***| ***(Optional)*** |
| `contentDisposition` | ***string***| ***(Optional)*** |
| `contentEncoding` | ***string***| ***(Optional)*** |
| `contentLanguage` | ***string***| ***(Optional)*** |
| `contentType` | ***string***| ***(Optional)*** |
| `etag` | ***string***| ***(Optional)*** |
| `forceDestroy` | ***bool***| ***(Optional)*** |
| `key` | ***string***||
| `metadata` | ***map[string]string***| ***(Optional)*** |
| `region` | ***string***||
| `source` | ***string***| ***(Optional)*** |
| `versionID` | ***string***| ***(Optional)*** |
| `websiteRedirect` | ***string***| ***(Optional)*** |
## SpacesBucketObjectStatus

Appears on:[SpacesBucketObject](#spacesbucketobject)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SpacesBucketObjectSpec](#spacesbucketobjectspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
