---
title: ExpressRouteCircuitPeering
menu:
  docs_v2020.10.30:
    identifier: expressroutecircuitpeering-azurerm.kubeform.com
    name: ExpressRouteCircuitPeering
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## ExpressRouteCircuitPeering
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `ExpressRouteCircuitPeering` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ExpressRouteCircuitPeeringSpec](#expressroutecircuitpeeringspec)***||
| `status` | ***[ExpressRouteCircuitPeeringStatus](#expressroutecircuitpeeringstatus)***||
## ExpressRouteCircuitPeeringSpec

Appears on:[ExpressRouteCircuitPeering](#expressroutecircuitpeering), [ExpressRouteCircuitPeeringStatus](#expressroutecircuitpeeringstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
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
