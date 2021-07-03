---
title: Cdn
menu:
  docs_v2021.07.01:
    identifier: cdn-digitalocean.kubeform.com
    name: Cdn
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

## Cdn
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Cdn` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CdnSpec](#cdnspec)***||
| `status` | ***[CdnStatus](#cdnstatus)***||
## CdnSpec

Appears on:[Cdn](#cdn), [CdnStatus](#cdnstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `certificateID` | ***string***| ***(Optional)*** ID of a DigitalOcean managed TLS certificate for use with custom domains|
| `createdAt` | ***string***| ***(Optional)*** The date and time (ISO8601) of when the CDN endpoint was created.|
| `customDomain` | ***string***| ***(Optional)*** fully qualified domain name (FQDN) for custom subdomain, (requires certificate_id)|
| `endpoint` | ***string***| ***(Optional)*** fully qualified domain name (FQDN) to serve the CDN content|
| `origin` | ***string***|fully qualified domain name (FQDN) for the origin server|
| `ttl` | ***int64***| ***(Optional)*** The amount of time the content is cached in the CDN|
## CdnStatus

Appears on:[Cdn](#cdn)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CdnSpec](#cdnspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CdnStatus](#cdnstatus)

---
