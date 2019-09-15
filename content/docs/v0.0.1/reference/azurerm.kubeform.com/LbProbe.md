---
title: LbProbe
menu:
  docs_v0.0.1:
    identifier: lbprobe-azurerm.kubeform.com
    name: LbProbe
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## LbProbe
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LbProbe` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbProbeSpec](#LbProbeSpec)***||
| `status` | ***[LbProbeStatus](#LbProbeStatus)***||
## LbProbeSpec
##### (Appears on:[LbProbe](#LbProbe), [LbProbeStatus](#LbProbeStatus))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `intervalInSeconds` | ***int***| ***(Optional)*** |
| `loadBalancerRules` | ***[]string***| ***(Optional)*** |
| `loadbalancerID` | ***string***||
| `location` | ***string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `numberOfProbes` | ***int***| ***(Optional)*** |
| `port` | ***int***||
| `protocol` | ***string***| ***(Optional)*** |
| `requestPath` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
## LbProbeStatus
##### (Appears on:[LbProbe](#LbProbe))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbProbeSpec](#LbProbeSpec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
