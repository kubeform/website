---
title: PublicIP
menu:
  docs_v2020.10.13:
    identifier: publicip-azurerm.kubeform.com
    name: PublicIP
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## PublicIP
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `PublicIP` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[PublicIPSpec](#publicipspec)***||
| `status` | ***[PublicIPStatus](#publicipstatus)***||
## Phase(`string` alias)

Appears on:[PublicIPStatus](#publicipstatus)

## PublicIPSpec

Appears on:[PublicIP](#publicip), [PublicIPStatus](#publicipstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allocationMethod` | ***string***| ***(Optional)*** |
| `domainNameLabel` | ***string***| ***(Optional)*** |
| `fqdn` | ***string***| ***(Optional)*** |
| `idleTimeoutInMinutes` | ***int64***| ***(Optional)*** |
| `ipAddress` | ***string***| ***(Optional)*** |
| `ipVersion` | ***string***| ***(Optional)*** |
| `location` | ***string***||
| `name` | ***string***||
| `publicIPAddressAllocation` | ***string***| ***(Optional)*** Deprecated|
| `publicIPPrefixID` | ***string***| ***(Optional)*** |
| `resourceGroupName` | ***string***||
| `reverseFqdn` | ***string***| ***(Optional)*** |
| `sku` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
| `zones` | ***[]string***| ***(Optional)*** |
## PublicIPStatus

Appears on:[PublicIP](#publicip)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[PublicIPSpec](#publicipspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
