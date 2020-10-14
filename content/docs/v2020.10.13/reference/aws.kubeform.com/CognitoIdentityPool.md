---
title: CognitoIdentityPool
menu:
  docs_v2020.10.13:
    identifier: cognitoidentitypool-aws.kubeform.com
    name: CognitoIdentityPool
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## CognitoIdentityPool
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CognitoIdentityPool` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CognitoIdentityPoolSpec](#cognitoidentitypoolspec)***||
| `status` | ***[CognitoIdentityPoolStatus](#cognitoidentitypoolstatus)***||
## CognitoIdentityPoolSpec

Appears on:[CognitoIdentityPool](#cognitoidentitypool), [CognitoIdentityPoolStatus](#cognitoidentitypoolstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allowUnauthenticatedIdentities` | ***bool***| ***(Optional)*** |
| `arn` | ***string***| ***(Optional)*** |
| `cognitoIdentityProviders` | ***[[]CognitoIdentityPoolSpecCognitoIdentityProviders](#cognitoidentitypoolspeccognitoidentityproviders)***| ***(Optional)*** |
| `developerProviderName` | ***string***| ***(Optional)*** |
| `identityPoolName` | ***string***||
| `openidConnectProviderArns` | ***[]string***| ***(Optional)*** |
| `samlProviderArns` | ***[]string***| ***(Optional)*** |
| `supportedLoginProviders` | ***map[string]string***| ***(Optional)*** |
## CognitoIdentityPoolSpecCognitoIdentityProviders

Appears on:[CognitoIdentityPoolSpec](#cognitoidentitypoolspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `clientID` | ***string***| ***(Optional)*** |
| `providerName` | ***string***| ***(Optional)*** |
| `serverSideTokenCheck` | ***bool***| ***(Optional)*** |
## CognitoIdentityPoolStatus

Appears on:[CognitoIdentityPool](#cognitoidentitypool)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CognitoIdentityPoolSpec](#cognitoidentitypoolspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CognitoIdentityPoolStatus](#cognitoidentitypoolstatus)

---
