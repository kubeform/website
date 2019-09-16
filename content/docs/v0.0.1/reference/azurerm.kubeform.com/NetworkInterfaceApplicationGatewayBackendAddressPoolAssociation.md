---
title: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation
menu:
  docs_v0.0.1:
    identifier: networkinterfaceapplicationgatewaybackendaddresspoolassociation-azurerm.kubeform.com
    name: NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationSpec](#networkinterfaceapplicationgatewaybackendaddresspoolassociationspec)***||
| `status` | ***[NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationStatus](#networkinterfaceapplicationgatewaybackendaddresspoolassociationstatus)***||
## NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationSpec

Appears on:[NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation](#networkinterfaceapplicationgatewaybackendaddresspoolassociation), [NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationStatus](#networkinterfaceapplicationgatewaybackendaddresspoolassociationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `backendAddressPoolID` | ***string***||
| `ipConfigurationName` | ***string***||
| `networkInterfaceID` | ***string***||
## NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationStatus

Appears on:[NetworkInterfaceApplicationGatewayBackendAddressPoolAssociation](#networkinterfaceapplicationgatewaybackendaddresspoolassociation)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[NetworkInterfaceApplicationGatewayBackendAddressPoolAssociationSpec](#networkinterfaceapplicationgatewaybackendaddresspoolassociationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
