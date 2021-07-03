---
title: ContainerService
menu:
  docs_v2021.07.01:
    identifier: containerservice-azurerm.kubeform.com
    name: ContainerService
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

## ContainerService
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ContainerService` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ContainerServiceSpec](#containerservicespec)***||
| `status` | ***[ContainerServiceStatus](#containerservicestatus)***||
## ContainerServiceSpec

Appears on:[ContainerService](#containerservice), [ContainerServiceStatus](#containerservicestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `agentPoolProfile` | ***[[]ContainerServiceSpecAgentPoolProfile](#containerservicespecagentpoolprofile)***||
| `diagnosticsProfile` | ***[[]ContainerServiceSpecDiagnosticsProfile](#containerservicespecdiagnosticsprofile)***||
| `linuxProfile` | ***[[]ContainerServiceSpecLinuxProfile](#containerservicespeclinuxprofile)***||
| `location` | ***string***||
| `masterProfile` | ***[[]ContainerServiceSpecMasterProfile](#containerservicespecmasterprofile)***||
| `name` | ***string***||
| `orchestrationPlatform` | ***string***||
| `resourceGroupName` | ***string***||
| `servicePrincipal` | ***[[]ContainerServiceSpecServicePrincipal](#containerservicespecserviceprincipal)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## ContainerServiceSpecAgentPoolProfile

Appears on:[ContainerServiceSpec](#containerservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***| ***(Optional)*** |
| `dnsPrefix` | ***string***||
| `fqdn` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `vmSize` | ***string***||
## ContainerServiceSpecDiagnosticsProfile

Appears on:[ContainerServiceSpec](#containerservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `enabled` | ***bool***||
| `storageURI` | ***string***| ***(Optional)*** |
## ContainerServiceSpecLinuxProfile

Appears on:[ContainerServiceSpec](#containerservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `adminUsername` | ***string***||
| `sshKey` | ***[[]ContainerServiceSpecLinuxProfileSshKey](#containerservicespeclinuxprofilesshkey)***||
## ContainerServiceSpecLinuxProfileSshKey

Appears on:[ContainerServiceSpecLinuxProfile](#containerservicespeclinuxprofile)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `keyData` | ***string***||
## ContainerServiceSpecMasterProfile

Appears on:[ContainerServiceSpec](#containerservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int64***| ***(Optional)*** |
| `dnsPrefix` | ***string***||
| `fqdn` | ***string***| ***(Optional)*** |
## ContainerServiceSpecServicePrincipal

Appears on:[ContainerServiceSpec](#containerservicespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***||
## ContainerServiceStatus

Appears on:[ContainerService](#containerservice)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ContainerServiceSpec](#containerservicespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ContainerServiceStatus](#containerservicestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `service_principal.<index>.client_secret` | ***string*** ||
