---
title: DefaultSubnet
menu:
  docs_v2021.07.01:
    identifier: defaultsubnet-aws.kubeform.com
    name: DefaultSubnet
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

## DefaultSubnet
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DefaultSubnet` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DefaultSubnetSpec](#defaultsubnetspec)***||
| `status` | ***[DefaultSubnetStatus](#defaultsubnetstatus)***||
## DefaultSubnetSpec

Appears on:[DefaultSubnet](#defaultsubnet), [DefaultSubnetStatus](#defaultsubnetstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
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
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DefaultSubnetStatus](#defaultsubnetstatus)

---
