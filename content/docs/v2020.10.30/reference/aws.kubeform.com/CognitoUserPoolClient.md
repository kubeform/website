---
title: CognitoUserPoolClient
menu:
  docs_v2020.10.30:
    identifier: cognitouserpoolclient-aws.kubeform.com
    name: CognitoUserPoolClient
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## CognitoUserPoolClient
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CognitoUserPoolClient` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CognitoUserPoolClientSpec](#cognitouserpoolclientspec)***||
| `status` | ***[CognitoUserPoolClientStatus](#cognitouserpoolclientstatus)***||
## CognitoUserPoolClientSpec

Appears on:[CognitoUserPoolClient](#cognitouserpoolclient), [CognitoUserPoolClientStatus](#cognitouserpoolclientstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allowedOauthFlows` | ***[]string***| ***(Optional)*** |
| `allowedOauthFlowsUserPoolClient` | ***bool***| ***(Optional)*** |
| `allowedOauthScopes` | ***[]string***| ***(Optional)*** |
| `callbackUrls` | ***[]string***| ***(Optional)*** |
| `clientSecret` | ***string***| ***(Optional)*** |
| `defaultRedirectURI` | ***string***| ***(Optional)*** |
| `explicitAuthFlows` | ***[]string***| ***(Optional)*** |
| `generateSecret` | ***bool***| ***(Optional)*** |
| `logoutUrls` | ***[]string***| ***(Optional)*** |
| `name` | ***string***||
| `readAttributes` | ***[]string***| ***(Optional)*** |
| `refreshTokenValidity` | ***int64***| ***(Optional)*** |
| `supportedIdentityProviders` | ***[]string***| ***(Optional)*** |
| `userPoolID` | ***string***||
| `writeAttributes` | ***[]string***| ***(Optional)*** |
## CognitoUserPoolClientStatus

Appears on:[CognitoUserPoolClient](#cognitouserpoolclient)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CognitoUserPoolClientSpec](#cognitouserpoolclientspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CognitoUserPoolClientStatus](#cognitouserpoolclientstatus)

---
