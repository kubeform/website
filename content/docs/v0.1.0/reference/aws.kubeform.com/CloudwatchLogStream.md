---
title: CloudwatchLogStream
menu:
  docs_v0.1.0:
    identifier: cloudwatchlogstream-aws.kubeform.com
    name: CloudwatchLogStream
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## CloudwatchLogStream
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudwatchLogStream` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudwatchLogStreamSpec](#cloudwatchlogstreamspec)***||
| `status` | ***[CloudwatchLogStreamStatus](#cloudwatchlogstreamstatus)***||
## CloudwatchLogStreamSpec

Appears on:[CloudwatchLogStream](#cloudwatchlogstream), [CloudwatchLogStreamStatus](#cloudwatchlogstreamstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `logGroupName` | ***string***||
| `name` | ***string***||
## CloudwatchLogStreamStatus

Appears on:[CloudwatchLogStream](#cloudwatchlogstream)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudwatchLogStreamSpec](#cloudwatchlogstreamspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudwatchLogStreamStatus](#cloudwatchlogstreamstatus)

---
