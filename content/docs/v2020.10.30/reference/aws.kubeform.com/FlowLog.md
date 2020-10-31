---
title: FlowLog
menu:
  docs_v2020.10.30:
    identifier: flowlog-aws.kubeform.com
    name: FlowLog
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## FlowLog
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `FlowLog` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[FlowLogSpec](#flowlogspec)***||
| `status` | ***[FlowLogStatus](#flowlogstatus)***||
## FlowLogSpec

Appears on:[FlowLog](#flowlog), [FlowLogStatus](#flowlogstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `eniID` | ***string***| ***(Optional)*** |
| `iamRoleArn` | ***string***| ***(Optional)*** |
| `logDestination` | ***string***| ***(Optional)*** |
| `logDestinationType` | ***string***| ***(Optional)*** |
| `logGroupName` | ***string***| ***(Optional)*** Deprecated|
| `subnetID` | ***string***| ***(Optional)*** |
| `trafficType` | ***string***||
| `vpcID` | ***string***| ***(Optional)*** |
## FlowLogStatus

Appears on:[FlowLog](#flowlog)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[FlowLogSpec](#flowlogspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[FlowLogStatus](#flowlogstatus)

---
