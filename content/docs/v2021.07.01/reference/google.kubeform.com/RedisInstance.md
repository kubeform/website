---
title: RedisInstance
menu:
  docs_v2021.07.01:
    identifier: redisinstance-google.kubeform.com
    name: RedisInstance
    parent: google.kubeform.com-reference
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

## RedisInstance
| Field | Type | Description |
| ------ | ----- | ----------- |
| `apiVersion` | string | `google.kubeform.com/v1alpha1` |
|    `kind` | string | `RedisInstance` |
| `metadata` | ***[Kubernetes meta/v1.ObjectMeta](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#objectmeta-v1-meta)***|Refer to the Kubernetes API documentation for the fields of the `metadata` field.|
| `spec` | ***[RedisInstanceSpec](#redisinstancespec)***||
| `status` | ***[RedisInstanceStatus](#redisinstancestatus)***||
## Phase(`string` alias)

Appears on:[RedisInstanceStatus](#redisinstancestatus)

## RedisInstanceSpec

Appears on:[RedisInstance](#redisinstance), [RedisInstanceStatus](#redisinstancestatus)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `providerRef` | ***[Kubernetes core/v1.LocalObjectReference](https://v1-18.docs.kubernetes.io/docs/reference/generated/kubernetes-api/v1.18/#localobjectreference-v1-core)***||
| `id` | ***string***||
| `alternativeLocationID` | ***string***| ***(Optional)*** |
| `authorizedNetwork` | ***string***| ***(Optional)*** |
| `createTime` | ***string***| ***(Optional)*** |
| `currentLocationID` | ***string***| ***(Optional)*** |
| `displayName` | ***string***| ***(Optional)*** |
| `host` | ***string***| ***(Optional)*** |
| `labels` | ***map[string]string***| ***(Optional)*** |
| `locationID` | ***string***| ***(Optional)*** |
| `memorySizeGb` | ***int64***||
| `name` | ***string***||
| `port` | ***int64***| ***(Optional)*** |
| `project` | ***string***| ***(Optional)*** |
| `redisConfigs` | ***map[string]string***| ***(Optional)*** |
| `redisVersion` | ***string***| ***(Optional)*** |
| `region` | ***string***| ***(Optional)*** |
| `reservedIPRange` | ***string***| ***(Optional)*** |
| `tier` | ***string***| ***(Optional)*** |
## RedisInstanceStatus

Appears on:[RedisInstance](#redisinstance)

| Field | Type | Description |
| ------ | ----- | ----------- |
| `observedGeneration` | ***int64***| ***(Optional)*** Resource generation, which is updated on mutation by the API Server.|
| `output` | ***[RedisInstanceSpec](#redisinstancespec)***| ***(Optional)*** |
| `state` | ***kubeform.dev/kubeform/apis/base/v1alpha1.State***| ***(Optional)*** |
| `phase` | ***[Phase](#phase)***| ***(Optional)*** |
---
