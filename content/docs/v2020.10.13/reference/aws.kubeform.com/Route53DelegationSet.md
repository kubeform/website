---
title: Route53DelegationSet
menu:
  docs_v2020.10.13:
    identifier: route53delegationset-aws.kubeform.com
    name: Route53DelegationSet
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## Route53DelegationSet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Route53DelegationSet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Route53DelegationSetSpec](#route53delegationsetspec)***||
| `status` | ***[Route53DelegationSetStatus](#route53delegationsetstatus)***||
## Phase(`string` alias)

Appears on:[Route53DelegationSetStatus](#route53delegationsetstatus)

## Route53DelegationSetSpec

Appears on:[Route53DelegationSet](#route53delegationset), [Route53DelegationSetStatus](#route53delegationsetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `nameServers` | ***[]string***| ***(Optional)*** |
| `referenceName` | ***string***| ***(Optional)*** |
## Route53DelegationSetStatus

Appears on:[Route53DelegationSet](#route53delegationset)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Route53DelegationSetSpec](#route53delegationsetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
