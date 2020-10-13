---
title: CodebuildWebhook
menu:
  docs_v2020.10.13:
    identifier: codebuildwebhook-aws.kubeform.com
    name: CodebuildWebhook
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## CodebuildWebhook
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CodebuildWebhook` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CodebuildWebhookSpec](#codebuildwebhookspec)***||
| `status` | ***[CodebuildWebhookStatus](#codebuildwebhookstatus)***||
## CodebuildWebhookSpec

Appears on:[CodebuildWebhook](#codebuildwebhook), [CodebuildWebhookStatus](#codebuildwebhookstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `branchFilter` | ***string***| ***(Optional)*** |
| `payloadURL` | ***string***| ***(Optional)*** |
| `projectName` | ***string***||
| `url` | ***string***| ***(Optional)*** |
## CodebuildWebhookStatus

Appears on:[CodebuildWebhook](#codebuildwebhook)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CodebuildWebhookSpec](#codebuildwebhookspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CodebuildWebhookStatus](#codebuildwebhookstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `secret` | ***string*** ||
