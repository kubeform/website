---
title: IotDpsCertificate
menu:
  docs_v0.0.1:
    identifier: iotdpscertificate-azurerm.kubeform.com
    name: IotDpsCertificate
    parent: azurerm.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## IotDpsCertificate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `azurerm.kubeform.com/v1alpha1` |
|    `kind` | string | `IotDpsCertificate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IotDpsCertificateSpec](#iotdpscertificatespec)***||
| `status` | ***[IotDpsCertificateStatus](#iotdpscertificatestatus)***||
## IotDpsCertificateSpec

Appears on:[IotDpsCertificate](#iotdpscertificate), [IotDpsCertificateStatus](#iotdpscertificatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `iotDpsName` | ***string***||
| `name` | ***string***||
| `resourceGroupName` | ***string***||
## IotDpsCertificateStatus

Appears on:[IotDpsCertificate](#iotdpscertificate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IotDpsCertificateSpec](#iotdpscertificatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `certificate_content` | ***string*** ||