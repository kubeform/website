---
title: LbOutboundRule
menu:
  docs_v2021.07.01:
    identifier: lboutboundrule-azurerm.kubeform.com
    name: LbOutboundRule
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

## LbOutboundRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `LbOutboundRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LbOutboundRuleSpec](#lboutboundrulespec)***||
| `status` | ***[LbOutboundRuleStatus](#lboutboundrulestatus)***||
## LbOutboundRuleSpec

Appears on:[LbOutboundRule](#lboutboundrule), [LbOutboundRuleStatus](#lboutboundrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allocatedOutboundPorts` | ***int64***| ***(Optional)*** |
| `backendAddressPoolID` | ***string***||
| `enableTcpReset` | ***bool***| ***(Optional)*** |
| `frontendIPConfiguration` | ***[[]LbOutboundRuleSpecFrontendIPConfiguration](#lboutboundrulespecfrontendipconfiguration)***| ***(Optional)*** |
| `idleTimeoutInMinutes` | ***int64***| ***(Optional)*** |
| `loadbalancerID` | ***string***||
| `name` | ***string***||
| `protocol` | ***string***||
| `resourceGroupName` | ***string***||
## LbOutboundRuleSpecFrontendIPConfiguration

Appears on:[LbOutboundRuleSpec](#lboutboundrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ID` | ***string***| ***(Optional)*** |
| `name` | ***string***||
## LbOutboundRuleStatus

Appears on:[LbOutboundRule](#lboutboundrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LbOutboundRuleSpec](#lboutboundrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LbOutboundRuleStatus](#lboutboundrulestatus)

---
