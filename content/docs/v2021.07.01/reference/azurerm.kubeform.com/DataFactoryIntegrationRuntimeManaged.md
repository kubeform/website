---
title: DataFactoryIntegrationRuntimeManaged
menu:
  docs_v2021.07.01:
    identifier: datafactoryintegrationruntimemanaged-azurerm.kubeform.com
    name: DataFactoryIntegrationRuntimeManaged
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

## DataFactoryIntegrationRuntimeManaged
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DataFactoryIntegrationRuntimeManaged` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataFactoryIntegrationRuntimeManagedSpec](#datafactoryintegrationruntimemanagedspec)***||
| `status` | ***[DataFactoryIntegrationRuntimeManagedStatus](#datafactoryintegrationruntimemanagedstatus)***||
## DataFactoryIntegrationRuntimeManagedSpec

Appears on:[DataFactoryIntegrationRuntimeManaged](#datafactoryintegrationruntimemanaged), [DataFactoryIntegrationRuntimeManagedStatus](#datafactoryintegrationruntimemanagedstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `catalogInfo` | ***[[]DataFactoryIntegrationRuntimeManagedSpecCatalogInfo](#datafactoryintegrationruntimemanagedspeccataloginfo)***| ***(Optional)*** |
| `customSetupScript` | ***[[]DataFactoryIntegrationRuntimeManagedSpecCustomSetupScript](#datafactoryintegrationruntimemanagedspeccustomsetupscript)***| ***(Optional)*** |
| `dataFactoryName` | ***string***||
| `description` | ***string***| ***(Optional)*** |
| `edition` | ***string***| ***(Optional)*** |
| `licenseType` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `maxParallelExecutionsPerNode` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `nodeSize` | ***string***||
| `numberOfNodes` | ***int64***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `vnetIntegration` | ***[[]DataFactoryIntegrationRuntimeManagedSpecVnetIntegration](#datafactoryintegrationruntimemanagedspecvnetintegration)***| ***(Optional)*** |
## DataFactoryIntegrationRuntimeManagedSpecCatalogInfo

Appears on:[DataFactoryIntegrationRuntimeManagedSpec](#datafactoryintegrationruntimemanagedspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `administratorLogin` | ***string***||
| `pricingTier` | ***string***| ***(Optional)*** |
| `serverEndpoint` | ***string***||
## DataFactoryIntegrationRuntimeManagedSpecCustomSetupScript

Appears on:[DataFactoryIntegrationRuntimeManagedSpec](#datafactoryintegrationruntimemanagedspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `blobContainerURI` | ***string***||
## DataFactoryIntegrationRuntimeManagedSpecVnetIntegration

Appears on:[DataFactoryIntegrationRuntimeManagedSpec](#datafactoryintegrationruntimemanagedspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `subnetName` | ***string***||
| `vnetID` | ***string***||
## DataFactoryIntegrationRuntimeManagedStatus

Appears on:[DataFactoryIntegrationRuntimeManaged](#datafactoryintegrationruntimemanaged)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataFactoryIntegrationRuntimeManagedSpec](#datafactoryintegrationruntimemanagedspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DataFactoryIntegrationRuntimeManagedStatus](#datafactoryintegrationruntimemanagedstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `catalog_info.<index>.administrator_password` | ***string*** ||
| `custom_setup_script.<index>.sas_token` | ***string*** ||
