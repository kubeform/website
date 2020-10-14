---
title: ServiceDiscoveryHTTPNamespace
menu:
  docs_v2020.10.13:
    identifier: servicediscoveryhttpnamespace-aws.kubeform.com
    name: ServiceDiscoveryHTTPNamespace
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## ServiceDiscoveryHTTPNamespace
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ServiceDiscoveryHTTPNamespace` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServiceDiscoveryHTTPNamespaceSpec](#servicediscoveryhttpnamespacespec)***||
| `status` | ***[ServiceDiscoveryHTTPNamespaceStatus](#servicediscoveryhttpnamespacestatus)***||
## Phase(`string` alias)

Appears on:[ServiceDiscoveryHTTPNamespaceStatus](#servicediscoveryhttpnamespacestatus)

## ServiceDiscoveryHTTPNamespaceSpec

Appears on:[ServiceDiscoveryHTTPNamespace](#servicediscoveryhttpnamespace), [ServiceDiscoveryHTTPNamespaceStatus](#servicediscoveryhttpnamespacestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
## ServiceDiscoveryHTTPNamespaceStatus

Appears on:[ServiceDiscoveryHTTPNamespace](#servicediscoveryhttpnamespace)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServiceDiscoveryHTTPNamespaceSpec](#servicediscoveryhttpnamespacespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
