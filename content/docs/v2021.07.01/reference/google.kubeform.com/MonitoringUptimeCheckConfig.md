---
title: MonitoringUptimeCheckConfig
menu:
  docs_v2021.07.01:
    identifier: monitoringuptimecheckconfig-google.kubeform.com
    name: MonitoringUptimeCheckConfig
    parent: google.kubeform.com-reference
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

## MonitoringUptimeCheckConfig
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `MonitoringUptimeCheckConfig` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[MonitoringUptimeCheckConfigSpec](#monitoringuptimecheckconfigspec)***||
| `status` | ***[MonitoringUptimeCheckConfigStatus](#monitoringuptimecheckconfigstatus)***||
## MonitoringUptimeCheckConfigSpec

Appears on:[MonitoringUptimeCheckConfig](#monitoringuptimecheckconfig), [MonitoringUptimeCheckConfigStatus](#monitoringuptimecheckconfigstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `contentMatchers` | ***[[]MonitoringUptimeCheckConfigSpecContentMatchers](#monitoringuptimecheckconfigspeccontentmatchers)***| ***(Optional)*** |
| `displayName` | ***string***||
| `httpCheck` | ***[[]MonitoringUptimeCheckConfigSpecHttpCheck](#monitoringuptimecheckconfigspechttpcheck)***| ***(Optional)*** |
| `internalCheckers` | ***[[]MonitoringUptimeCheckConfigSpecInternalCheckers](#monitoringuptimecheckconfigspecinternalcheckers)***| ***(Optional)*** Deprecated|
| `isInternal` | ***bool***| ***(Optional)*** Deprecated|
| `monitoredResource` | ***[[]MonitoringUptimeCheckConfigSpecMonitoredResource](#monitoringuptimecheckconfigspecmonitoredresource)***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `period` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `resourceGroup` | ***[[]MonitoringUptimeCheckConfigSpecResourceGroup](#monitoringuptimecheckconfigspecresourcegroup)***| ***(Optional)*** |
| `selectedRegions` | ***[]string***| ***(Optional)*** |
| `tcpCheck` | ***[[]MonitoringUptimeCheckConfigSpecTcpCheck](#monitoringuptimecheckconfigspectcpcheck)***| ***(Optional)*** |
| `timeout` | ***string***||
| `uptimeCheckID` | ***string***| ***(Optional)*** |
## MonitoringUptimeCheckConfigSpecContentMatchers

Appears on:[MonitoringUptimeCheckConfigSpec](#monitoringuptimecheckconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `content` | ***string***| ***(Optional)*** |
## MonitoringUptimeCheckConfigSpecHttpCheck

Appears on:[MonitoringUptimeCheckConfigSpec](#monitoringuptimecheckconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authInfo` | ***[[]MonitoringUptimeCheckConfigSpecHttpCheckAuthInfo](#monitoringuptimecheckconfigspechttpcheckauthinfo)***| ***(Optional)*** |
| `headers` | ***map[string]string***| ***(Optional)*** |
| `maskHeaders` | ***bool***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***int64***| ***(Optional)*** |
| `useSSL` | ***bool***| ***(Optional)*** |
## MonitoringUptimeCheckConfigSpecHttpCheckAuthInfo

Appears on:[MonitoringUptimeCheckConfigSpecHttpCheck](#monitoringuptimecheckconfigspechttpcheck)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `username` | ***string***| ***(Optional)*** |
## MonitoringUptimeCheckConfigSpecInternalCheckers

Appears on:[MonitoringUptimeCheckConfigSpec](#monitoringuptimecheckconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `displayName` | ***string***| ***(Optional)*** Deprecated|
| `gcpZone` | ***string***| ***(Optional)*** Deprecated|
| `name` | ***string***| ***(Optional)*** Deprecated|
| `network` | ***string***| ***(Optional)*** Deprecated|
| `peerProjectID` | ***string***| ***(Optional)*** Deprecated|
## MonitoringUptimeCheckConfigSpecMonitoredResource

Appears on:[MonitoringUptimeCheckConfigSpec](#monitoringuptimecheckconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `labels` | ***map[string]string***||
| `type` | ***string***||
## MonitoringUptimeCheckConfigSpecResourceGroup

Appears on:[MonitoringUptimeCheckConfigSpec](#monitoringuptimecheckconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `groupID` | ***string***| ***(Optional)*** |
| `resourceType` | ***string***| ***(Optional)*** |
## MonitoringUptimeCheckConfigSpecTcpCheck

Appears on:[MonitoringUptimeCheckConfigSpec](#monitoringuptimecheckconfigspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `port` | ***int64***||
## MonitoringUptimeCheckConfigStatus

Appears on:[MonitoringUptimeCheckConfig](#monitoringuptimecheckconfig)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[MonitoringUptimeCheckConfigSpec](#monitoringuptimecheckconfigspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[MonitoringUptimeCheckConfigStatus](#monitoringuptimecheckconfigstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `http_check.<index>.auth_info.<index>.password` | ***string*** ||
