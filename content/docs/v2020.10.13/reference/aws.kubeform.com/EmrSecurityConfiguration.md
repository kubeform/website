---
title: EmrSecurityConfiguration
menu:
  docs_v2020.10.13:
    identifier: emrsecurityconfiguration-aws.kubeform.com
    name: EmrSecurityConfiguration
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## EmrSecurityConfiguration
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `EmrSecurityConfiguration` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[EmrSecurityConfigurationSpec](#emrsecurityconfigurationspec)***||
| `status` | ***[EmrSecurityConfigurationStatus](#emrsecurityconfigurationstatus)***||
## EmrSecurityConfigurationSpec

Appears on:[EmrSecurityConfiguration](#emrsecurityconfiguration), [EmrSecurityConfigurationStatus](#emrsecurityconfigurationstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `configuration` | ***string***||
| `creationDate` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
## EmrSecurityConfigurationStatus

Appears on:[EmrSecurityConfiguration](#emrsecurityconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[EmrSecurityConfigurationSpec](#emrsecurityconfigurationspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[EmrSecurityConfigurationStatus](#emrsecurityconfigurationstatus)

---
