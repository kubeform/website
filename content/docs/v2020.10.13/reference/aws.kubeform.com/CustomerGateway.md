---
title: CustomerGateway
menu:
  docs_v2020.10.13:
    identifier: customergateway-aws.kubeform.com
    name: CustomerGateway
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## CustomerGateway
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CustomerGateway` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CustomerGatewaySpec](#customergatewayspec)***||
| `status` | ***[CustomerGatewayStatus](#customergatewaystatus)***||
## CustomerGatewaySpec

Appears on:[CustomerGateway](#customergateway), [CustomerGatewayStatus](#customergatewaystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `bgpAsn` | ***int64***||
| `ipAddress` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `type` | ***string***||
## CustomerGatewayStatus

Appears on:[CustomerGateway](#customergateway)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CustomerGatewaySpec](#customergatewayspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CustomerGatewayStatus](#customergatewaystatus)

---
