---
title: ExpressRouteCircuit
menu:
  docs_v2020.10.30:
    identifier: expressroutecircuit-azurerm.kubeform.com
    name: ExpressRouteCircuit
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ExpressRouteCircuit
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ExpressRouteCircuit` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ExpressRouteCircuitSpec](#expressroutecircuitspec)***||
| `status` | ***[ExpressRouteCircuitStatus](#expressroutecircuitstatus)***||
## ExpressRouteCircuitSpec

Appears on:[ExpressRouteCircuit](#expressroutecircuit), [ExpressRouteCircuitStatus](#expressroutecircuitstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `allowClassicOperations` | ***bool***| ***(Optional)*** |
| `bandwidthInMbps` | ***int64***||
| `location` | ***string***||
| `name` | ***string***||
| `peeringLocation` | ***string***||
| `resourceGroupName` | ***string***||
| `serviceProviderName` | ***string***||
| `serviceProviderProvisioningState` | ***string***| ***(Optional)*** |
| `sku` | ***[[]ExpressRouteCircuitSpecSku](#expressroutecircuitspecsku)***||
| `tags` | ***map[string]string***| ***(Optional)*** |
## ExpressRouteCircuitSpecSku

Appears on:[ExpressRouteCircuitSpec](#expressroutecircuitspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `family` | ***string***||
| `tier` | ***string***||
## ExpressRouteCircuitStatus

Appears on:[ExpressRouteCircuit](#expressroutecircuit)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ExpressRouteCircuitSpec](#expressroutecircuitspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ExpressRouteCircuitStatus](#expressroutecircuitstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `service_key` | ***string*** ||
