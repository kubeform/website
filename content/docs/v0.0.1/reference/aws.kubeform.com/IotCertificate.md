---
title: IotCertificate
menu:
  docs_v0.0.1:
    identifier: iotcertificate-aws.kubeform.com
    name: IotCertificate
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## IotCertificate
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IotCertificate` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IotCertificateSpec](#iotcertificatespec)***||
| `status` | ***[IotCertificateStatus](#iotcertificatestatus)***||
## IotCertificateSpec

Appears on:[IotCertificate](#iotcertificate), [IotCertificateStatus](#iotcertificatestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `active` | ***bool***||
| `arn` | ***string***| ***(Optional)*** |
| `csr` | ***string***||
## IotCertificateStatus

Appears on:[IotCertificate](#iotcertificate)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IotCertificateSpec](#iotcertificatespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---