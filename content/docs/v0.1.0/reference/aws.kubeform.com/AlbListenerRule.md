---
title: AlbListenerRule
menu:
  docs_v0.1.0:
    identifier: alblistenerrule-aws.kubeform.com
    name: AlbListenerRule
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v0.1.0
section_menu_id: reference
info:
  version: v0.1.0
---

## AlbListenerRule
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AlbListenerRule` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AlbListenerRuleSpec](#alblistenerrulespec)***||
| `status` | ***[AlbListenerRuleStatus](#alblistenerrulestatus)***||
## AlbListenerRuleSpec

Appears on:[AlbListenerRule](#alblistenerrule), [AlbListenerRuleStatus](#alblistenerrulestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `secretRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `action` | ***[[]AlbListenerRuleSpecAction](#alblistenerrulespecaction)***||
| `arn` | ***string***| ***(Optional)*** |
| `condition` | ***[[]AlbListenerRuleSpecCondition](#alblistenerrulespeccondition)***||
| `listenerArn` | ***string***||
| `priority` | ***int***| ***(Optional)*** |
## AlbListenerRuleSpecAction

Appears on:[AlbListenerRuleSpec](#alblistenerrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authenticateCognito` | ***[[]AlbListenerRuleSpecActionAuthenticateCognito](#alblistenerrulespecactionauthenticatecognito)***| ***(Optional)*** |
| `authenticateOidc` | ***[[]AlbListenerRuleSpecActionAuthenticateOidc](#alblistenerrulespecactionauthenticateoidc)***| ***(Optional)*** |
| `fixedResponse` | ***[[]AlbListenerRuleSpecActionFixedResponse](#alblistenerrulespecactionfixedresponse)***| ***(Optional)*** |
| `order` | ***int***| ***(Optional)*** |
| `redirect` | ***[[]AlbListenerRuleSpecActionRedirect](#alblistenerrulespecactionredirect)***| ***(Optional)*** |
| `targetGroupArn` | ***string***| ***(Optional)*** |
| `type` | ***string***||
## AlbListenerRuleSpecActionAuthenticateCognito

Appears on:[AlbListenerRuleSpecAction](#alblistenerrulespecaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authenticationRequestExtraParams` | ***map[string]string***| ***(Optional)*** |
| `onUnauthenticatedRequest` | ***string***| ***(Optional)*** |
| `scope` | ***string***| ***(Optional)*** |
| `sessionCookieName` | ***string***| ***(Optional)*** |
| `sessionTimeout` | ***int***| ***(Optional)*** |
| `userPoolArn` | ***string***||
| `userPoolClientID` | ***string***||
| `userPoolDomain` | ***string***||
## AlbListenerRuleSpecActionAuthenticateOidc

Appears on:[AlbListenerRuleSpecAction](#alblistenerrulespecaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `authenticationRequestExtraParams` | ***map[string]string***| ***(Optional)*** |
| `authorizationEndpoint` | ***string***||
| `clientID` | ***string***||
| `issuer` | ***string***||
| `onUnauthenticatedRequest` | ***string***| ***(Optional)*** |
| `scope` | ***string***| ***(Optional)*** |
| `sessionCookieName` | ***string***| ***(Optional)*** |
| `sessionTimeout` | ***int***| ***(Optional)*** |
| `tokenEndpoint` | ***string***||
| `userInfoEndpoint` | ***string***||
## AlbListenerRuleSpecActionFixedResponse

Appears on:[AlbListenerRuleSpecAction](#alblistenerrulespecaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `contentType` | ***string***||
| `messageBody` | ***string***| ***(Optional)*** |
| `statusCode` | ***string***| ***(Optional)*** |
## AlbListenerRuleSpecActionRedirect

Appears on:[AlbListenerRuleSpecAction](#alblistenerrulespecaction)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `host` | ***string***| ***(Optional)*** |
| `path` | ***string***| ***(Optional)*** |
| `port` | ***string***| ***(Optional)*** |
| `protocol` | ***string***| ***(Optional)*** |
| `query` | ***string***| ***(Optional)*** |
| `statusCode` | ***string***||
## AlbListenerRuleSpecCondition

Appears on:[AlbListenerRuleSpec](#alblistenerrulespec)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `field` | ***string***| ***(Optional)*** |
| `values` | ***[]string***| ***(Optional)*** |
## AlbListenerRuleStatus

Appears on:[AlbListenerRule](#alblistenerrule)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AlbListenerRuleSpec](#alblistenerrulespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AlbListenerRuleStatus](#alblistenerrulestatus)

---
## Sensitive Values
| Name | Type | Description |
|------|------|-------------|
| `action.<index>.authenticate_oidc.<index>.client_secret` | ***string*** ||
