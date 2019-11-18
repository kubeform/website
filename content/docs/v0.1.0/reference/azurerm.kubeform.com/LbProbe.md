---
title: LbProbe
menu:
  docs_v0.1.0:
    identifier: lbprobe-azurerm.kubeform.com
    name: LbProbe
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## LbProbe
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LbProbe` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbProbeSpec](#lbprobespec)***||
| `status` | ***[LbProbeStatus](#lbprobestatus)***||
## LbProbeSpec

Appears on:[LbProbe](#lbprobe), [LbProbeStatus](#lbprobestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `intervalInSeconds` | ***int64***| ***(Optional)*** |
| `loadBalancerRules` | ***[]string***| ***(Optional)*** |
| `loadbalancerID` | ***string***||
| `location` | ***string***| ***(Optional)*** Deprecated|
| `name` | ***string***||
| `numberOfProbes` | ***int64***| ***(Optional)*** |
| `port` | ***int64***||
| `protocol` | ***string***| ***(Optional)*** |
| `requestPath` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
## LbProbeStatus

Appears on:[LbProbe](#lbprobe)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbProbeSpec](#lbprobespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LbProbeStatus](#lbprobestatus)

---
