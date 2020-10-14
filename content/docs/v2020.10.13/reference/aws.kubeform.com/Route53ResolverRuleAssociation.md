---
title: Route53ResolverRuleAssociation
menu:
  docs_v2020.10.13:
    identifier: route53resolverruleassociation-aws.kubeform.com
    name: Route53ResolverRuleAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## Route53ResolverRuleAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Route53ResolverRuleAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Route53ResolverRuleAssociationSpec](#route53resolverruleassociationspec)***||
| `status` | ***[Route53ResolverRuleAssociationStatus](#route53resolverruleassociationstatus)***||
## Phase(`string` alias)

Appears on:[Route53ResolverRuleAssociationStatus](#route53resolverruleassociationstatus)

## Route53ResolverRuleAssociationSpec

Appears on:[Route53ResolverRuleAssociation](#route53resolverruleassociation), [Route53ResolverRuleAssociationStatus](#route53resolverruleassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `resolverRuleID` | ***string***||
| `vpcID` | ***string***||
## Route53ResolverRuleAssociationStatus

Appears on:[Route53ResolverRuleAssociation](#route53resolverruleassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Route53ResolverRuleAssociationSpec](#route53resolverruleassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
