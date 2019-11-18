---
title: FunctionApp
menu:
  docs_v0.1.0:
    identifier: functionapp-azurerm.kubeform.com
    name: FunctionApp
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## FunctionApp
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `FunctionApp` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FunctionAppSpec](#functionappspec)***||
| `status` | ***[FunctionAppStatus](#functionappstatus)***||
## FunctionAppSpec

Appears on:[FunctionApp](#functionapp), [FunctionAppStatus](#functionappstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `appServicePlanID` | ***string***||
| `appSettings` | ***map[string]string***| ***(Optional)*** |
| `authSettings` | ***[[]FunctionAppSpecAuthSettings](#functionappspecauthsettings)***| ***(Optional)*** |
| `clientAffinityEnabled` | ***bool***| ***(Optional)*** |
| `connectionString` | ***[[]FunctionAppSpecConnectionString](#functionappspecconnectionstring)***| ***(Optional)*** |
| `defaultHostname` | ***string***| ***(Optional)*** |
| `enableBuiltinLogging` | ***bool***| ***(Optional)*** |
| `enabled` | ***bool***| ***(Optional)*** |
| `httpsOnly` | ***bool***| ***(Optional)*** |
| `identity` | ***[[]FunctionAppSpecIdentity](#functionappspecidentity)***| ***(Optional)*** |
| `kind` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `outboundIPAddresses` | ***string***| ***(Optional)*** |
| `possibleOutboundIPAddresses` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `siteConfig` | ***[[]FunctionAppSpecSiteConfig](#functionappspecsiteconfig)***| ***(Optional)*** |
| `siteCredential` | ***[[]FunctionAppSpecSiteCredential](#functionappspecsitecredential)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `version` | ***string***| ***(Optional)*** |
## FunctionAppSpecAuthSettings

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `activeDirectory` | ***[[]FunctionAppSpecAuthSettingsActiveDirectory](#functionappspecauthsettingsactivedirectory)***| ***(Optional)*** |
| `additionalLoginParams` | ***map[string]string***| ***(Optional)*** |
| `allowedExternalRedirectUrls` | ***[]string***| ***(Optional)*** |
| `defaultProvider` | ***string***| ***(Optional)*** |
| `enabled` | ***bool***||
| `facebook` | ***[[]FunctionAppSpecAuthSettingsFacebook](#functionappspecauthsettingsfacebook)***| ***(Optional)*** |
| `google` | ***[[]FunctionAppSpecAuthSettingsGoogle](#functionappspecauthsettingsgoogle)***| ***(Optional)*** |
| `issuer` | ***string***| ***(Optional)*** |
| `microsoft` | ***[[]FunctionAppSpecAuthSettingsMicrosoft](#functionappspecauthsettingsmicrosoft)***| ***(Optional)*** |
| `runtimeVersion` | ***string***| ***(Optional)*** |
| `tokenRefreshExtensionHours` | ***float64***| ***(Optional)*** |
| `tokenStoreEnabled` | ***bool***| ***(Optional)*** |
| `twitter` | ***[[]FunctionAppSpecAuthSettingsTwitter](#functionappspecauthsettingstwitter)***| ***(Optional)*** |
| `unauthenticatedClientAction` | ***string***| ***(Optional)*** |
## FunctionAppSpecAuthSettingsActiveDirectory

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `allowedAudiences` | ***[]string***| ***(Optional)*** |
| `clientID` | ***string***||
## FunctionAppSpecAuthSettingsFacebook

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `appID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## FunctionAppSpecAuthSettingsGoogle

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## FunctionAppSpecAuthSettingsMicrosoft

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
| `oauthScopes` | ***[]string***| ***(Optional)*** |
## FunctionAppSpecAuthSettingsTwitter

Appears on:[FunctionAppSpecAuthSettings](#functionappspecauthsettings)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `consumerKey` | ***string***||
## FunctionAppSpecConnectionString

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***||
| `type` | ***string***||
## FunctionAppSpecIdentity

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `principalID` | ***string***| ***(Optional)*** |
| `tenantID` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## FunctionAppSpecSiteConfig

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `alwaysOn` | ***bool***| ***(Optional)*** |
| `linuxFxVersion` | ***string***| ***(Optional)*** |
| `use32BitWorkerProcess` | ***bool***| ***(Optional)*** |
| `websocketsEnabled` | ***bool***| ***(Optional)*** |
## FunctionAppSpecSiteCredential

Appears on:[FunctionAppSpec](#functionappspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `username` | ***string***| ***(Optional)*** |
## FunctionAppStatus

Appears on:[FunctionApp](#functionapp)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FunctionAppSpec](#functionappspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FunctionAppStatus](#functionappstatus)

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
| `storage_connection_string` | ***string*** ||
