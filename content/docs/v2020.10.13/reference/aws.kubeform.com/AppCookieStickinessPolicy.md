---
title: AppCookieStickinessPolicy
menu:
  docs_v2020.10.13:
    identifier: appcookiestickinesspolicy-aws.kubeform.com
    name: AppCookieStickinessPolicy
    parent: aws.kubeform.com-reference
    weight: 1
menu_name: docs_v2020.10.13
section_menu_id: reference
info:
  version: v2020.10.13
---

## AppCookieStickinessPolicy
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `aws.kubeform.com/v1alpha1` |
|    `kind` | string | `AppCookieStickinessPolicy` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[AppCookieStickinessPolicySpec](#appcookiestickinesspolicyspec)***||
| `status` | ***[AppCookieStickinessPolicyStatus](#appcookiestickinesspolicystatus)***||
## AppCookieStickinessPolicySpec

Appears on:[AppCookieStickinessPolicy](#appcookiestickinesspolicy), [AppCookieStickinessPolicyStatus](#appcookiestickinesspolicystatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `cookieName` | ***string***||
| `lbPort` | ***int64***||
| `loadBalancer` | ***string***||
| `name` | ***string***||
## AppCookieStickinessPolicyStatus

Appears on:[AppCookieStickinessPolicy](#appcookiestickinesspolicy)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[AppCookieStickinessPolicySpec](#appcookiestickinesspolicyspec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
## Phase(`string` alias)

Appears on:[AppCookieStickinessPolicyStatus](#appcookiestickinesspolicystatus)

---
