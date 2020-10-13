---
title: NetworkInterfaceApplicationSecurityGroupAssociation
menu:
  docs_v2020.10.13:
    identifier: networkinterfaceapplicationsecuritygroupassociation-azurerm.kubeform.com
    name: NetworkInterfaceApplicationSecurityGroupAssociation
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## NetworkInterfaceApplicationSecurityGroupAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkInterfaceApplicationSecurityGroupAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkInterfaceApplicationSecurityGroupAssociationSpec](#networkinterfaceapplicationsecuritygroupassociationspec)***||
| `status` | ***[NetworkInterfaceApplicationSecurityGroupAssociationStatus](#networkinterfaceapplicationsecuritygroupassociationstatus)***||
## NetworkInterfaceApplicationSecurityGroupAssociationSpec

Appears on:[NetworkInterfaceApplicationSecurityGroupAssociation](#networkinterfaceapplicationsecuritygroupassociation), [NetworkInterfaceApplicationSecurityGroupAssociationStatus](#networkinterfaceapplicationsecuritygroupassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `applicationSecurityGroupID` | ***string***||
| `ipConfigurationName` | ***string***||
| `networkInterfaceID` | ***string***||
## NetworkInterfaceApplicationSecurityGroupAssociationStatus

Appears on:[NetworkInterfaceApplicationSecurityGroupAssociation](#networkinterfaceapplicationsecuritygroupassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkInterfaceApplicationSecurityGroupAssociationSpec](#networkinterfaceapplicationsecuritygroupassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[NetworkInterfaceApplicationSecurityGroupAssociationStatus](#networkinterfaceapplicationsecuritygroupassociationstatus)

---
