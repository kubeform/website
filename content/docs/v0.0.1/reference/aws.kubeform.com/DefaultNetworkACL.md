---
title: DefaultNetworkACL
menu:
  docs_v0.0.1:
    identifier: defaultnetworkacl-aws.kubeform.com
    name: DefaultNetworkACL
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DefaultNetworkACL
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DefaultNetworkACL` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DefaultNetworkACLSpec](#defaultnetworkaclspec)***||
| `status` | ***[DefaultNetworkACLStatus](#defaultnetworkaclstatus)***||
## DefaultNetworkACLSpec

Appears on:[DefaultNetworkACL](#defaultnetworkacl), [DefaultNetworkACLStatus](#defaultnetworkaclstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `defaultNetworkACLID` | ***string***||
| `egress` | ***[[]DefaultNetworkACLSpecEgress](#defaultnetworkaclspecegress)***| ***(Optional)*** |
| `ingress` | ***[[]DefaultNetworkACLSpecIngress](#defaultnetworkaclspecingress)***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `subnetIDS` | ***[]string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## DefaultNetworkACLSpecEgress

Appears on:[DefaultNetworkACLSpec](#defaultnetworkaclspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***string***||
| `cidrBlock` | ***string***| ***(Optional)*** |
| `fromPort` | ***int***||
| `icmpCode` | ***int***| ***(Optional)*** |
| `icmpType` | ***int***| ***(Optional)*** |
| `ipv6CIDRBlock` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
| `ruleNo` | ***int***||
| `toPort` | ***int***||
## DefaultNetworkACLSpecIngress

Appears on:[DefaultNetworkACLSpec](#defaultnetworkaclspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***string***||
| `cidrBlock` | ***string***| ***(Optional)*** |
| `fromPort` | ***int***||
| `icmpCode` | ***int***| ***(Optional)*** |
| `icmpType` | ***int***| ***(Optional)*** |
| `ipv6CIDRBlock` | ***string***| ***(Optional)*** |
| `protocol` | ***string***||
| `ruleNo` | ***int***||
| `toPort` | ***int***||
## DefaultNetworkACLStatus

Appears on:[DefaultNetworkACL](#defaultnetworkacl)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DefaultNetworkACLSpec](#defaultnetworkaclspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
