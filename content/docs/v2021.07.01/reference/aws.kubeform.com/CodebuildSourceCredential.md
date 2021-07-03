---
title: CodebuildSourceCredential
menu:
  docs_v2021.07.01:
    identifier: codebuildsourcecredential-aws.kubeform.com
    name: CodebuildSourceCredential
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2021.07.01
section_menu_id: reference
info:
  aws: v0.1.0
  azurerm: v0.1.0
  digitalocean: v0.1.0
  google: v0.1.0
  installer: v2021.07.01
  linode: v0.1.0
  version: v2021.07.01
---

## CodebuildSourceCredential
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CodebuildSourceCredential` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CodebuildSourceCredentialSpec](#codebuildsourcecredentialspec)***||
| `status` | ***[CodebuildSourceCredentialStatus](#codebuildsourcecredentialstatus)***||
## CodebuildSourceCredentialSpec

Appears on:[CodebuildSourceCredential](#codebuildsourcecredential), [CodebuildSourceCredentialStatus](#codebuildsourcecredentialstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `arn` | ***string***| ***(Optional)*** |
| `authType` | ***string***||
| `serverType` | ***string***||
| `userName` | ***string***| ***(Optional)*** |
## CodebuildSourceCredentialStatus

Appears on:[CodebuildSourceCredential](#codebuildsourcecredential)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CodebuildSourceCredentialSpec](#codebuildsourcecredentialspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CodebuildSourceCredentialStatus](#codebuildsourcecredentialstatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `token` | ***string*** ||
