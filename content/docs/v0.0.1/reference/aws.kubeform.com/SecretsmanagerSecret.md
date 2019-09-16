---
title: SecretsmanagerSecret
menu:
  docs_v0.0.1:
    identifier: secretsmanagersecret-aws.kubeform.com
    name: SecretsmanagerSecret
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.0.1
section_menu_id: reference
info:
  version: v0.0.1
---

## SecretsmanagerSecret
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `SecretsmanagerSecret` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[SecretsmanagerSecretSpec](#secretsmanagersecretspec)***||
| `status` | ***[SecretsmanagerSecretStatus](#secretsmanagersecretstatus)***||
## SecretsmanagerSecretSpec

Appears on:[SecretsmanagerSecret](#secretsmanagersecret), [SecretsmanagerSecretStatus](#secretsmanagersecretstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `kmsKeyID` | ***string***| ***(Optional)*** |
| `name` | ***string***| ***(Optional)*** |
| `namePrefix` | ***string***| ***(Optional)*** |
| `policy` | ***string***| ***(Optional)*** |
| `recoveryWindowInDays` | ***int***| ***(Optional)*** |
| `rotationEnabled` | ***bool***| ***(Optional)*** |
| `rotationLambdaArn` | ***string***| ***(Optional)*** |
| `rotationRules` | ***[[]SecretsmanagerSecretSpecRotationRules](#secretsmanagersecretspecrotationrules)***| ***(Optional)*** |
| `tags` | ***map[string]string***| ***(Optional)*** |
## SecretsmanagerSecretSpecRotationRules

Appears on:[SecretsmanagerSecretSpec](#secretsmanagersecretspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `automaticallyAfterDays` | ***int***||
## SecretsmanagerSecretStatus

Appears on:[SecretsmanagerSecret](#secretsmanagersecret)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[SecretsmanagerSecretSpec](#secretsmanagersecretspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis.State***| ***(Optional)*** |
---
