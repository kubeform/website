---
title: CognitoIdentityProvider
menu:
  docs_v2020.10.13:
    identifier: cognitoidentityprovider-aws.kubeform.com
    name: CognitoIdentityProvider
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  community: v0.2.0
  installer: v0.2.0
  version: v2020.10.13
---

## CognitoIdentityProvider
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CognitoIdentityProvider` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CognitoIdentityProviderSpec](#cognitoidentityproviderspec)***||
| `status` | ***[CognitoIdentityProviderStatus](#cognitoidentityproviderstatus)***||
## CognitoIdentityProviderSpec

Appears on:[CognitoIdentityProvider](#cognitoidentityprovider), [CognitoIdentityProviderStatus](#cognitoidentityproviderstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `attributeMapping` | ***map[string]string***| ***(Optional)*** |
| `idpIdentifiers` | ***[]string***| ***(Optional)*** |
| `providerDetails` | ***map[string]string***||
| `providerName` | ***string***||
| `providerType` | ***string***||
| `userPoolID` | ***string***||
## CognitoIdentityProviderStatus

Appears on:[CognitoIdentityProvider](#cognitoidentityprovider)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CognitoIdentityProviderSpec](#cognitoidentityproviderspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CognitoIdentityProviderStatus](#cognitoidentityproviderstatus)

---
