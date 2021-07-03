---
title: AppEngineDomainMapping
menu:
  docs_v2021.07.01:
    identifier: appenginedomainmapping-google.kubeform.com
    name: AppEngineDomainMapping
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

## AppEngineDomainMapping
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `AppEngineDomainMapping` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppEngineDomainMappingSpec](#appenginedomainmappingspec)***||
| `status` | ***[AppEngineDomainMappingStatus](#appenginedomainmappingstatus)***||
## AppEngineDomainMappingSpec

Appears on:[AppEngineDomainMapping](#appenginedomainmapping), [AppEngineDomainMappingStatus](#appenginedomainmappingstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `domainName` | ***string***||
| `name` | ***string***| ***(Optional)*** |
| `overrideStrategy` | ***string***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `resourceRecords` | ***[[]AppEngineDomainMappingSpecResourceRecords](#appenginedomainmappingspecresourcerecords)***| ***(Optional)*** |
| `sslSettings` | ***[[]AppEngineDomainMappingSpecSslSettings](#appenginedomainmappingspecsslsettings)***| ***(Optional)*** |
## AppEngineDomainMappingSpecResourceRecords

Appears on:[AppEngineDomainMappingSpec](#appenginedomainmappingspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
| `rrdata` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## AppEngineDomainMappingSpecSslSettings

Appears on:[AppEngineDomainMappingSpec](#appenginedomainmappingspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `certificateID` | ***string***| ***(Optional)*** |
| `pendingManagedCertificateID` | ***string***| ***(Optional)*** |
| `sslManagementType` | ***string***| ***(Optional)*** |
## AppEngineDomainMappingStatus

Appears on:[AppEngineDomainMapping](#appenginedomainmapping)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppEngineDomainMappingSpec](#appenginedomainmappingspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppEngineDomainMappingStatus](#appenginedomainmappingstatus)

---