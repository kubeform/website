---
title: ConfigOrganizationManagedRule
menu:
  docs_v2021.07.01:
    identifier: configorganizationmanagedrule-aws.kubeform.com
    name: ConfigOrganizationManagedRule
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

## ConfigOrganizationManagedRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `ConfigOrganizationManagedRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[ConfigOrganizationManagedRuleSpec](#configorganizationmanagedrulespec)***||
| `status` | ***[ConfigOrganizationManagedRuleStatus](#configorganizationmanagedrulestatus)***||
## ConfigOrganizationManagedRuleSpec

Appears on:[ConfigOrganizationManagedRule](#configorganizationmanagedrule), [ConfigOrganizationManagedRuleStatus](#configorganizationmanagedrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `description` | ***string***| ***(Optional)*** |
| `excludedAccounts` | ***[]string***| ***(Optional)*** |
| `inputParameters` | ***string***| ***(Optional)*** |
| `maximumExecutionFrequency` | ***string***| ***(Optional)*** |
| `name` | ***string***||
| `resourceIDScope` | ***string***| ***(Optional)*** |
| `resourceTypesScope` | ***[]string***| ***(Optional)*** |
| `ruleIdentifier` | ***string***||
| `tagKeyScope` | ***string***| ***(Optional)*** |
| `tagValueScope` | ***string***| ***(Optional)*** |
## ConfigOrganizationManagedRuleStatus

Appears on:[ConfigOrganizationManagedRule](#configorganizationmanagedrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[ConfigOrganizationManagedRuleSpec](#configorganizationmanagedrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[ConfigOrganizationManagedRuleStatus](#configorganizationmanagedrulestatus)

---
