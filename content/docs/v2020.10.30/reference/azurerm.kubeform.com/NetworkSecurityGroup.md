---
title: NetworkSecurityGroup
menu:
  docs_v2020.10.30:
    identifier: networksecuritygroup-azurerm.kubeform.com
    name: NetworkSecurityGroup
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## NetworkSecurityGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkSecurityGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkSecurityGroupSpec](#networksecuritygroupspec)***||
| `status` | ***[NetworkSecurityGroupStatus](#networksecuritygroupstatus)***||
## NetworkSecurityGroupSpec

Appears on:[NetworkSecurityGroup](#networksecuritygroup), [NetworkSecurityGroupStatus](#networksecuritygroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `securityRule` | ***[[]NetworkSecurityGroupSpecSecurityRule](#networksecuritygroupspecsecurityrule)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## NetworkSecurityGroupSpecSecurityRule

Appears on:[NetworkSecurityGroupSpec](#networksecuritygroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `access` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `destinationAddressPrefix` | ***string***| ***(Optional)*** |
| `destinationAddressPrefixes` | ***[]string***| ***(Optional)*** |
| `destinationApplicationSecurityGroupIDS` | ***[]string***| ***(Optional)*** |
| `destinationPortRange` | ***string***| ***(Optional)*** |
| `destinationPortRanges` | ***[]string***| ***(Optional)*** |
| `direction` | ***string***||
| `name` | ***string***||
| `priority` | ***int64***||
| `protocol` | ***string***||
| `sourceAddressPrefix` | ***string***| ***(Optional)*** |
| `sourceAddressPrefixes` | ***[]string***| ***(Optional)*** |
| `sourceApplicationSecurityGroupIDS` | ***[]string***| ***(Optional)*** |
| `sourcePortRange` | ***string***| ***(Optional)*** |
| `sourcePortRanges` | ***[]string***| ***(Optional)*** |
## NetworkSecurityGroupStatus

Appears on:[NetworkSecurityGroup](#networksecuritygroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkSecurityGroupSpec](#networksecuritygroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NetworkSecurityGroupStatus](#networksecuritygroupstatus)

---
