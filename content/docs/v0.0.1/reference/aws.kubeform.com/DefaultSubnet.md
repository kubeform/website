---
title: DefaultSubnet
menu:
  docs_v0.0.1:
    identifier: defaultsubnet-aws.kubeform.com
    name: DefaultSubnet
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DefaultSubnet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DefaultSubnet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DefaultSubnetSpec](#defaultsubnetspec)***||
| `status` | ***[DefaultSubnetStatus](#defaultsubnetstatus)***||
## DefaultSubnetSpec

Appears on:[DefaultSubnet](#defaultsubnet), [DefaultSubnetStatus](#defaultsubnetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `assignIpv6AddressOnCreation` | ***bool***| ***(Optional)*** |
| `availabilityZone` | ***string***||
| `availabilityZoneID` | ***string***| ***(Optional)*** |
| `cidrBlock` | ***string***| ***(Optional)*** |
| `ipv6CIDRBlock` | ***string***| ***(Optional)*** |
| `ipv6CIDRBlockAssociationID` | ***string***| ***(Optional)*** |
| `mapPublicIPOnLaunch` | ***bool***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## DefaultSubnetStatus

Appears on:[DefaultSubnet](#defaultsubnet)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DefaultSubnetSpec](#defaultsubnetspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
