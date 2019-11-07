---
title: CloudwatchEventPermission
menu:
  docs_v0.1.0:
    identifier: cloudwatcheventpermission-aws.kubeform.com
    name: CloudwatchEventPermission
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## CloudwatchEventPermission
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudwatchEventPermission` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudwatchEventPermissionSpec](#cloudwatcheventpermissionspec)***||
| `status` | ***[CloudwatchEventPermissionStatus](#cloudwatcheventpermissionstatus)***||
## CloudwatchEventPermissionSpec

Appears on:[CloudwatchEventPermission](#cloudwatcheventpermission), [CloudwatchEventPermissionStatus](#cloudwatcheventpermissionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `action` | ***string***| ***(Optional)*** |
| `condition` | ***[[]CloudwatchEventPermissionSpecCondition](#cloudwatcheventpermissionspeccondition)***| ***(Optional)*** |
| `principal` | ***string***||
| `statementID` | ***string***||
## CloudwatchEventPermissionSpecCondition

Appears on:[CloudwatchEventPermissionSpec](#cloudwatcheventpermissionspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `key` | ***string***||
| `type` | ***string***||
| `value` | ***string***||
## CloudwatchEventPermissionStatus

Appears on:[CloudwatchEventPermission](#cloudwatcheventpermission)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudwatchEventPermissionSpec](#cloudwatcheventpermissionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudwatchEventPermissionStatus](#cloudwatcheventpermissionstatus)

---
