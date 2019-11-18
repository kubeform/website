---
title: ExpressRouteCircuitPeering
menu:
  docs_v0.1.0:
    identifier: expressroutecircuitpeering-azurerm.kubeform.com
    name: ExpressRouteCircuitPeering
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## ExpressRouteCircuitPeering
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ExpressRouteCircuitPeering` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ExpressRouteCircuitPeeringSpec](#expressroutecircuitpeeringspec)***||
| `status` | ***[ExpressRouteCircuitPeeringStatus](#expressroutecircuitpeeringstatus)***||
## ExpressRouteCircuitPeeringSpec

Appears on:[ExpressRouteCircuitPeering](#expressroutecircuitpeering), [ExpressRouteCircuitPeeringStatus](#expressroutecircuitpeeringstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `azureAsn` | ***int64***| ***(Optional)*** |
| `expressRouteCircuitName` | ***string***||
| `microsoftPeeringConfig` | ***[[]ExpressRouteCircuitPeeringSpecMicrosoftPeeringConfig](#expressroutecircuitpeeringspecmicrosoftpeeringconfig)***| ***(Optional)*** |
| `peerAsn` | ***int64***| ***(Optional)*** |
| `peeringType` | ***string***||
| `primaryAzurePort` | ***string***| ***(Optional)*** |
| `primaryPeerAddressPrefix` | ***string***||
| `resourceGroupName` | ***string***||
| `secondaryAzurePort` | ***string***| ***(Optional)*** |
| `secondaryPeerAddressPrefix` | ***string***||
| `vlanID` | ***int64***||
## ExpressRouteCircuitPeeringSpecMicrosoftPeeringConfig

Appears on:[ExpressRouteCircuitPeeringSpec](#expressroutecircuitpeeringspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `advertisedPublicPrefixes` | ***[]string***||
## ExpressRouteCircuitPeeringStatus

Appears on:[ExpressRouteCircuitPeering](#expressroutecircuitpeering)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ExpressRouteCircuitPeeringSpec](#expressroutecircuitpeeringspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ExpressRouteCircuitPeeringStatus](#expressroutecircuitpeeringstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `shared_key` | ***string*** ||
