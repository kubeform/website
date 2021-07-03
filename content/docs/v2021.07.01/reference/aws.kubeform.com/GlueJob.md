---
title: GlueJob
menu:
  docs_v2021.07.01:
    identifier: gluejob-aws.kubeform.com
    name: GlueJob
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

## GlueJob
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GlueJob` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GlueJobSpec](#gluejobspec)***||
| `status` | ***[GlueJobStatus](#gluejobstatus)***||
## GlueJobSpec

Appears on:[GlueJob](#gluejob), [GlueJobStatus](#gluejobstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allocatedCapacity` | ***int64***| ***(Optional)*** Deprecated|
| `command` | ***[[]GlueJobSpecCommand](#gluejobspeccommand)***||
| `connections` | ***[]string***| ***(Optional)*** |
| `defaultArguments` | ***map[string]string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `executionProperty` | ***[[]GlueJobSpecExecutionProperty](#gluejobspecexecutionproperty)***| ***(Optional)*** |
| `maxCapacity` | ***float64***| ***(Optional)*** |
| `maxRetries` | ***int64***| ***(Optional)*** |
| `name` | ***string***||
| `roleArn` | ***string***||
| `securityConfiguration` | ***string***| ***(Optional)*** |
| `timeout` | ***int64***| ***(Optional)*** |
## GlueJobSpecCommand

Appears on:[GlueJobSpec](#gluejobspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `name` | ***string***| ***(Optional)*** |
| `pythonVersion` | ***string***| ***(Optional)*** |
| `scriptLocation` | ***string***||
## GlueJobSpecExecutionProperty

Appears on:[GlueJobSpec](#gluejobspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `maxConcurrentRuns` | ***int64***| ***(Optional)*** |
## GlueJobStatus

Appears on:[GlueJob](#gluejob)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GlueJobSpec](#gluejobspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[GlueJobStatus](#gluejobstatus)

---
