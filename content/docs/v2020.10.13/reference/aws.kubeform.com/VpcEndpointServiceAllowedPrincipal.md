---
title: VpcEndpointServiceAllowedPrincipal
menu:
  docs_v2020.10.13:
    identifier: vpcendpointserviceallowedprincipal-aws.kubeform.com
    name: VpcEndpointServiceAllowedPrincipal
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## VpcEndpointServiceAllowedPrincipal
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `VpcEndpointServiceAllowedPrincipal` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpcEndpointServiceAllowedPrincipalSpec](#vpcendpointserviceallowedprincipalspec)***||
| `status` | ***[VpcEndpointServiceAllowedPrincipalStatus](#vpcendpointserviceallowedprincipalstatus)***||
## Phase(`string` alias)

Appears on:[VpcEndpointServiceAllowedPrincipalStatus](#vpcendpointserviceallowedprincipalstatus)

## VpcEndpointServiceAllowedPrincipalSpec

Appears on:[VpcEndpointServiceAllowedPrincipal](#vpcendpointserviceallowedprincipal), [VpcEndpointServiceAllowedPrincipalStatus](#vpcendpointserviceallowedprincipalstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `principalArn` | ***string***||
| `vpcEndpointServiceID` | ***string***||
## VpcEndpointServiceAllowedPrincipalStatus

Appears on:[VpcEndpointServiceAllowedPrincipal](#vpcendpointserviceallowedprincipal)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpcEndpointServiceAllowedPrincipalSpec](#vpcendpointserviceallowedprincipalspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
