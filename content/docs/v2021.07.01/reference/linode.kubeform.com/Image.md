---
title: Image
menu:
  docs_v2021.07.01:
    identifier: image-linode.kubeform.com
    name: Image
    parent: linode.kubeform.com-reference
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

## Image
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `linode.kubeform.com/v1alpha1` |
|    `kind` | string | `Image` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ImageSpec](#imagespec)***||
| `status` | ***[ImageStatus](#imagestatus)***||
## ImageSpec

Appears on:[Image](#image), [ImageStatus](#imagestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `created` | ***string***| ***(Optional)*** When this Image was created.|
| `createdBy` | ***string***| ***(Optional)*** The name of the User who created this Image.|
| `deprecated` | ***bool***| ***(Optional)*** Whether or not this Image is deprecated. Will only be True for deprecated public Images.|
| `description` | ***string***| ***(Optional)*** A detailed description of this Image.|
| `diskID` | ***int64***|The ID of the Linode Disk that this Image will be created from.|
| `expiry` | ***string***| ***(Optional)*** Only Images created automatically (from a deleted Linode; type=automatic) will expire.|
| `isPublic` | ***bool***| ***(Optional)*** True if the Image is public.|
| `label` | ***string***|A short description of the Image. Labels cannot contain special characters.|
| `linodeID` | ***int64***|The ID of the Linode that this Image will be created from.|
| `size` | ***int64***| ***(Optional)*** The minimum size this Image needs to deploy. Size is in MB.|
| `type` | ***string***| ***(Optional)*** How the Image was created. 'Manual' Images can be created at any time. 'Automatic' images are created automatically from a deleted Linode.|
| `vendor` | ***string***| ***(Optional)*** The upstream distribution vendor. Nil for private Images.|
## ImageStatus

Appears on:[Image](#image)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ImageSpec](#imagespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ImageStatus](#imagestatus)

---
