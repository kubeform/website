---
title: DefaultSecurityGroup
menu:
  docs_v0.0.1:
    identifier: defaultsecuritygroup-aws.kubeform.com
    name: DefaultSecurityGroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DefaultSecurityGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DefaultSecurityGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DefaultSecurityGroupSpec](#defaultsecuritygroupspec)***||
| `status` | ***[DefaultSecurityGroupStatus](#defaultsecuritygroupstatus)***||
## DefaultSecurityGroupSpec

Appears on:[DefaultSecurityGroup](#defaultsecuritygroup), [DefaultSecurityGroupStatus](#defaultsecuritygroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `egress` | ***[[]DefaultSecurityGroupSpecEgress](#defaultsecuritygroupspecegress)***| ***(Optional)*** |
| `ingress` | ***[[]DefaultSecurityGroupSpecIngress](#defaultsecuritygroupspecingress)***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `ownerID` | ***string***| ***(Optional)*** |
| `revokeRulesOnDelete` | ***bool***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpcID` | ***string***| ***(Optional)*** |
## DefaultSecurityGroupSpecEgress

Appears on:[DefaultSecurityGroupSpec](#defaultsecuritygroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cidrBlocks` | ***[]string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `fromPort` | ***int***||
| `ipv6CIDRBlocks` | ***[]string***| ***(Optional)*** |
| `prefixListIDS` | ***[]string***| ***(Optional)*** |
| `protocol` | ***string***||
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `self` | ***bool***| ***(Optional)*** |
| `toPort` | ***int***||
## DefaultSecurityGroupSpecIngress

Appears on:[DefaultSecurityGroupSpec](#defaultsecuritygroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `cidrBlocks` | ***[]string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `fromPort` | ***int***||
| `ipv6CIDRBlocks` | ***[]string***| ***(Optional)*** |
| `prefixListIDS` | ***[]string***| ***(Optional)*** |
| `protocol` | ***string***||
| `securityGroups` | ***[]string***| ***(Optional)*** |
| `self` | ***bool***| ***(Optional)*** |
| `toPort` | ***int***||
## DefaultSecurityGroupStatus

Appears on:[DefaultSecurityGroup](#defaultsecuritygroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DefaultSecurityGroupSpec](#defaultsecuritygroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---