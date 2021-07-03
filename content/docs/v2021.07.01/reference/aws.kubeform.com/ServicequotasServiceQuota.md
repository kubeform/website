---
title: ServicequotasServiceQuota
menu:
  docs_v2021.07.01:
    identifier: servicequotasservicequota-aws.kubeform.com
    name: ServicequotasServiceQuota
    parent: aws.kubeform.com-reference
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

## ServicequotasServiceQuota
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ServicequotasServiceQuota` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ServicequotasServiceQuotaSpec](#servicequotasservicequotaspec)***||
| `status` | ***[ServicequotasServiceQuotaStatus](#servicequotasservicequotastatus)***||
## Phase(`string` alias)

Appears on:[ServicequotasServiceQuotaStatus](#servicequotasservicequotastatus)

## ServicequotasServiceQuotaSpec

Appears on:[ServicequotasServiceQuota](#servicequotasservicequota), [ServicequotasServiceQuotaStatus](#servicequotasservicequotastatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `adjustable` | ***bool***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `defaultValue` | ***float64***| ***(Optional)*** |
| `quotaCode` | ***string***||
| `quotaName` | ***string***| ***(Optional)*** |
| `requestID` | ***string***| ***(Optional)*** |
| `requestStatus` | ***string***| ***(Optional)*** |
| `serviceCode` | ***string***||
| `serviceName` | ***string***| ***(Optional)*** |
| `value` | ***float64***||
## ServicequotasServiceQuotaStatus

Appears on:[ServicequotasServiceQuota](#servicequotasservicequota)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ServicequotasServiceQuotaSpec](#servicequotasservicequotaspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
