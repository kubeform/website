---
title: AppServiceSlot
menu:
  docs_v2021.07.01:
    identifier: appserviceslot-azurerm.kubeform.com
    name: AppServiceSlot
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

## AppServiceSlot
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `AppServiceSlot` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppServiceSlotSpec](#appserviceslotspec)***||
| `status` | ***[AppServiceSlotStatus](#appserviceslotstatus)***||
## AppServiceSlotSpec

Appears on:[AppServiceSlot](#appserviceslot), [AppServiceSlotStatus](#appserviceslotstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `appServiceName` | ***string***||
| `appServicePlanID` | ***string***||
| `appSettings` | ***map[string]string***| ***(Optional)*** |
| `authSettings` | ***[[]AppServiceSlotSpecAuthSettings](#appserviceslotspecauthsettings)***| ***(Optional)*** |
| `clientAffinityEnabled` | ***bool***| ***(Optional)*** |
| `connectionString` | ***[[]AppServiceSlotSpecConnectionString](#appserviceslotspecconnectionstring)***| ***(Optional)*** |
| `defaultSiteHostname` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `httpsOnly` | ***bool***| ***(Optional)*** |
| `identity` | ***[[]AppServiceSlotSpecIdentity](#appserviceslotspecidentity)***| ***(Optional)*** |
| `location` | ***string***||
| `logs` | ***[[]AppServiceSlotSpecLogs](#appserviceslotspeclogs)***| ***(Optional)*** |
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `siteConfig` | ***[[]AppServiceSlotSpecSiteConfig](#appserviceslotspecsiteconfig)***| ***(Optional)*** |
| `siteCredential` | ***[[]AppServiceSlotSpecSiteCredential](#appserviceslotspecsitecredential)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettings

Appears on:[AppServiceSlotSpec](#appserviceslotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `activeDirectory` | ***[[]AppServiceSlotSpecAuthSettingsActiveDirectory](#appserviceslotspecauthsettingsactivedirectory)***| ***(Optional)*** |
| `additionalLoginParams` | ***map[string]string***| ***(Optional)*** |
| `allowedExternalRedirectUrls` | ***[]string***| ***(Optional)*** |
| `defaultProvider` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***||
| `facebook` | ***[[]AppServiceSlotSpecAuthSettingsFacebook](#appserviceslotspecauthsettingsfacebook)***| ***(Optional)*** |
| `google` | ***[[]AppServiceSlotSpecAuthSettingsGoogle](#appserviceslotspecauthsettingsgoogle)***| ***(Optional)*** |
| `issuer` | ***string***| ***(Optional)*** |
| `microsoft` | ***[[]AppServiceSlotSpecAuthSettingsMicrosoft](#appserviceslotspecauthsettingsmicrosoft)***| ***(Optional)*** |
| `runtimeVersion` | ***string***| ***(Optional)*** |
| `tokenRefreshExtensionHours` | ***float64***| ***(Optional)*** |
| `tokenStoreEnabled` | ***bool***| ***(Optional)*** |
| `twitter` | ***[[]AppServiceSlotSpecAuthSettingsTwitter](#appserviceslotspecauthsettingstwitter)***| ***(Optional)*** |
| `unauthenticatedClientAction` | ***string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettingsActiveDirectory

Appears on:[AppServiceSlotSpecAuthSettings](#appserviceslotspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedAudiences` | ***[]string***| ***(Optional)*** |
| `clientID` | ***string***||
## AppServiceSlotSpecAuthSettingsFacebook

Appears on:[AppServiceSlotSpecAuthSettings](#appserviceslotspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `appID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettingsGoogle

Appears on:[AppServiceSlotSpecAuthSettings](#appserviceslotspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettingsMicrosoft

Appears on:[AppServiceSlotSpecAuthSettings](#appserviceslotspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## AppServiceSlotSpecAuthSettingsTwitter

Appears on:[AppServiceSlotSpecAuthSettings](#appserviceslotspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `consumerKey` | ***string***||
## AppServiceSlotSpecConnectionString

Appears on:[AppServiceSlotSpec](#appserviceslotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `type` | ***string***||
## AppServiceSlotSpecIdentity

Appears on:[AppServiceSlotSpec](#appserviceslotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `identityIDS` | ***[]string***| ***(Optional)*** |
| `principalID` | ***string***| ***(Optional)*** |
| `tenantID` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## AppServiceSlotSpecLogs

Appears on:[AppServiceSlotSpec](#appserviceslotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `applicationLogs` | ***[[]AppServiceSlotSpecLogsApplicationLogs](#appserviceslotspeclogsapplicationlogs)***| ***(Optional)*** |
| `httpLogs` | ***[[]AppServiceSlotSpecLogsHttpLogs](#appserviceslotspeclogshttplogs)***| ***(Optional)*** |
## AppServiceSlotSpecLogsApplicationLogs

Appears on:[AppServiceSlotSpecLogs](#appserviceslotspeclogs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `azureBlobStorage` | ***[[]AppServiceSlotSpecLogsApplicationLogsAzureBlobStorage](#appserviceslotspeclogsapplicationlogsazureblobstorage)***| ***(Optional)*** |
## AppServiceSlotSpecLogsApplicationLogsAzureBlobStorage

Appears on:[AppServiceSlotSpecLogsApplicationLogs](#appserviceslotspeclogsapplicationlogs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `level` | ***string***||
| `retentionInDays` | ***int64***||
## AppServiceSlotSpecLogsHttpLogs

Appears on:[AppServiceSlotSpecLogs](#appserviceslotspeclogs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `azureBlobStorage` | ***[[]AppServiceSlotSpecLogsHttpLogsAzureBlobStorage](#appserviceslotspeclogshttplogsazureblobstorage)***| ***(Optional)*** |
| `fileSystem` | ***[[]AppServiceSlotSpecLogsHttpLogsFileSystem](#appserviceslotspeclogshttplogsfilesystem)***| ***(Optional)*** |
## AppServiceSlotSpecLogsHttpLogsAzureBlobStorage

Appears on:[AppServiceSlotSpecLogsHttpLogs](#appserviceslotspeclogshttplogs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `retentionInDays` | ***int64***||
## AppServiceSlotSpecLogsHttpLogsFileSystem

Appears on:[AppServiceSlotSpecLogsHttpLogs](#appserviceslotspeclogshttplogs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `retentionInDays` | ***int64***||
| `retentionInMb` | ***int64***||
## AppServiceSlotSpecSiteConfig

Appears on:[AppServiceSlotSpec](#appserviceslotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `alwaysOn` | ***bool***| ***(Optional)*** |
| `appCommandLine` | ***string***| ***(Optional)*** |
| `autoSwapSlotName` | ***string***| ***(Optional)*** |
| `cors` | ***[[]AppServiceSlotSpecSiteConfigCors](#appserviceslotspecsiteconfigcors)***| ***(Optional)*** |
| `defaultDocuments` | ***[]string***| ***(Optional)*** |
| `dotnetFrameworkVersion` | ***string***| ***(Optional)*** |
| `ftpsState` | ***string***| ***(Optional)*** |
| `http2Enabled` | ***bool***| ***(Optional)*** |
| `ipRestriction` | ***[[]AppServiceSlotSpecSiteConfigIpRestriction](#appserviceslotspecsiteconfigiprestriction)***| ***(Optional)*** |
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

Appears on:[AppServiceSlotSpecSiteConfig](#appserviceslotspecsiteconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedOrigins` | ***[]string***||
| `supportCredentials` | ***bool***| ***(Optional)*** |
## AppServiceSlotSpecSiteConfigIpRestriction

Appears on:[AppServiceSlotSpecSiteConfig](#appserviceslotspecsiteconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ipAddress` | ***string***| ***(Optional)*** |
| `subnetMask` | ***string***| ***(Optional)*** |
| `virtualNetworkSubnetID` | ***string***| ***(Optional)*** |
## AppServiceSlotSpecSiteCredential

Appears on:[AppServiceSlotSpec](#appserviceslotspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `username` | ***string***| ***(Optional)*** |
## AppServiceSlotStatus

Appears on:[AppServiceSlot](#appserviceslot)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppServiceSlotSpec](#appserviceslotspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppServiceSlotStatus](#appserviceslotstatus)

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
| `logs.<index>.application_logs.<index>.azure_blob_storage.<index>.sas_url` | ***string*** ||
| `logs.<index>.http_logs.<index>.azure_blob_storage.<index>.sas_url` | ***string*** ||
| `site_credential.<index>.password` | ***string*** ||
