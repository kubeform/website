---
title: Cloud9EnvironmentEc2
menu:
  docs_v0.0.1:
    identifier: cloud9environmentec2-aws.kubeform.com
    name: Cloud9EnvironmentEc2
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## Cloud9EnvironmentEc2
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `Cloud9EnvironmentEc2` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[Cloud9EnvironmentEc2Spec](#Cloud9EnvironmentEc2Spec)***||
| `status` | ***[Cloud9EnvironmentEc2Status](#Cloud9EnvironmentEc2Status)***||
## Cloud9EnvironmentEc2Spec
##### (Appears on:[Cloud9EnvironmentEc2](#Cloud9EnvironmentEc2), [Cloud9EnvironmentEc2Status](#Cloud9EnvironmentEc2Status))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `automaticStopTimeMinutes` | ***int***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `instanceType` | ***string***||
| `name` | ***string***||
| `ownerArn` | ***string***| ***(Optional)*** |
| `subnetID` | ***string***| ***(Optional)*** |
| `type` | ***string***| ***(Optional)*** |
## Cloud9EnvironmentEc2Status
##### (Appears on:[Cloud9EnvironmentEc2](#Cloud9EnvironmentEc2))
| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[Cloud9EnvironmentEc2Spec](#Cloud9EnvironmentEc2Spec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
