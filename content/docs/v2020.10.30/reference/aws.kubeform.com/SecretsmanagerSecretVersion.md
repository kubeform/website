---
title: SecretsmanagerSecretVersion
menu:
  docs_v2020.10.30:
    identifier: secretsmanagersecretversion-aws.kubeform.com
    name: SecretsmanagerSecretVersion
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## SecretsmanagerSecretVersion
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SecretsmanagerSecretVersion` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SecretsmanagerSecretVersionSpec](#secretsmanagersecretversionspec)***||
| `status` | ***[SecretsmanagerSecretVersionStatus](#secretsmanagersecretversionstatus)***||
## Phase(`string` alias)

Appears on:[SecretsmanagerSecretVersionStatus](#secretsmanagersecretversionstatus)

## SecretsmanagerSecretVersionSpec

Appears on:[SecretsmanagerSecretVersion](#secretsmanagersecretversion), [SecretsmanagerSecretVersionStatus](#secretsmanagersecretversionstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `secretID` | ***string***||
| `versionID` | ***string***| ***(Optional)*** |
| `versionStages` | ***[]string***| ***(Optional)*** |
## SecretsmanagerSecretVersionStatus

Appears on:[SecretsmanagerSecretVersion](#secretsmanagersecretversion)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SecretsmanagerSecretVersionSpec](#secretsmanagersecretversionspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `secret_binary` | ***string*** ||
| `secret_string` | ***string*** ||
