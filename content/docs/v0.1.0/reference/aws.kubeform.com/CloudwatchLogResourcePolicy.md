---
title: CloudwatchLogResourcePolicy
menu:
  docs_v0.1.0:
    identifier: cloudwatchlogresourcepolicy-aws.kubeform.com
    name: CloudwatchLogResourcePolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## CloudwatchLogResourcePolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CloudwatchLogResourcePolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CloudwatchLogResourcePolicySpec](#cloudwatchlogresourcepolicyspec)***||
| `status` | ***[CloudwatchLogResourcePolicyStatus](#cloudwatchlogresourcepolicystatus)***||
## CloudwatchLogResourcePolicySpec

Appears on:[CloudwatchLogResourcePolicy](#cloudwatchlogresourcepolicy), [CloudwatchLogResourcePolicyStatus](#cloudwatchlogresourcepolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `policyDocument` | ***string***||
| `policyName` | ***string***||
## CloudwatchLogResourcePolicyStatus

Appears on:[CloudwatchLogResourcePolicy](#cloudwatchlogresourcepolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CloudwatchLogResourcePolicySpec](#cloudwatchlogresourcepolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CloudwatchLogResourcePolicyStatus](#cloudwatchlogresourcepolicystatus)

---
