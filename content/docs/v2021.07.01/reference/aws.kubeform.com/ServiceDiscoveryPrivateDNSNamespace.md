---
title: ServiceDiscoveryPrivateDNSNamespace
menu:
  docs_v2021.07.01:
    identifier: servicediscoveryprivatednsnamespace-aws.kubeform.com
    name: ServiceDiscoveryPrivateDNSNamespace
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

## ServiceDiscoveryPrivateDNSNamespace
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ServiceDiscoveryPrivateDNSNamespace` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServiceDiscoveryPrivateDNSNamespaceSpec](#servicediscoveryprivatednsnamespacespec)***||
| `status` | ***[ServiceDiscoveryPrivateDNSNamespaceStatus](#servicediscoveryprivatednsnamespacestatus)***||
## Phase(`string` alias)

Appears on:[ServiceDiscoveryPrivateDNSNamespaceStatus](#servicediscoveryprivatednsnamespacestatus)

## ServiceDiscoveryPrivateDNSNamespaceSpec

Appears on:[ServiceDiscoveryPrivateDNSNamespace](#servicediscoveryprivatednsnamespace), [ServiceDiscoveryPrivateDNSNamespaceStatus](#servicediscoveryprivatednsnamespacestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `hostedZone` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `vpc` | ***string***||
## ServiceDiscoveryPrivateDNSNamespaceStatus

Appears on:[ServiceDiscoveryPrivateDNSNamespace](#servicediscoveryprivatednsnamespace)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServiceDiscoveryPrivateDNSNamespaceSpec](#servicediscoveryprivatednsnamespacespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
