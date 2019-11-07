---
title: ContainerGroup
menu:
  docs_v0.1.0:
    identifier: containergroup-azurerm.kubeform.com
    name: ContainerGroup
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ContainerGroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ContainerGroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ContainerGroupSpec](#containergroupspec)***||
| `status` | ***[ContainerGroupStatus](#containergroupstatus)***||
## ContainerGroupSpec

Appears on:[ContainerGroup](#containergroup), [ContainerGroupStatus](#containergroupstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `container` | ***[[]ContainerGroupSpecContainer](#containergroupspeccontainer)***||
| `diagnostics` | ***[[]ContainerGroupSpecDiagnostics](#containergroupspecdiagnostics)***| ***(Optional)*** |
| `dnsNameLabel` | ***string***| ***(Optional)*** |
| `fqdn` | ***string***| ***(Optional)*** |
| `identity` | ***[[]ContainerGroupSpecIdentity](#containergroupspecidentity)***| ***(Optional)*** |
| `imageRegistryCredential` | ***[[]ContainerGroupSpecImageRegistryCredential](#containergroupspecimageregistrycredential)***| ***(Optional)*** |
| `ipAddress` | ***string***| ***(Optional)*** |
| `ipAddressType` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `osType` | ***string***||
| `resourceGroupName` | ***string***||
| `restartPolicy` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## ContainerGroupSpecContainer

Appears on:[ContainerGroupSpec](#containergroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `command` | ***string***| ***(Optional)*** Deprecated|
| `commands` | ***[]string***| ***(Optional)*** |
| `cpu` | ***encoding/json.Number***||
| `environmentVariables` | ***map[string]string***| ***(Optional)*** |
| `gpu` | ***[[]ContainerGroupSpecContainerGpu](#containergroupspeccontainergpu)***| ***(Optional)*** |
| `image` | ***string***||
| `livenessProbe` | ***[[]ContainerGroupSpecContainerLivenessProbe](#containergroupspeccontainerlivenessprobe)***| ***(Optional)*** |
| `memory` | ***encoding/json.Number***||
| `name` | ***string***||
| `port` | ***int***| ***(Optional)*** Deprecated|
| `ports` | ***[[]ContainerGroupSpecContainerPorts](#containergroupspeccontainerports)***| ***(Optional)*** |
| `protocol` | ***string***| ***(Optional)*** Deprecated|
| `readinessProbe` | ***[[]ContainerGroupSpecContainerReadinessProbe](#containergroupspeccontainerreadinessprobe)***| ***(Optional)*** |
| `volume` | ***[[]ContainerGroupSpecContainerVolume](#containergroupspeccontainervolume)***| ***(Optional)*** |
## ContainerGroupSpecContainerGpu

Appears on:[ContainerGroupSpecContainer](#containergroupspeccontainer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `count` | ***int***| ***(Optional)*** |
| `sku` | ***string***| ***(Optional)*** |
## ContainerGroupSpecContainerLivenessProbe

Appears on:[ContainerGroupSpecContainer](#containergroupspeccontainer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `exec` | ***[]string***| ***(Optional)*** |
| `failureThreshold` | ***int***| ***(Optional)*** |
| `httpGet` | ***[[]ContainerGroupSpecContainerLivenessProbeHttpGet](#containergroupspeccontainerlivenessprobehttpget)***| ***(Optional)*** |
| `initialDelaySeconds` | ***int***| ***(Optional)*** |
| `periodSeconds` | ***int***| ***(Optional)*** |
| `successThreshold` | ***int***| ***(Optional)*** |
| `timeoutSeconds` | ***int***| ***(Optional)*** |
## ContainerGroupSpecContainerLivenessProbeHttpGet

Appears on:[ContainerGroupSpecContainerLivenessProbe](#containergroupspeccontainerlivenessprobe)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `scheme` | ***string***| ***(Optional)*** |
## ContainerGroupSpecContainerPorts

Appears on:[ContainerGroupSpecContainer](#containergroupspeccontainer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int***| ***(Optional)*** |
| `protocol` | ***string***| ***(Optional)*** |
## ContainerGroupSpecContainerReadinessProbe

Appears on:[ContainerGroupSpecContainer](#containergroupspeccontainer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `exec` | ***[]string***| ***(Optional)*** |
| `failureThreshold` | ***int***| ***(Optional)*** |
| `httpGet` | ***[[]ContainerGroupSpecContainerReadinessProbeHttpGet](#containergroupspeccontainerreadinessprobehttpget)***| ***(Optional)*** |
| `initialDelaySeconds` | ***int***| ***(Optional)*** |
| `periodSeconds` | ***int***| ***(Optional)*** |
| `successThreshold` | ***int***| ***(Optional)*** |
| `timeoutSeconds` | ***int***| ***(Optional)*** |
## ContainerGroupSpecContainerReadinessProbeHttpGet

Appears on:[ContainerGroupSpecContainerReadinessProbe](#containergroupspeccontainerreadinessprobe)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***int***| ***(Optional)*** |
| `scheme` | ***string***| ***(Optional)*** |
## ContainerGroupSpecContainerVolume

Appears on:[ContainerGroupSpecContainer](#containergroupspeccontainer)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `mountPath` | ***string***||
| `name` | ***string***||
| `readOnly` | ***bool***| ***(Optional)*** |
| `shareName` | ***string***||
| `storageAccountKey` | ***string***||
| `storageAccountName` | ***string***||
## ContainerGroupSpecDiagnostics

Appears on:[ContainerGroupSpec](#containergroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `logAnalytics` | ***[[]ContainerGroupSpecDiagnosticsLogAnalytics](#containergroupspecdiagnosticsloganalytics)***||
## ContainerGroupSpecDiagnosticsLogAnalytics

Appears on:[ContainerGroupSpecDiagnostics](#containergroupspecdiagnostics)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `logType` | ***string***||
| `metadata` | ***map[string]string***| ***(Optional)*** |
| `workspaceID` | ***string***||
## ContainerGroupSpecIdentity

Appears on:[ContainerGroupSpec](#containergroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `identityIDS` | ***[]string***| ***(Optional)*** |
| `principalID` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## ContainerGroupSpecImageRegistryCredential

Appears on:[ContainerGroupSpec](#containergroupspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `server` | ***string***||
| `username` | ***string***||
## ContainerGroupStatus

Appears on:[ContainerGroup](#containergroup)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ContainerGroupSpec](#containergroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ContainerGroupStatus](#containergroupstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `container.<index>.secure_environment_variables` | ***map[string]string*** ||
| `diagnostics.<index>.log_analytics.<index>.workspace_key` | ***string*** ||
| `image_registry_credential.<index>.password` | ***string*** ||
