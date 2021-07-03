---
title: DataFactory
menu:
  docs_v2021.07.01:
    identifier: datafactory-azurerm.kubeform.com
    name: DataFactory
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

## DataFactory
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `DataFactory` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DataFactorySpec](#datafactoryspec)***||
| `status` | ***[DataFactoryStatus](#datafactorystatus)***||
## DataFactorySpec

Appears on:[DataFactory](#datafactory), [DataFactoryStatus](#datafactorystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `githubConfiguration` | ***[[]DataFactorySpecGithubConfiguration](#datafactoryspecgithubconfiguration)***| ***(Optional)*** |
| `identity` | ***[[]DataFactorySpecIdentity](#datafactoryspecidentity)***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `vstsConfiguration` | ***[[]DataFactorySpecVstsConfiguration](#datafactoryspecvstsconfiguration)***| ***(Optional)*** |
## DataFactorySpecGithubConfiguration

Appears on:[DataFactorySpec](#datafactoryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accountName` | ***string***||
| `branchName` | ***string***||
| `gitURL` | ***string***||
| `repositoryName` | ***string***||
| `rootFolder` | ***string***||
## DataFactorySpecIdentity

Appears on:[DataFactorySpec](#datafactoryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `principalID` | ***string***| ***(Optional)*** |
| `tenantID` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## DataFactorySpecVstsConfiguration

Appears on:[DataFactorySpec](#datafactoryspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `accountName` | ***string***||
| `branchName` | ***string***||
| `projectName` | ***string***||
| `repositoryName` | ***string***||
| `rootFolder` | ***string***||
| `tenantID` | ***string***||
## DataFactoryStatus

Appears on:[DataFactory](#datafactory)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DataFactorySpec](#datafactoryspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[DataFactoryStatus](#datafactorystatus)

---
