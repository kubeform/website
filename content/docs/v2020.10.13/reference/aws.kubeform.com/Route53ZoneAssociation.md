---
title: Route53ZoneAssociation
menu:
  docs_v2020.10.13:
    identifier: route53zoneassociation-aws.kubeform.com
    name: Route53ZoneAssociation
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## Route53ZoneAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Route53ZoneAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Route53ZoneAssociationSpec](#route53zoneassociationspec)***||
| `status` | ***[Route53ZoneAssociationStatus](#route53zoneassociationstatus)***||
## Phase(`string` alias)

Appears on:[Route53ZoneAssociationStatus](#route53zoneassociationstatus)

## Route53ZoneAssociationSpec

Appears on:[Route53ZoneAssociation](#route53zoneassociation), [Route53ZoneAssociationStatus](#route53zoneassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `vpcID` | ***string***||
| `vpcRegion` | ***string***| ***(Optional)*** |
| `zoneID` | ***string***||
## Route53ZoneAssociationStatus

Appears on:[Route53ZoneAssociation](#route53zoneassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Route53ZoneAssociationSpec](#route53zoneassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
