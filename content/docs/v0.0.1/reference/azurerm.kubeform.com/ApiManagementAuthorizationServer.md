---
title: ApiManagementAuthorizationServer
menu:
  docs_v0.0.1:
    identifier: apimanagementauthorizationserver-azurerm.kubeform.com
    name: ApiManagementAuthorizationServer
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## ApiManagementAuthorizationServer
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ApiManagementAuthorizationServer` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ApiManagementAuthorizationServerSpec](#apimanagementauthorizationserverspec)***||
| `status` | ***[ApiManagementAuthorizationServerStatus](#apimanagementauthorizationserverstatus)***||
## ApiManagementAuthorizationServerSpec

Appears on:[ApiManagementAuthorizationServer](#apimanagementauthorizationserver), [ApiManagementAuthorizationServerStatus](#apimanagementauthorizationserverstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `apiManagementName` | ***string***||
| `authorizationEndpoint` | ***string***||
| `authorizationMethods` | ***[]string***||
| `bearerTokenSendingMethods` | ***[]string***| ***(Optional)*** |
| `clientAuthenticationMethod` | ***[]string***| ***(Optional)*** |
| `clientID` | ***string***||
| `clientRegistrationEndpoint` | ***string***||
| `defaultScope` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `displayName` | ***string***||
| `grantTypes` | ***[]string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `resourceOwnerUsername` | ***string***| ***(Optional)*** |
| `supportState` | ***bool***| ***(Optional)*** |
| `tokenBodyParameter` | ***[[]ApiManagementAuthorizationServerSpecTokenBodyParameter](#apimanagementauthorizationserverspectokenbodyparameter)***| ***(Optional)*** |
| `tokenEndpoint` | ***string***| ***(Optional)*** |
## ApiManagementAuthorizationServerSpecTokenBodyParameter

Appears on:[ApiManagementAuthorizationServerSpec](#apimanagementauthorizationserverspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `value` | ***string***||
## ApiManagementAuthorizationServerStatus

Appears on:[ApiManagementAuthorizationServer](#apimanagementauthorizationserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ApiManagementAuthorizationServerSpec](#apimanagementauthorizationserverspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `client_secret` | ***string*** ||
| `resource_owner_password` | ***string*** ||
