---
title: WafWebACL
menu:
  docs_v2021.07.01:
    identifier: wafwebacl-aws.kubeform.com
    name: WafWebACL
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

## WafWebACL
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `WafWebACL` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[WafWebACLSpec](#wafwebaclspec)***||
| `status` | ***[WafWebACLStatus](#wafwebaclstatus)***||
## Phase(`string` alias)

Appears on:[WafWebACLStatus](#wafwebaclstatus)

## WafWebACLSpec

Appears on:[WafWebACL](#wafwebacl), [WafWebACLStatus](#wafwebaclstatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `arn` | ***string***| ***(Optional)*** |
| `defaultAction` | ***[[]WafWebACLSpecDefaultAction](#wafwebaclspecdefaultaction)***||
| `loggingConfiguration` | ***[[]WafWebACLSpecLoggingConfiguration](#wafwebaclspecloggingconfiguration)***| ***(Optional)*** |
| `metricName` | ***string***||
| `name` | ***string***||
| `rules` | ***[[]WafWebACLSpecRules](#wafwebaclspecrules)***| ***(Optional)*** |
## WafWebACLSpecDefaultAction

Appears on:[WafWebACLSpec](#wafwebaclspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
## WafWebACLSpecLoggingConfiguration

Appears on:[WafWebACLSpec](#wafwebaclspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `logDestination` | ***string***||
| `redactedFields` | ***[[]WafWebACLSpecLoggingConfigurationRedactedFields](#wafwebaclspecloggingconfigurationredactedfields)***| ***(Optional)*** |
## WafWebACLSpecLoggingConfigurationRedactedFields

Appears on:[WafWebACLSpecLoggingConfiguration](#wafwebaclspecloggingconfiguration)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `fieldToMatch` | ***[[]WafWebACLSpecLoggingConfigurationRedactedFieldsFieldToMatch](#wafwebaclspecloggingconfigurationredactedfieldsfieldtomatch)***||
## WafWebACLSpecLoggingConfigurationRedactedFieldsFieldToMatch

Appears on:[WafWebACLSpecLoggingConfigurationRedactedFields](#wafwebaclspecloggingconfigurationredactedfields)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `data` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## WafWebACLSpecRules

Appears on:[WafWebACLSpec](#wafwebaclspec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `action` | ***[[]WafWebACLSpecRulesAction](#wafwebaclspecrulesaction)***| ***(Optional)*** |
| `overrideAction` | ***[[]WafWebACLSpecRulesOverrideAction](#wafwebaclspecrulesoverrideaction)***| ***(Optional)*** |
| `priority` | ***int64***||
| `ruleID` | ***string***||
| `type` | ***string***| ***(Optional)*** |
## WafWebACLSpecRulesAction

Appears on:[WafWebACLSpecRules](#wafwebaclspecrules)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
## WafWebACLSpecRulesOverrideAction

Appears on:[WafWebACLSpecRules](#wafwebaclspecrules)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `type` | ***string***||
## WafWebACLStatus

Appears on:[WafWebACL](#wafwebacl)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[WafWebACLSpec](#wafwebaclspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
