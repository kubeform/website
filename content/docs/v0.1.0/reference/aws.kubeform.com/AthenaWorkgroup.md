---
title: AthenaWorkgroup
menu:
  docs_v0.1.0:
    identifier: athenaworkgroup-aws.kubeform.com
    name: AthenaWorkgroup
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## AthenaWorkgroup
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AthenaWorkgroup` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AthenaWorkgroupSpec](#athenaworkgroupspec)***||
| `status` | ***[AthenaWorkgroupStatus](#athenaworkgroupstatus)***||
## AthenaWorkgroupSpec


Appears on:[AthenaWorkgroup](#athenaworkgroup), [AthenaWorkgroupStatus](#athenaworkgroupstatus)


| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `configuration` | ***[[]AthenaWorkgroupSpecConfiguration](#athenaworkgroupspecconfiguration)***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `state` | ***string***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## AthenaWorkgroupSpecConfiguration


Appears on:[AthenaWorkgroupSpec](#athenaworkgroupspec)


| Field | Type | Description |
| ------ | ----- | ----------- |
| `bytesScannedCutoffPerQuery` | ***int***| ***(Optional)*** |
| `enforceWorkgroupConfiguration` | ***bool***| ***(Optional)*** |
| `publishCloudwatchMetricsEnabled` | ***bool***| ***(Optional)*** |
| `resultConfiguration` | ***[[]AthenaWorkgroupSpecConfigurationResultConfiguration](#athenaworkgroupspecconfigurationresultconfiguration)***| ***(Optional)*** |
## AthenaWorkgroupSpecConfigurationResultConfiguration


Appears on:[AthenaWorkgroupSpecConfiguration](#athenaworkgroupspecconfiguration)


| Field | Type | Description |
| ------ | ----- | ----------- |
| `encryptionConfiguration` | ***[[]AthenaWorkgroupSpecConfigurationResultConfigurationEncryptionConfiguration](#athenaworkgroupspecconfigurationresultconfigurationencryptionconfiguration)***| ***(Optional)*** |
| `outputLocation` | ***string***| ***(Optional)*** |
## AthenaWorkgroupSpecConfigurationResultConfigurationEncryptionConfiguration


Appears on:[AthenaWorkgroupSpecConfigurationResultConfiguration](#athenaworkgroupspecconfigurationresultconfiguration)


| Field | Type | Description |
| ------ | ----- | ----------- |
| `encryptionOption` | ***string***| ***(Optional)*** |
| `kmsKeyArn` | ***string***| ***(Optional)*** |
## AthenaWorkgroupStatus


Appears on:[AthenaWorkgroup](#athenaworkgroup)


| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AthenaWorkgroupSpec](#athenaworkgroupspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
