---
title: CognitoIdentityPoolRolesAttachment
menu:
  docs_v0.1.0:
    identifier: cognitoidentitypoolrolesattachment-aws.kubeform.com
    name: CognitoIdentityPoolRolesAttachment
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## CognitoIdentityPoolRolesAttachment
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `CognitoIdentityPoolRolesAttachment` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[CognitoIdentityPoolRolesAttachmentSpec](#cognitoidentitypoolrolesattachmentspec)***||
| `status` | ***[CognitoIdentityPoolRolesAttachmentStatus](#cognitoidentitypoolrolesattachmentstatus)***||
## CognitoIdentityPoolRolesAttachmentSpec

Appears on:[CognitoIdentityPoolRolesAttachment](#cognitoidentitypoolrolesattachment), [CognitoIdentityPoolRolesAttachmentStatus](#cognitoidentitypoolrolesattachmentstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `identityPoolID` | ***string***||
| `roleMapping` | ***[[]CognitoIdentityPoolRolesAttachmentSpecRoleMapping](#cognitoidentitypoolrolesattachmentspecrolemapping)***| ***(Optional)*** |
| `roles` | ***map[string]kubeform.dev/kubeform/apis/aws/v1alpha1.CognitoIdentityPoolRolesAttachmentSpecRoles***||
## CognitoIdentityPoolRolesAttachmentSpecRoleMapping

Appears on:[CognitoIdentityPoolRolesAttachmentSpec](#cognitoidentitypoolrolesattachmentspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `ambiguousRoleResolution` | ***string***| ***(Optional)*** |
| `identityProvider` | ***string***||
| `mappingRule` | ***[[]CognitoIdentityPoolRolesAttachmentSpecRoleMappingMappingRule](#cognitoidentitypoolrolesattachmentspecrolemappingmappingrule)***| ***(Optional)*** |
| `type` | ***string***||
## CognitoIdentityPoolRolesAttachmentSpecRoleMappingMappingRule

Appears on:[CognitoIdentityPoolRolesAttachmentSpecRoleMapping](#cognitoidentitypoolrolesattachmentspecrolemapping)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `claim` | ***string***||
| `matchType` | ***string***||
| `roleArn` | ***string***||
| `value` | ***string***||
## CognitoIdentityPoolRolesAttachmentStatus

Appears on:[CognitoIdentityPoolRolesAttachment](#cognitoidentitypoolrolesattachment)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[CognitoIdentityPoolRolesAttachmentSpec](#cognitoidentitypoolrolesattachmentspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[CognitoIdentityPoolRolesAttachmentStatus](#cognitoidentitypoolrolesattachmentstatus)

---
