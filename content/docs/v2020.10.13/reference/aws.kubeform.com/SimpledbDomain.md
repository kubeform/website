---
title: SimpledbDomain
menu:
  docs_v2020.10.13:
    identifier: simpledbdomain-aws.kubeform.com
    name: SimpledbDomain
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## SimpledbDomain
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SimpledbDomain` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SimpledbDomainSpec](#simpledbdomainspec)***||
| `status` | ***[SimpledbDomainStatus](#simpledbdomainstatus)***||
## Phase(`string` alias)

Appears on:[SimpledbDomainStatus](#simpledbdomainstatus)

## SimpledbDomainSpec

Appears on:[SimpledbDomain](#simpledbdomain), [SimpledbDomainStatus](#simpledbdomainstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `name` | ***string***||
## SimpledbDomainStatus

Appears on:[SimpledbDomain](#simpledbdomain)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SimpledbDomainSpec](#simpledbdomainspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
