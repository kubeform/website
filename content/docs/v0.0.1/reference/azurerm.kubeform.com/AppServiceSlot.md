---
title: AppServiceSlot
menu:
  docs_v0.0.1:
    identifier: appserviceslot-azurerm.kubeform.com
    name: AppServiceSlot
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
---

## AppServiceSlot
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AppServiceSlot` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppServiceSlotSpec](#AppServiceSlotSpec)***||
| `status` | ***[AppServiceSlotStatus](#AppServiceSlotStatus)***||
## AppServiceSlotSpec
##### (Appears on:[AppServiceSlot](#AppServiceSlot), [AppServiceSlotStatus](#AppServiceSlotStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `appServiceName` | ***string***||
| `appServicePlanID` | ***string***||
| `appSettings` | ***map[string]string***| ***(Optional)*** |
| `authSettings` | ***[[]AppServiceSlotSpecAuthSettings](#AppServiceSlotSpecAuthSettings)***| ***(Optional)*** |
| `clientAffinityEnabled` | ***bool***| ***(Optional)*** |
| `connectionString` | ***[[]AppServiceSlotSpecConnectionString](#AppServiceSlotSpecConnectionString)***| ***(Optional)*** |
| `defaultSiteHostname` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `httpsOnly` | ***bool***| ***(Optional)*** |
| `identity` | ***[[]AppServiceSlotSpecIdentity](#AppServiceSlotSpecIdentity)***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `siteConfig` | ***[[]AppServiceSlotSpecSiteConfig](#AppServiceSlotSpecSiteConfig)***| ***(Optional)*** |
| `siteCredential` | ***[[]AppServiceSlotSpecSiteCredential](#AppServiceSlotSpecSiteCredential)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettings
##### (Appears on:[AppServiceSlotSpec](#AppServiceSlotSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `activeDirectory` | ***[[]AppServiceSlotSpecAuthSettingsActiveDirectory](#AppServiceSlotSpecAuthSettingsActiveDirectory)***| ***(Optional)*** |
| `additionalLoginParams` | ***map[string]string***| ***(Optional)*** |
| `allowedExternalRedirectUrls` | ***[]string***| ***(Optional)*** |
| `defaultProvider` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***||
| `facebook` | ***[[]AppServiceSlotSpecAuthSettingsFacebook](#AppServiceSlotSpecAuthSettingsFacebook)***| ***(Optional)*** |
| `google` | ***[[]AppServiceSlotSpecAuthSettingsGoogle](#AppServiceSlotSpecAuthSettingsGoogle)***| ***(Optional)*** |
| `issuer` | ***string***| ***(Optional)*** |
| `microsoft` | ***[[]AppServiceSlotSpecAuthSettingsMicrosoft](#AppServiceSlotSpecAuthSettingsMicrosoft)***| ***(Optional)*** |
| `runtimeVersion` | ***string***| ***(Optional)*** |
| `tokenRefreshExtensionHours` | ***encoding/json.Number***| ***(Optional)*** |
| `tokenStoreEnabled` | ***bool***| ***(Optional)*** |
| `twitter` | ***[[]AppServiceSlotSpecAuthSettingsTwitter](#AppServiceSlotSpecAuthSettingsTwitter)***| ***(Optional)*** |
| `unauthenticatedClientAction` | ***string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettingsActiveDirectory
##### (Appears on:[AppServiceSlotSpecAuthSettings](#AppServiceSlotSpecAuthSettings))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedAudiences` | ***[]string***| ***(Optional)*** |
| `clientID` | ***string***||
## AppServiceSlotSpecAuthSettingsFacebook
##### (Appears on:[AppServiceSlotSpecAuthSettings](#AppServiceSlotSpecAuthSettings))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `appID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettingsGoogle
##### (Appears on:[AppServiceSlotSpecAuthSettings](#AppServiceSlotSpecAuthSettings))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettingsMicrosoft
##### (Appears on:[AppServiceSlotSpecAuthSettings](#AppServiceSlotSpecAuthSettings))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettingsTwitter
##### (Appears on:[AppServiceSlotSpecAuthSettings](#AppServiceSlotSpecAuthSettings))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `consumerKey` | ***string***||
## AppServiceSlotSpecConnectionString
##### (Appears on:[AppServiceSlotSpec](#AppServiceSlotSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `type` | ***string***||
## AppServiceSlotSpecIdentity
##### (Appears on:[AppServiceSlotSpec](#AppServiceSlotSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `identityIDS` | ***[]string***| ***(Optional)*** |
| `principalID` | ***string***| ***(Optional)*** |
| `tenantID` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## AppServiceSlotSpecSiteConfig
##### (Appears on:[AppServiceSlotSpec](#AppServiceSlotSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `alwaysOn` | ***bool***| ***(Optional)*** |
| `appCommandLine` | ***string***| ***(Optional)*** |
| `cors` | ***[[]AppServiceSlotSpecSiteConfigCors](#AppServiceSlotSpecSiteConfigCors)***| ***(Optional)*** |
| `defaultDocuments` | ***[]string***| ***(Optional)*** |
| `dotnetFrameworkVersion` | ***string***| ***(Optional)*** |
| `ftpsState` | ***string***| ***(Optional)*** |
| `http2Enabled` | ***bool***| ***(Optional)*** |
| `ipRestriction` | ***[[]AppServiceSlotSpecSiteConfigIpRestriction](#AppServiceSlotSpecSiteConfigIpRestriction)***| ***(Optional)*** |
| `javaContainer` | ***string***| ***(Optional)*** |
| `javaContainerVersion` | ***string***| ***(Optional)*** |
| `javaVersion` | ***string***| ***(Optional)*** |
| `linuxFxVersion` | ***string***| ***(Optional)*** |
| `localMysqlEnabled` | ***bool***| ***(Optional)*** |
| `managedPipelineMode` | ***string***| ***(Optional)*** |
| `minTLSVersion` | ***string***| ***(Optional)*** |
| `phpVersion` | ***string***| ***(Optional)*** |
| `pythonVersion` | ***string***| ***(Optional)*** |
| `remoteDebuggingEnabled` | ***bool***| ***(Optional)*** |
| `remoteDebuggingVersion` | ***string***| ***(Optional)*** |
| `scmType` | ***string***| ***(Optional)*** |
| `use32BitWorkerProcess` | ***bool***| ***(Optional)*** |
| `virtualNetworkName` | ***string***| ***(Optional)*** |
| `websocketsEnabled` | ***bool***| ***(Optional)*** |
| `windowsFxVersion` | ***string***| ***(Optional)*** |
## AppServiceSlotSpecSiteConfigCors
##### (Appears on:[AppServiceSlotSpecSiteConfig](#AppServiceSlotSpecSiteConfig))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedOrigins` | ***[]string***||
| `supportCredentials` | ***bool***| ***(Optional)*** |
## AppServiceSlotSpecSiteConfigIpRestriction
##### (Appears on:[AppServiceSlotSpecSiteConfig](#AppServiceSlotSpecSiteConfig))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipAddress` | ***string***||
| `subnetMask` | ***string***| ***(Optional)*** |
## AppServiceSlotSpecSiteCredential
##### (Appears on:[AppServiceSlotSpec](#AppServiceSlotSpec))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `username` | ***string***| ***(Optional)*** |
## AppServiceSlotStatus
##### (Appears on:[AppServiceSlot](#AppServiceSlot))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppServiceSlotSpec](#AppServiceSlotSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `auth_settings.<index>.active_directory.<index>.client_secret` | ***string*** ||
| `auth_settings.<index>.facebook.<index>.app_secret` | ***string*** ||
| `auth_settings.<index>.google.<index>.client_secret` | ***string*** ||
| `auth_settings.<index>.microsoft.<index>.client_secret` | ***string*** ||
| `auth_settings.<index>.twitter.<index>.consumer_secret` | ***string*** ||
| `connection_string.<index>.value` | ***string*** ||
| `site_credential.<index>.password` | ***string*** ||
