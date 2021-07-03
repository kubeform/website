---
title: LoggingBillingAccountSink
menu:
  docs_v2021.07.01:
    identifier: loggingbillingaccountsink-google.kubeform.com
    name: LoggingBillingAccountSink
    parent: google.kubeform.com-reference
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

## LoggingBillingAccountSink
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `LoggingBillingAccountSink` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[LoggingBillingAccountSinkSpec](#loggingbillingaccountsinkspec)***||
| `status` | ***[LoggingBillingAccountSinkStatus](#loggingbillingaccountsinkstatus)***||
## LoggingBillingAccountSinkSpec

Appears on:[LoggingBillingAccountSink](#loggingbillingaccountsink), [LoggingBillingAccountSinkStatus](#loggingbillingaccountsinkstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `billingAccount` | ***string***||
| `destination` | ***string***||
| `filter` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `writerIdentity` | ***string***| ***(Optional)*** |
## LoggingBillingAccountSinkStatus

Appears on:[LoggingBillingAccountSink](#loggingbillingaccountsink)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[LoggingBillingAccountSinkSpec](#loggingbillingaccountsinkspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[LoggingBillingAccountSinkStatus](#loggingbillingaccountsinkstatus)

---
