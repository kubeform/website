---
title: VpnServerConfiguration
menu:
  docs_v2021.07.01:
    identifier: vpnserverconfiguration-azurerm.kubeform.com
    name: VpnServerConfiguration
    parent: azurerm.kubeform.com-reference
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

## VpnServerConfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `VpnServerConfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[VpnServerConfigurationSpec](#vpnserverconfigurationspec)***||
| `status` | ***[VpnServerConfigurationStatus](#vpnserverconfigurationstatus)***||
## Phase(`string` alias)

Appears on:[VpnServerConfigurationStatus](#vpnserverconfigurationstatus)

## VpnServerConfigurationSpec

Appears on:[VpnServerConfiguration](#vpnserverconfiguration), [VpnServerConfigurationStatus](#vpnserverconfigurationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `azureActiveDirectoryAuthentication` | ***[[]VpnServerConfigurationSpecAzureActiveDirectoryAuthentication](#vpnserverconfigurationspecazureactivedirectoryauthentication)***| ***(Optional)*** |
| `clientRevokedCertificate` | ***[[]VpnServerConfigurationSpecClientRevokedCertificate](#vpnserverconfigurationspecclientrevokedcertificate)***| ***(Optional)*** |
| `clientRootCertificate` | ***[[]VpnServerConfigurationSpecClientRootCertificate](#vpnserverconfigurationspecclientrootcertificate)***| ***(Optional)*** |
| `ipsecPolicy` | ***[[]VpnServerConfigurationSpecIpsecPolicy](#vpnserverconfigurationspecipsecpolicy)***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `radiusServer` | ***[[]VpnServerConfigurationSpecRadiusServer](#vpnserverconfigurationspecradiusserver)***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vpnAuthenticationTypes` | ***[]string***||
| `vpnProtocols` | ***[]string***| ***(Optional)*** |
## VpnServerConfigurationSpecAzureActiveDirectoryAuthentication

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `audience` | ***string***||
| `issuer` | ***string***||
| `tenant` | ***string***||
## VpnServerConfigurationSpecClientRevokedCertificate

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `thumbprint` | ***string***||
## VpnServerConfigurationSpecClientRootCertificate

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `publicCertData` | ***string***||
## VpnServerConfigurationSpecIpsecPolicy

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `dhGroup` | ***string***||
| `ikeEncryption` | ***string***||
| `ikeIntegrity` | ***string***||
| `ipsecEncryption` | ***string***||
| `ipsecIntegrity` | ***string***||
| `pfsGroup` | ***string***||
| `saDataSizeKilobytes` | ***int64***||
| `saLifetimeSeconds` | ***int64***||
## VpnServerConfigurationSpecRadiusServer

Appears on:[VpnServerConfigurationSpec](#vpnserverconfigurationspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `address` | ***string***||
| `clientRootCertificate` | ***[[]VpnServerConfigurationSpecRadiusServerClientRootCertificate](#vpnserverconfigurationspecradiusserverclientrootcertificate)***| ***(Optional)*** |
| `serverRootCertificate` | ***[[]VpnServerConfigurationSpecRadiusServerServerRootCertificate](#vpnserverconfigurationspecradiusserverserverrootcertificate)***||
## VpnServerConfigurationSpecRadiusServerClientRootCertificate

Appears on:[VpnServerConfigurationSpecRadiusServer](#vpnserverconfigurationspecradiusserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `thumbprint` | ***string***||
## VpnServerConfigurationSpecRadiusServerServerRootCertificate

Appears on:[VpnServerConfigurationSpecRadiusServer](#vpnserverconfigurationspecradiusserver)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `publicCertData` | ***string***||
## VpnServerConfigurationStatus

Appears on:[VpnServerConfiguration](#vpnserverconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[VpnServerConfigurationSpec](#vpnserverconfigurationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `radius_server.<index>.secret` | ***string*** ||
