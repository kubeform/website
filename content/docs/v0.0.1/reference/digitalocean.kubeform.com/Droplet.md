---
title: Droplet
menu:
  docs_v0.0.1:
    identifier: droplet-digitalocean.kubeform.com
    name: Droplet
    parent: digitalocean.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## Droplet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `digitalocean.kubeform.com/v1alpha1` |
|    `kind` | string | `Droplet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DropletSpec](#dropletspec)***||
| `status` | ***[DropletStatus](#dropletstatus)***||
## DropletSpec

Appears on:[Droplet](#droplet), [DropletStatus](#dropletstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backups` | ***bool***| ***(Optional)*** |
| `disk` | ***int***| ***(Optional)*** |
| `image` | ***string***||
| `ipv4Address` | ***string***| ***(Optional)*** |
| `ipv4AddressPrivate` | ***string***| ***(Optional)*** |
| `ipv6` | ***bool***| ***(Optional)*** |
| `ipv6Address` | ***string***| ***(Optional)*** |
| `locked` | ***bool***| ***(Optional)*** |
| `memory` | ***int***| ***(Optional)*** |
| `monitoring` | ***bool***| ***(Optional)*** |
| `name` | ***string***||
| `priceHourly` | ***encoding/json.Number***| ***(Optional)*** |
| `priceMonthly` | ***encoding/json.Number***| ***(Optional)*** |
| `privateNetworking` | ***bool***| ***(Optional)*** |
| `region` | ***string***||
| `resizeDisk` | ***bool***| ***(Optional)*** |
| `size` | ***string***||
| `sshKeys` | ***[]string***| ***(Optional)*** |
| `status` | ***string***| ***(Optional)*** |
| `tags` | ***[]string***| ***(Optional)*** |
| `urn` | ***string***| ***(Optional)*** |
| `userData` | ***string***| ***(Optional)*** |
| `vcpus` | ***int***| ***(Optional)*** |
| `volumeIDS` | ***[]string***| ***(Optional)*** |
## DropletStatus

Appears on:[Droplet](#droplet)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DropletSpec](#dropletspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
