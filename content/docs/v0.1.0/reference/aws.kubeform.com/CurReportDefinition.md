---
title: CurReportDefinition
menu:
  docs_v0.1.0:
    identifier: curreportdefinition-aws.kubeform.com
    name: CurReportDefinition
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## CurReportDefinition
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CurReportDefinition` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CurReportDefinitionSpec](#curreportdefinitionspec)***||
| `status` | ***[CurReportDefinitionStatus](#curreportdefinitionstatus)***||
## CurReportDefinitionSpec

Appears on:[CurReportDefinition](#curreportdefinition), [CurReportDefinitionStatus](#curreportdefinitionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `additionalArtifacts` | ***[]string***| ***(Optional)*** |
| `additionalSchemaElements` | ***[]string***||
| `compression` | ***string***||
| `format` | ***string***||
| `reportName` | ***string***||
| `s3Bucket` | ***string***||
| `s3Prefix` | ***string***| ***(Optional)*** |
| `s3Region` | ***string***||
| `timeUnit` | ***string***||
## CurReportDefinitionStatus

Appears on:[CurReportDefinition](#curreportdefinition)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CurReportDefinitionSpec](#curreportdefinitionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CurReportDefinitionStatus](#curreportdefinitionstatus)

---