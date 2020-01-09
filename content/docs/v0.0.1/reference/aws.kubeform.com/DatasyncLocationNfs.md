---
title: DatasyncLocationNfs
menu:
  docs_v0.0.1:
    identifier: datasynclocationnfs-aws.kubeform.com
    name: DatasyncLocationNfs
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## DatasyncLocationNfs
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `DatasyncLocationNfs` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[DatasyncLocationNfsSpec](#datasynclocationnfsspec)***||
| `status` | ***[DatasyncLocationNfsStatus](#datasynclocationnfsstatus)***||
## DatasyncLocationNfsSpec

Appears on:[DatasyncLocationNfs](#datasynclocationnfs), [DatasyncLocationNfsStatus](#datasynclocationnfsstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `onPremConfig` | ***[[]DatasyncLocationNfsSpecOnPremConfig](#datasynclocationnfsspeconpremconfig)***||
| `serverHostname` | ***string***||
| `subdirectory` | ***string***||
| `tags` | ***map[string]string***| ***(Optional)*** |
| `uri` | ***string***| ***(Optional)*** |
## DatasyncLocationNfsSpecOnPremConfig

Appears on:[DatasyncLocationNfsSpec](#datasynclocationnfsspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `agentArns` | ***[]string***||
## DatasyncLocationNfsStatus

Appears on:[DatasyncLocationNfs](#datasynclocationnfs)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[DatasyncLocationNfsSpec](#datasynclocationnfsspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---