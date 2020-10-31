---
title: IamAccountPasswordPolicy
menu:
  docs_v2020.10.30:
    identifier: iamaccountpasswordpolicy-aws.kubeform.com
    name: IamAccountPasswordPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.30
section_menu_id: reference
info:
  community: v0.3.0
  installer: v0.3.0
  version: v2020.10.30
---

## IamAccountPasswordPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `IamAccountPasswordPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[IamAccountPasswordPolicySpec](#iamaccountpasswordpolicyspec)***||
| `status` | ***[IamAccountPasswordPolicyStatus](#iamaccountpasswordpolicystatus)***||
## IamAccountPasswordPolicySpec

Appears on:[IamAccountPasswordPolicy](#iamaccountpasswordpolicy), [IamAccountPasswordPolicyStatus](#iamaccountpasswordpolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `allowUsersToChangePassword` | ***bool***| ***(Optional)*** |
| `expirePasswords` | ***bool***| ***(Optional)*** |
| `hardExpiry` | ***bool***| ***(Optional)*** |
| `maxPasswordAge` | ***int64***| ***(Optional)*** |
| `minimumPasswordLength` | ***int64***| ***(Optional)*** |
| `passwordReusePrevention` | ***int64***| ***(Optional)*** |
| `requireLowercaseCharacters` | ***bool***| ***(Optional)*** |
| `requireNumbers` | ***bool***| ***(Optional)*** |
| `requireSymbols` | ***bool***| ***(Optional)*** |
| `requireUppercaseCharacters` | ***bool***| ***(Optional)*** |
## IamAccountPasswordPolicyStatus

Appears on:[IamAccountPasswordPolicy](#iamaccountpasswordpolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[IamAccountPasswordPolicySpec](#iamaccountpasswordpolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[IamAccountPasswordPolicyStatus](#iamaccountpasswordpolicystatus)

---
