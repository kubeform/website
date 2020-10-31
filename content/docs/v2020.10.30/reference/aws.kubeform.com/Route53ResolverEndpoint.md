---
title: Route53ResolverEndpoint
menu:
  docs_v2020.10.30:
    identifier: route53resolverendpoint-aws.kubeform.com
    name: Route53ResolverEndpoint
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## Route53ResolverEndpoint
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Route53ResolverEndpoint` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Route53ResolverEndpointSpec](#route53resolverendpointspec)***||
| `status` | ***[Route53ResolverEndpointStatus](#route53resolverendpointstatus)***||
## Phase(`string` alias)

Appears on:[Route53ResolverEndpointStatus](#route53resolverendpointstatus)

## Route53ResolverEndpointSpec

Appears on:[Route53ResolverEndpoint](#route53resolverendpoint), [Route53ResolverEndpointStatus](#route53resolverendpointstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `direction` | ***string***||
| `hostVpcID` | ***string***| ***(Optional)*** |
| `ipAddress` | ***[[]Route53ResolverEndpointSpecIpAddress](#route53resolverendpointspecipaddress)***||
| `name` | ***string***| ***(Optional)*** |
| `securityGroupIDS` | ***[]string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## Route53ResolverEndpointSpecIpAddress

Appears on:[Route53ResolverEndpointSpec](#route53resolverendpointspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ip` | ***string***| ***(Optional)*** |
| `ipID` | ***string***| ***(Optional)*** |
| `subnetID` | ***string***||
## Route53ResolverEndpointStatus

Appears on:[Route53ResolverEndpoint](#route53resolverendpoint)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Route53ResolverEndpointSpec](#route53resolverendpointspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
