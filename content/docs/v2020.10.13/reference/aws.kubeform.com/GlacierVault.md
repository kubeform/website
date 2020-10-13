---
title: GlacierVault
menu:
  docs_v2020.10.13:
    identifier: glaciervault-aws.kubeform.com
    name: GlacierVault
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## GlacierVault
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `GlacierVault` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[GlacierVaultSpec](#glaciervaultspec)***||
| `status` | ***[GlacierVaultStatus](#glaciervaultstatus)***||
## GlacierVaultSpec

Appears on:[GlacierVault](#glaciervault), [GlacierVaultStatus](#glaciervaultstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `accessPolicy` | ***string***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `location` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `notification` | ***[[]GlacierVaultSpecNotification](#glaciervaultspecnotification)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## GlacierVaultSpecNotification

Appears on:[GlacierVaultSpec](#glaciervaultspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `events` | ***[]string***||
| `snsTopic` | ***string***||
## GlacierVaultStatus

Appears on:[GlacierVault](#glaciervault)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[GlacierVaultSpec](#glaciervaultspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[GlacierVaultStatus](#glaciervaultstatus)

---
